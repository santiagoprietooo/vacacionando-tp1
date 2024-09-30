import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import SignIn from '../pages/SignIn.vue';
import LogIn from '../pages/LogIn.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/log-in', component: SignIn },
    { path: '/sign-in', component: LogIn }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;