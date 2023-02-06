<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { urlProdutos } from "../../common/utils/urls.js";
import { formatarPreco } from "../../common/utils/maskUtils";

export default {
  setup() {
    const valorTotal = ref(0);
    const vendas = ref({});

    async function getTotal() {
      await axios
        .get(`${urlProdutos}/total-hoje`)
        .then((res) => {
          valorTotal.value = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    }

    async function getVendas() {
      await axios.get(`${urlProdutos}/vendas`).then((res) => {
        vendas.value = res.data;
        console.log(res.data);
      });
    }

    onMounted(() => {
      getTotal();
      getVendas();
    });

    return { valorTotal, vendas, getTotal, getVendas, formatarPreco };
  },
};
</script>

<template>
  <div>
    <h1>
      {{ formatarPreco(this.valorTotal) }}
    </h1>

    <table class="table">
      <div v-for="venda in vendas" :key="venda.id">
        <p>Data da venda: {{ venda.date }}</p>

        <ol>
          Produtos:
          <li v-for="produto in venda.produtos" :key="produto.id">
            <p>{{ produto.titulo }}</p>
            <p>{{ formatarPreco(produto.preco) }}</p>
          </li>
        </ol>
      </div>
    </table>
  </div>
</template>
