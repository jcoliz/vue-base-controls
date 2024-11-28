<script setup lang="ts">
import { ref } from 'vue'

const showToast = ref(false)
</script>
<template>
  <div>
    <BasePageHeader>BasePageHeader</BasePageHeader>
    <BaseSectionHeader>BaseSectionHeader</BaseSectionHeader>
    <BaseButton visual="primary" class="me-2">Primary</BaseButton>
    <BaseButton visual="secondary" class="me-2">Secondary</BaseButton>
    <BaseButton visual="danger">Danger</BaseButton>
    <div class="mt-3">
      <FeatherIcon icon="users" size="24" class="me-2"/>
      <FeatherIcon icon="home" size="24"/>
    </div>
    <div v-if="!showToast">
      <BaseButton visual="primary" @click="showToast = true" class="mt-3">Show toast</BaseButton>
    </div>
  </div>
  <BaseToast v-model="showToast">
      <template #title>TOAST</template>
      <template #default>This is an example toast</template>
  </BaseToast>
</template>