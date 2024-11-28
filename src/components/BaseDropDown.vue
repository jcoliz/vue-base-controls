<script setup lang="ts">
import { ref } from 'vue'

const showing = ref(false)

function toggle() {
    showing.value = !showing.value
}

// TODO: We need a way to close the dialog if we click anywhere ELSE

</script>
<template>
    <div class="dropdown">
        <div @click="toggle">
            <slot name="trigger"/>
        </div>
        <slot v-if="showing"/>
    </div>
</template>
