<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import InputWarning from '../components/InputWarning.vue';
import { ref } from 'vue';
import { login } from '../services/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref({
    email: '',
    password: ''
});
const loading = ref(false);
const credentials = ref(false);

async function handleSubmit() {
    loading.value = true;

    try {
        await login({...user.value});
        router.push('/');
        
    } catch (error) {
        console.error("[Login handleSubmit] Error al autenticar: ", error);
        credentials.value = true;
    }

    loading.value = false;
}
</script>

<template>
    <section class="p-5">
        <HeaderTitle>Iniciar Sesión</HeaderTitle>

        <form action="#" @submit.prevent="handleSubmit" class="flex flex-col items-center">
            <div class="flex flex-col justify-center gap-1 mb-3 w-2/3">
                <label for="email" class="w-max">Email</label>
                <input
                    type="email" id="email"
                    v-model="user.email"
                    class="px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"
                >
                <InputWarning v-if="!user.email.includes('@')">
                        Esta no es una dirección de correo valida.
                </InputWarning>
            </div>

            <div class="flex flex-col justify-center gap-1 mb-3 w-2/3">
                <label for="password" class="w-max">Contraseña</label>
                <input
                    type="password" id="password"
                    v-model="user.password"
                    class="px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"
                >
                <InputWarning v-if="!user.password">
                        Complete este campo.
                </InputWarning>
            </div>

            <div class="flex flex-col w-2/3 mt-8">
                <button
                    type="submit"
                    :disabled="!user.email || !user.password"
                    class="px-6 py-2 w-full mb-3 rounded-lg bg-slate-300 transition-all text-black font-semibold
                        hover:bg-slate-200 focus:bg-slate-400 disabled:opacity-35"
                >
                    Iniciar Sesión
                </button>
                <InputWarning v-if="credentials">
                    Error en las credenciales. Revise los datos enviados.
                </InputWarning>
            </div>
        </form>
    </section>
</template>