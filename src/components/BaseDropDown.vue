<script setup lang="ts">
import { useSlots, onMounted, onUnmounted, ref } from 'vue'

const showing = ref(false)

function toggle() {
    showing.value = !showing.value
}

const slots = useSlots()
const triggerEl = ref<HTMLElement>();

function handleClickOutside(event: any) {
    if (showing.value && triggerEl.value && !triggerEl.value.contains(event.target)) {
        showing.value = false;
    }
}

onMounted(() => {
    const slot = slots.trigger;
    if (slot)
    {
        const nodes = slot();
        const node = nodes[0];
        const el = node.el as HTMLElement;
        triggerEl.value = el;
        // Note that we can't @onclick on the slot itself, so
        // we'll directly add a listener, now that we have the
        // element anyway
        triggerEl.value?.addEventListener('click',toggle)
    }
    document?.addEventListener('click',handleClickOutside)
})

onUnmounted(() => {
    document?.removeEventListener('click',handleClickOutside)
    triggerEl.value?.removeEventListener('click',toggle)
})

</script>
<template>
    <div class="dropdown">
        <slot name="trigger"/>
        <slot v-if="showing"/>
    </div>
</template>
<style scoped>
:deep(a)
{
    cursor: pointer;
}
</style>