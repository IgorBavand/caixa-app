import { createRouter, createWebHistory } from "vue-router";


import Home from './views/Home.vue';
import ListarProdutos from './components/produtos/ListarProdutos.vue';
import FormProduto from './components/produtos/FormProduto.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home 
    },
    {
        path: '/produtos',
        name: 'produtos',
        component: ListarProdutos 
    },
    {
        path: '/form-produto/:produto?',
        name: 'form-produto',
        component: FormProduto 
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;