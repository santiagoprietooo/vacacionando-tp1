<script setup>
import { House, User, LogIn, LogOut } from 'lucide-vue-next';
</script>

<template>
    <nav class="pr-6 py-5 h-screen flex flex-col items-center justify-between min-w-44 fixed left-0 z-auto border-r border-slate-500">
        <RouterLink to="/" class="flex justify-center items-center w-max rounded-full bg-slate-800">
            <img src="/icon/bsas-icon.png" alt="ícono de la app">
        </RouterLink>

        <ul class="flex flex-col">
            <li class="my-2">
                <RouterLink to="/" class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900">
                    <House/> <span>Home</span>
                </RouterLink>
            </li>

            <li class="my-2">
                <RouterLink to="/log-in" class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900">
                    <User/> <span>Crear Cuenta</span>
                </RouterLink>
            </li>

            <li class="my-2">
                <RouterLink to="/sign-in" class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900">
                    <LogIn/> <span>Iniciar Sesión</span>
                </RouterLink>
            </li>
        </ul>

        <button type="button" class="px-2 flex justify-left items-center h-14 w-40 gap-3 bg-red-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-red-700 focus:bg-red-900">
            <LogOut />
            <span>Cerrar Sesión</span>
        </button>
    </nav>

    <main class="w-full ml-[11.5rem] mr-44">
        <div class="p-5 flex flex-col min-h-screen">
            <RouterView></RouterView>
        </div>
    </main>

    <footer class="px-3 py-5 h-screen flex flex-col items-center justify-end min-w-44 fixed right-0 z-auto border-l border-slate-500">
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