<script setup>
import { SquarePen } from 'lucide-vue-next';
</script>

<template>
    <button
        type="button"
        class="
        size-20 p-5 flex justify-center items-center bg-slate-200 rounded-full fixed text-slate-800 bottom-36 right-4
        
        md:h-14 md:gap-2 md:bottom-5 md:right-[12.3rem] md:transition-all"
    >
        <SquarePen class="block size-12"/>
        <span class="hidden md:block md:text-sm md:font-bold md:uppercase">
            <slot/>
        </span>
    </button>
</template>