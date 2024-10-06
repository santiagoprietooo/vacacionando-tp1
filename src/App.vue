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
    router.push('/sign-in');
}
</script>

<template>
    <nav class="
    p-4 flex flex-row items-center justify-between fixed bottom-0 z-30 bg-slate-900 border-t border-slate-500 w-screen

    md:p-0 md:pr-6 md:py-5 md:h-screen md:w-full md:flex-col md:min-w-44 md:left-0 md:border-r
    ">
        <RouterLink to="/" class="hidden md:block">
            <img src="/icon/vacacionando-icon.png" alt='ícono de "Vacacionando".' width="80rem">
        </RouterLink>

        <ul class="flex flex-row items-center gap-8 md:flex-col md:gap-0">
            <li class="my-2">
                <RouterLink
                    to="/"
                    class="
                    size-20 bg-slate-800 flex justify-center items-center hover:bg-slate-700 focus:bg-slate-900 rounded-full
                    transition-colors

                    md:px-2 md:justify-left md:h-14 md:w-40 md:gap-3 md:rounded-tl-none md:rounded-bl-none md:rounded-tr-full md:rounded-br-full"
                >
                    <House class="size-10"/> <span class="hidden md:block">Home</span>
                </RouterLink>
            </li>

            <template v-if="loggedUser.id !== null">
                <RouterLink
                    to="/profile"
                    class="
                    size-20 bg-slate-800 flex justify-center items-center hover:bg-slate-700 focus:bg-slate-900 rounded-full
                    transition-colors

                    md:px-2 md:justify-left md:h-14 md:w-40 md:gap-3 md:rounded-tl-none md:rounded-bl-none md:rounded-tr-full md:rounded-br-full"
                >
                    <User class="size-10"/> <span class="hidden md:block">Perfil</span>
                </RouterLink>
            </template>
            <template v-else>
                <li class="my-2">
                    <RouterLink
                        to="/sign-in"
                        class="
                        size-20 bg-slate-800 flex justify-center items-center hover:bg-slate-700 focus:bg-slate-900 rounded-full
                        transition-colors

                        md:px-2 md:justify-left md:h-14 md:w-40 md:gap-3 md:rounded-tl-none md:rounded-bl-none md:rounded-tr-full md:rounded-br-full"
                        >
                            <User class="size-10"/> <span class="hidden md:block">Iniciar Sesión</span>
                    </RouterLink>
                </li>

                <li class="my-2">
                    <RouterLink
                        to="/log-in"
                        class="
                        size-20 bg-slate-800 flex justify-center items-center hover:bg-slate-700 focus:bg-slate-900 rounded-full
                        transition-colors

                        md:px-2 md:justify-left md:h-14 md:w-40 md:gap-3 md:rounded-tl-none md:rounded-bl-none md:rounded-tr-full md:rounded-br-full"
                        >
                            <LogIn class="size-10"/> <span class="hidden md:block">Crear Cuenta</span>
                    </RouterLink>
                </li>
            </template>
        </ul>

        <template v-if="loggedUser.id !== null">
            <form action="#" @submit.prevent="handleLogout">
                <button 
                    type="submit" 
                        class="
                        size-20 bg-red-800 flex justify-center items-center hover:bg-red-700 focus:bg-red-900 rounded-full
                        transition-colors

                        md:px-2 md:justify-left md:h-14 md:w-40 md:gap-3 md:rounded-tl-none md:rounded-bl-none md:rounded-tr-full md:rounded-br-full"
                    >
                        <LogOut class="size-10"/> <span class="hidden md:block">Cerrar Sesión</span>
                </button>
            </form>
        </template>
    </nav>

    <main class="w-full md:absolute md:left-[11.6rem] md:right-[11.1rem] md:z-20">
        <RouterView></RouterView>
    </main>

    <footer class="hidden md:px-3 md:py-5 md:h-screen md:flex md:flex-col md:items-center md:justify-end md:min-w-44 md:fixed md:right-0 md:border-l md:border-slate-500">
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