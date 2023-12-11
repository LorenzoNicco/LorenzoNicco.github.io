import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './src/pages/AppHome.vue';
import appBio from './src/pages/appBio.vue';
import SingleProject from './src/pages/SingleProject.vue';
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
            component: appBio
        },
        {
            path: '/:slug',
            name: 'single-project',
            component: SingleProject
            },
    ],
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 }
    }
});
export { router };