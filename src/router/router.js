import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import SignIn from '../pages/SignIn.vue';
import LogIn from '../pages/LogIn.vue';
import Posting from '../pages/Posting.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/log-in', component: SignIn },
    { path: '/sign-in', component: LogIn },
    { path: '/posting', component: Posting }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;