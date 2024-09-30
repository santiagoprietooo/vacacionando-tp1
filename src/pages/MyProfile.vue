<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import { onMounted, ref } from 'vue';
import { subscribeToAuthChanges } from '../services/auth';
import { Pencil, User } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

const loggedUser = ref({
    id: null,
    email: null,
    displayName: null,
    bio: null,
    traveledTo: null,
});

onMounted(() => {
    subscribeToAuthChanges(newUserData => loggedUser.value = newUserData);
});
</script>

<template>
    <section class="p-5 flex flex-col items-center">
        <div class="flex flex-row justify-center gap-2">
            <HeaderTitle>Mi Perfil</HeaderTitle>
            <RouterLink
                to="/profile/edit"
                class="p-2 flex justify-center items-center rounded-full transition-colors hover:bg-slate-600"
            >
                <Pencil class="text-white size-5"/>
            </RouterLink>
        </div>

        <div class="w-max flex flex-row mt-8 bg-slate-100 border-8 border-slate-100 rounded-xl">
            <div class="p-10 flex flex-col items-center justify-center bg-slate-500 rounded-s-xl">
                <User class="text-white size-24"/>
            </div>
            
            <div class="flex flex-col bg-slate-100 text-black">
                <ul class="px-8">
                    <li class="font-bold text-lg">Nombre:</li>
                    <li class="mb-4">{{ loggedUser.displayName || "No definidio todavía..." }}</li>
                    
                    <li class="font-bold text-lg">Correo Electrónico:</li>
                    <li class="mb-4">{{ loggedUser.email || "No definidio todavía..." }}</li>
                    
                    <li class="font-bold text-lg">Biografía:</li>
                    <li class="mb-4">{{ loggedUser.bio || "No definidio todavía..." }}</li>
                    
                    <li class="font-bold text-lg">Viajé a:</li>
                    <li class="mb-4">{{ loggedUser.traveledTo || "No definidio todavía..." }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>