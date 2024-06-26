import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Error from './views/404.vue'
import { createPinia } from 'pinia'
import '@/interceptors/axios.js';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/Error', component: Error}
    ],
    })
createApp(App).use(router).use(createPinia()).mount('#app')
