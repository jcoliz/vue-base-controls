<script setup lang="ts">
import { watch } from 'vue'

let timeout: NodeJS.Timeout | undefined = undefined

const showing = defineModel<boolean>()

function close() {
    showing.value = false
}

watch(showing,(visible)=>{
    if (visible) {
        if (timeout)
        {
            clearTimeout(timeout)
        }
        // Automatically close time out after 5s
        timeout = setTimeout(() => showing.value = false, 5000)
    }
}, { immediate: true })
</script>
<template>
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <Transition>
            <div v-if="showing" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <FeatherIcon class="me-2 mb-1" icon="alert-triangle"/>
                    <strong class="me-auto"><slot name="title">Warning</slot></strong>
                    <small><slot name="subtitle"/></small>
                    <button type="button" class="btn-close" @click="close" aria-label="Close"/>
                </div>
                <div class="toast-body">
                    <slot/>
                </div>
            </div>    
        </Transition>
    </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>