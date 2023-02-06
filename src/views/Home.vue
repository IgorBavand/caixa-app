<script>
import ListarVendas from "../components/vendas/ListarVendas.vue";
export default {
  setup() {},
  components: {
    ListarVendas,
  },
};
</script>
<template>
  <div>
    <h1 class="text-center">Resumo de vendas diário</h1>

    <div class="container">
      <ListarVendas />
    </div>
  </div>
</template>
