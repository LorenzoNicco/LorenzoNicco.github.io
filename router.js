import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './src/pages/AppHome.vue';
import AppBio from './src/pages/AppBio.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/bio',
            name: 'bio',
            component: AppBio
        },
    ]
});
export { router };