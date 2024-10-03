<script setup>
import FooterItem from './components/FooterItem.vue';
import { House, User, LogIn, LogOut } from 'lucide-vue-next';
import { logout, subscribeToAuthChanges } from './services/auth';
import { ref, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
const loggedUser = ref({
    id: null,
    email: null
});

onMounted(() => {
    subscribeToAuthChanges(newUserData => loggedUser.value = newUserData);
});

const handleLogout = () => {
    logout();
    router.push('/');
}
</script>

<template>
    <nav class="pr-6 py-5 h-screen flex flex-col items-center justify-between min-w-44 fixed left-0 border-r border-slate-500">
        <RouterLink to="/">
            <img src="/icon/vacacionando-icon.png" alt='ícono de "Vacacionando".' width="80rem">
        </RouterLink>

        <ul class="flex flex-col">
            <li class="my-2">
                <RouterLink
                    to="/"
                    class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900"
                >
                    <House/> <span>Home</span>
                </RouterLink>
            </li>

            <template v-if="loggedUser.id !== null">
                <RouterLink
                    to="/profile"
                    class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900"
                >
                    <User/> <span>Perfil</span>
                </RouterLink>
            </template>
            <template v-else>
                <li class="my-2">
                    <RouterLink
                        to="/sign-in"
                        class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900"
                    >
                        <User/> <span>Iniciar Sesión</span>
                    </RouterLink>
                </li>

                <li class="my-2">
                    <RouterLink
                        to="/log-in"
                        class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900"
                    >
                        <LogIn/> <span>Crear Cuenta</span>
                    </RouterLink>
                </li>
            </template>
        </ul>

        <template v-if="loggedUser.id !== null">
            <form action="#" @submit.prevent="handleLogout">
                <button 
                    type="submit" 
                    class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-red-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-red-700 focus:bg-red-900"
                >
                    <LogOut />
                    <span>Cerrar Sesión</span>
                </button>
            </form>
        </template>
    </nav>

    <main class="absolute left-[11.5rem] right-[10.5rem] z-20">
        <RouterView></RouterView>
    </main>

    <footer class="px-3 py-5 h-screen flex flex-col items-center justify-end min-w-44 fixed right-0 border-l border-slate-500">
        <div>
            <ul class="text-xs text-center">
                <FooterItem>Condiciones de Servicio</FooterItem>
                <FooterItem>Política de Privacidad</FooterItem>
                <FooterItem>Política de Cookies</FooterItem>
                <li>
                    <span> <p class="mt-3">&copy; 2024 - Vacacionando</p> </span>
                </li>
            </ul>
        </div>
    </footer>
</template>