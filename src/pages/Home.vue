<script setup>
import { onMounted, ref } from 'vue';
import { savePublicPost, readPublicPosts } from '../services/users-posts';
import { SquarePen, X, UserRound } from 'lucide-vue-next';
import HeaderTitle from '../components/HeaderTitle.vue';
import InputWarning from '../components/InputWarning.vue';

const posts = ref([]);
const newPosts = ref({
    title : '',
    description : '',
    location : ''
});
const argLocations = [
    {province: "Buenos Aires"},
    {province: "Buenos Aires Capital Federal"},
    {province: "Catamarca"},
    {province: "Chaco"},
    {province: "Chubut"},
    {province: "Córdoba"},
    {province: "Corrientes"},
    {province: "Entre Ríos"},
    {province: "Formosa"},
    {province: "Jujuy"},
    {province: "La Pampa"},
    {province: "La Rioja"},
    {province: "Mendoza"},
    {province: "Misiones"},
    {province: "Neuquen"},
    {province: "Río Negro"},
    {province: "Salta"},
    {province: "San Juan"},
    {province: "San Luís"},
    {province: "Santa Cruz"},
    {province: "Sante Fe"},
    {province: "Santiago del Estero"},
    {province: "Tierra del Fuego"},
    {province: "Tucumán"}
]

onMounted(async () => {
    readPublicPosts(newPosts => posts.value = newPosts);
});

let isActive = ref(false);

function handleSubmit() {
    savePublicPost({
        ...newPosts.value,
    });

    isActive.value = false;
}

function handleForm() {
    isActive.value = true;
}
function closeForm() {
    isActive.value = false;
}
</script>

<template>
    <HeaderTitle>Bienvenido a la Home</HeaderTitle>

    <section class="flex flex-col mt-8">
        <article
            v-for="post in posts"
            class="p-4 rounded-2xl transition-all hover:bg-slate-800"
        >
            <div class="flex flex-row items-center gap-3">
                <span class="flex flex-col justify-center items-center rounded-full bg-white size-10">
                    <UserRound class="text-black"/>
                </span>
                <p class="text-xl font-bold">Nombre de usuario</p>
            </div>

            <div class="p-4 mt-3 ml-[3.250rem] flex flex-col border border-slate-500 rounded-2xl">
                <p class="text-lg font-medium">{{ post.title }}</p>
                <p class="text-base font-normal">{{ post.description }}</p>
                <p class="mt-4 text-sm font-semibold">{{ post.location }}</p>
            </div>
        </article>
    </section>

    <button
        type="button"
        @click="handleForm"
        class="p-5 h-14 flex justify-center items-center gap-2 bg-slate-200 rounded-full fixed bottom-5 right-[12.2rem] text-slate-800 transition-all"
    >
        <SquarePen/>
        <span class="text-sm font-bold uppercase">Postear</span>
    </button>

    <div :class=" isActive ? 'block absolute left-0 right-0 top-0 bottom-0 z-20' : 'hidden' ">
        <form action="#" @submit.prevent="handleSubmit" class="p-3 flex flex-col justify-center items-center bg-slate-700 bg-opacity-95 min-h-screen">
            <div class="fixed top-2 right-2">
                <button
                    type="button"
                    @click="closeForm"
                    class="size-12 flex justify-center items-center bg-white rounded-full hover:bg-slate-200"
                >
                    <X class="text-black"/>
                </button>
            </div>
        
            <div class="flex flex-col justify-center gap-1 mb-3 w-2/3">
                <label for="title" class="w-max">Título</label>
                <input
                    type="text" id="title"
                    v-model="newPosts.title"
                    class="px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"
                >        
                <InputWarning v-if="newPosts.title.length < 5 || newPosts.title.length > 50">
                    El campo debe tener entre 5 y 50 carácteres.
                </InputWarning>
            </div>

            <div class="flex flex-col justify-center gap-1 mb-3 w-2/3">
                <label for="description" class="w-max">Descripción</label>
                <textarea
                    id="description" rows="10"
                    v-model="newPosts.description"
                    class="px-3 py-2 w-full resize-none border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"
                ></textarea>

                <InputWarning v-if="newPosts.description.length < 10 || newPosts.description.length > 550">
                    El campo debe tener entre 10 y 550 carácteres.
                </InputWarning>
            </div>

            <div class="flex flex-col justify-center gap-1 mb-3 w-2/3">
                <label for="location" class="w-max">Provincia</label>
                <select
                    id="location"
                    v-model="newPosts.location"
                    class="px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"
                >
                    <option
                        v-for="location in argLocations"
                        :value="location.province"
                    >
                        {{ location.province }}
                    </option>
                </select>

                <InputWarning v-if="!newPosts.location">
                    Debe seleccionar una provincia.
                </InputWarning>
            </div>

            <div class="flex flex-col w-2/3 mt-8">
                <button
                    type="submit"
                    :disabled="newPosts.title.length < 5 || newPosts.title.length > 50 || newPosts.description.length < 10 || newPosts.description.length > 550 || !newPosts.location"
                    class="px-6 py-2 w-full rounded-lg bg-slate-300 transition-all text-black font-semibold
                    hover:bg-slate-200 focus:bg-slate-400 disabled:opacity-35"
                >
                    Postear
                </button>
            </div>
        </form>
    </div>
</template>