<script>
import axios from "axios";
import FormProduto from "./FormProduto.vue";
import { urlProdutos } from "../../common/utils/urls.js";
import { ref, onMounted } from "vue";
import { formatarPreco } from "../../common/utils/maskUtils";

export default {
  setup() {
    const produtos = ref([]);
    const exibirForm = ref(false);
    const produtoEditar = ref();

    async function getProdutos() {
      await axios.get(`${urlProdutos}`).then((res) => {
        produtos.value = res.data;
      });
    }

    function alterarSituacaoForm() {
      const situacao = exibirForm.value === true ? false : true;
      exibirForm.value = situacao;
      produtoEditar.value = null;
      return situacao;
    }

    function getProduto(produto) {
      if (exibirForm.value == true) {
        exibirForm.value = false;
        produtoEditar.value = produto;
        setTimeout(() => {
          console.log("Delayed for 1 second.");
          exibirForm.value = true;
        }, 1);
      } else {
        produtoEditar.value = produto;
        exibirForm.value = true;
      }
    }

    async function removeProduto(id) {
      let x = window.confirm("Tem certeza que desaja remover esse produto?");
      if (x) {
        await axios.delete(`${urlProdutos}/${id}`);
        getProdutos();
      }
    }

    async function adicionarProduto(id) {
      await axios
        .get(`${urlProdutos}/add/${id}`)
        .then((res) => {
          alert("produto adicionado!");
        })
        .catch((err) => {
          alert(err);
        });
    }

    onMounted(() => {
      getProdutos();
    });

    return {
      produtos,
      exibirForm,
      produtoEditar,
      getProduto,
      getProdutos,
      alterarSituacaoForm,
      removeProduto,
      formatarPreco,
      adicionarProduto,
    };
  },
  components: {
    FormProduto,
  },
};
</script>
<template>
  <div>
    <div class="row d-flex justify-content-center">
      <button class="btn btn-primary" @click="alterarSituacaoForm()">
        Novo produto
      </button>
    </div>
    <div v-if="exibirForm == true">
      <FormProduto :produtoEditar="this.produtoEditar" />
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Estoque</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <td>{{ produto.titulo }}</td>
          <td>{{ formatarPreco(produto.preco) }}</td>
          <td>{{ produto.estoque }} Unidade(s)</td>
          <!--Ações-->
          <td>
            <button @click="getProduto(produto)" class="btn btn-warning m-2">
              Editar
            </button>

            <button
              @click="removeProduto(produto.id)"
              class="btn btn-danger m-2"
            >
              Deletar
            </button>

            <button
              class="btn btn-primary"
              @click="adicionarProduto(produto.id)"
            >
              Adicionar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
