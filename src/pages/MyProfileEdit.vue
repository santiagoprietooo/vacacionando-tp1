<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import { onMounted, ref } from 'vue';
import { editMyProfile, subscribeToAuthChanges } from '../services/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const argLocations = [
    {province: "Buenos Aires", id: "buenos-aires"},
    {province: "Buenos Aires Capital Federal", id: "capital-federal"},
    {province: "Catamarca", id: "catamarca"},
    {province: "Chaco", id: "chaco"},
    {province: "Chubut", id: "chubut"},
    {province: "Córdoba", id: "cordoba"},
    {province: "Corrientes", id: "corrientes"},
    {province: "Entre Ríos", id: "entre-rios"},
    {province: "Formosa", id: "formosa"},
    {province: "Jujuy", id: "jujuy"},
    {province: "La Pampa", id: "la-pampa"},
    {province: "La Rioja", id: "la-rioja"},
    {province: "Mendoza", id: "mendoza"},
    {province: "Misiones", id: "misiones"},
    {province: "Neuquen", id: "neuquen"},
    {province: "Río Negro", id: "rio-negro"},
    {province: "Salta", id: "salta"},
    {province: "San Juan", id: "san-juan"},
    {province: "San Luís", id: "san-luis"},
    {province: "Santa Cruz", id: "santa-cruz"},
    {province: "Sante Fe", id: "santa-fe"},
    {province: "Santiago del Estero", id: "santiago-del-estero"},
    {province: "Tierra del Fuego", id: "tierra-del-fuego"},
    {province: "Tucumán", id: "tucuman"}
]
const loading = ref(false);
const editData = ref({
    displayName: '',
    bio: '',
    traveledTo: []
});

onMounted(() => {
    subscribeToAuthChanges(
        newUserData => editData.value = {
            displayName: newUserData.displayName,
            bio: newUserData.bio,
            traveledTo: newUserData.traveledTo || []
        }
    );
});

const handleSubmit = async () => {
    loading.value = true;

    try {
        await editMyProfile({...editData.value});
        router.push('/profile');
    } catch (error) {
        console.error("[MyProfileEdit handleSubmit] Error al actualizar el perfil: ", error);
    }

    loading.value = false;
}
</script>

<template>
    <section class="p-5">
        <HeaderTitle>Editar Mi Perfil</HeaderTitle>

        <form action="#" @submit.prevent="handleSubmit" class="flex flex-col items-center">
            <div class="flex flex-col justify-center gap-1 mb-5 w-2/3">
                <label for="displayName" class="w-max font-bold">Nombre</label>
                <input
                    type="text" id="displayName"
                    v-model="editData.displayName"
                    class="px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"
                >
            </div>
            
            <div class="flex flex-col justify-center gap-1 mb-5 w-2/3">
                <label for="bio" class="w-max font-bold">Descripción</label>
                <textarea
                    id="bio" rows="10"
                    v-model="editData.bio"
                    class="px-3 py-2 w-full resize-none border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"
                ></textarea>
            </div>

            <div class="flex flex-col justify-center gap-1 mb-5 w-2/3">
                <p class="font-bold">Viajé a...</p>
                <div class="flex flex-row gap-2 my-1" v-for="location in argLocations">  
                    <input  
                        type="checkbox"  
                        v-model="editData.traveledTo"  
                        :value="location.province"  
                        :id="location.id"  
                    >  
                    <label :for="location.id">{{ location.province }}</label>  
                </div>
            </div>

            <div class="flex flex-col w-2/3 mt-8">
                <button
                    type="submit"
                    :disabled="editData.displayName != editData.displayName"
                    class="px-6 py-2 w-full rounded-lg bg-slate-300 transition-all text-black font-semibold
                    hover:bg-slate-200 focus:bg-slate-400 disabled:opacity-35"
                >
                    Actualizar Perfil
                </button>
            </div>
        </form>
    </section>
</template>
