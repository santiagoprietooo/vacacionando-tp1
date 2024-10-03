<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import InputWarning from '../components/InputWarning.vue';
import SubmitButton from '../components/SubmitButton.vue';
import { newUser } from '../services/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const createUser = ref({
    email: '',
    password: ''
});
const loading = ref(false);
const credentials = ref(false);

async function handleSubmit() {
    loading.value = true;

    try {
        await newUser({...createUser.value});
        router.push('/profile');        
    } catch (error) {
        console.error("[LogIn handleSubmit] Error al crear cuenta: ", error);
        credentials.value = true;
    }

    loading.value = false;
}
</script>

<template>
    <section class="p-5">
        <HeaderTitle>Crear Cuenta</HeaderTitle>

        <form
            action="#"
            @submit.prevent="handleSubmit"
            class="flex flex-col items-center"
        >
            <div class="flex flex-col justify-center gap-1 mb-3 w-2/3">
                <label for="email" class="w-max">Email</label>
                <input
                    type="email" id="email"
                    v-model="createUser.email"
                    class="px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"
                >
                <InputWarning v-if="!createUser.email.includes('@')">
                        Esta no es una dirección de correo valida.
                </InputWarning>
            </div>

            <div class="flex flex-col justify-center gap-1 mb-3 w-2/3">
                <label for="password" class="w-max">Contraseña</label>
                <input
                    type="password" id="password"
                    v-model="createUser.password"
                    class="px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"
                >
                <InputWarning v-if="!createUser.password">
                    Complete este campo.
                </InputWarning>
                <InputWarning v-else-if="createUser.password.length < 6">
                    La contraseña debe tener al menos 6 carácteres.
                </InputWarning>
            </div>

            <div class="flex flex-col w-2/3 mt-8">
                <SubmitButton
                    :disabled="!createUser.email || !createUser.password || createUser.password.length < 6"
                    color="slate"
                >
                    Crear Cuenta
                </SubmitButton>
                <InputWarning v-if="credentials">
                    Error al crear la cuenta. Revise los datos enviados.
                </InputWarning>
            </div>
        </form>
    </section>
</template>