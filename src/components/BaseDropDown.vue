<script setup lang="ts">
import { useSlots, onMounted, onUnmounted, ref } from 'vue'

const showing = ref(false)

function toggle() {
    showing.value = !showing.value
}

const slots = useSlots()
const toggleEl = ref<HTMLElement>();

function handleClickOutside(event: any) {
      if (showing.value && toggleEl.value && !toggleEl.value.contains(event.target)) {
          console.log('Clicked outside!');
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
        toggleEl.value = el;        
    }
    document?.addEventListener('click',handleClickOutside)
})

onUnmounted(() => {
    document?.removeEventListener('click',handleClickOutside)
})

</script>
<template>
    <div class="dropdown">
        <div @click="toggle">
            <slot name="trigger"/>
        </div>
        <slot v-if="showing"/>
    </div>
</template>
<style scoped>
:deep(a)
{
    cursor: pointer;
}
</style>