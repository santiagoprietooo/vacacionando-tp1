<script setup>
defineProps({
    color : {
        type : String,
        default : 'slate'
    }
});
</script>

<template>
    <button
        type="submit"
        class="px-6 py-2 w-full rounded-lg transition-all text-black font-semibold disabled:opacity-35"
        :class="{
            'bg-slate-300'       : color == 'slate',
            'hover:bg-slate-200' : color == 'slate',
            'focus:bg-slate-400' : color == 'slate',
            'bg-red-300'         : color == 'red',
            'hover:bg-red-200'   : color == 'red',
            'focus:bg-red-400'   : color == 'red',
        }"
    >
        <slot/>
    </button>
</template>