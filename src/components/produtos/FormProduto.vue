<script>
import axios from "axios";
import { reactive } from "vue";
import { urlProdutos } from "../../common/utils/urls.js";
import Cleave from "vue-cleave-component";

export default {
  props: ["produtoEditar"],

  setup(props) {
    const produto = reactive({
      ...props.produtoEditar,
    });

    async function save() {
      const onlyNumbersPreco = this.produto.preco.replace(/\D/g, "");

      if (this.produto.id != null) {
        const produtoSalvo = await axios
          .put(`${urlProdutos}/${this.produto.id}`, {
            titulo: this.produto.titulo,
            preco: onlyNumbersPreco,
            estoque: this.produto.estoque,
          })
          .then(function (response) {
            console.log("redirecionar...");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        const produtoSalvo = await axios
          .post(`${urlProdutos}`, {
            titulo: this.produto.titulo,
            preco: onlyNumbersPreco,
            estoque: this.produto.estoque,
          })
          .then(function (response) {
            console.log("redirecionar...");
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    return {
      save,
      produto,
      options: {
        money: {
          numeral: true,
          prefix: "R$ ",
          signBeforePrefix: true,
        },
      },
    };
  },
  components: {
    Cleave,
  },
};
</script>

<template>
  <div class="transicao">
    <div class="p-5">
      <form>
        <div class="form-group p-3">
          <label for="exampleInputEmail1">Nome do produto</label>
          <input
            type="text"
            class="form-control"
            id="nome"
            placeholder="Digite o nome do produto"
            v-model="produto.titulo"
          />
        </div>

        <div class="form-group p-3">
          <label for="preco">Preço</label>
          <cleave
            type="text"
            class="form-control"
            id="preco"
            placeholder="Preço"
            :options="options.money"
            name="preco"
            v-model="produto.preco"
          />
        </div>

        <div class="form-group p-3">
          <label for="estoque">Estoque</label>
          <input
            type="text"
            class="form-control"
            id="estoque"
            placeholder="Estoque"
            v-model="produto.estoque"
          />
        </div>

        <button type="submit" class="btn btn-primary m-3" @click="save()">
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>
