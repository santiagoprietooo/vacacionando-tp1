<script setup>
import { House, User, LogIn, LogOut } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';
import { logout, subscribeToAuthChanges } from './services/auth';
import { useRouter } from 'vue-router';

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
    router.push('/log-in');
}
</script>

<template>
    <nav class="pr-6 py-5 h-screen flex flex-col items-center justify-between min-w-44 fixed left-0 border-r border-slate-500">
        <RouterLink to="/" class="flex justify-center items-center w-max rounded-full bg-slate-800">
            <img src="/icon/bsas-icon.png" alt="ícono de la app">
        </RouterLink>

        <ul class="flex flex-col">
            <li class="my-2">
                <RouterLink to="/" class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900">
                    <House/> <span>Home</span>
                </RouterLink>
            </li>

            <template v-if="loggedUser.id !== null">
                <li class="my-2">
                    <RouterLink to="/profile" class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900">
                        <User/> <span>Mi Perfil</span>
                    </RouterLink>
                </li>
            </template>
            <template v-else>
                <li class="my-2">
                    <RouterLink to="/log-in" class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900">
                        <User/> <span>Iniciar Sesión</span>
                    </RouterLink>
                </li>

                <li class="my-2">
                    <RouterLink to="/sign-in" class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900">
                        <LogIn/> <span>Crear Cuenta</span>
                    </RouterLink>
                </li>
            </template>
        </ul>

        <template v-if="loggedUser.id !== null">
            <form action="#" @submit.prevent="handleLogout">
                <button type="submit" class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-red-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-red-700 focus:bg-red-900">
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
                <li>
                    <a href="#" class="hover:underline hover:border-b-white">
                        Condiciones de Servicio
                    </a>
                </li>

                <li>
                    <a href="#" class="hover:underline hover:border-b-white">
                        Política de Privacidad
                    </a>
                </li>

                <li>
                    <a href="#" class="hover:underline hover:border-b-white">
                        Política de Cookies
                    </a>
                </li>

                <li>
                    <span>
                        <p class="mt-3">&copy; 2024 - Vacacionando</p>
                    </span>
                </li>
            </ul>
        </div>
    </footer>
</template>