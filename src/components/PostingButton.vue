<script setup>
import { SquarePen} from 'lucide-vue-next';
</script>

<template>
    <button
        type="button"
        class="p-5 h-14 flex justify-center items-center gap-2 bg-slate-200 rounded-full fixed bottom-5 right-[12.3rem] text-slate-800 transition-all"
    >
        <SquarePen/> <span class="text-sm font-bold uppercase">
        <slot></slot>
        </span>
    </button>
</template>