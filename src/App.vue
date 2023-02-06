<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<template>
  <div>
    <Navbar />
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>
