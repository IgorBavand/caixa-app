import { createApp } from "vue";
import "./style.css";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router.js";
import "bootstrap/dist/css/bootstrap.css";
import Cleave from "vue-cleave-component";
import "https://code.jquery.com/jquery-3.6.3.js";
import "bootstrap/dist/js/bootstrap.js";
import "../src/assets/js/load/load.js";
import "../src/assets/js/navbar";
import "../src/assets/css/load/load.css";
import "../src/assets/css/navbar.css";

createApp(App).use(Cleave).use(router).mount("#app");
