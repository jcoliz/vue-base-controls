<script setup lang="ts">
import { ref } from 'vue'

const showToast = ref(false)
</script>
<template>
  <div class="d-flex flex-column align-items-start">
    <BasePageHeader>BasePageHeader</BasePageHeader>
    <BaseSectionHeader>BaseSectionHeader</BaseSectionHeader>
    <div class="d-flex">
      <BaseButton visual="primary" class="me-2">Primary</BaseButton>
      <BaseButton visual="secondary" class="me-2">Secondary</BaseButton>
      <BaseButton visual="danger">Danger</BaseButton>
    </div>

    <BaseDropDown class="mt-3">
        <template #trigger>
            <button class="btn btn-secondary dropdown-toggle" type="button" aria-expanded="false">
              Dropdown button
            </button>          
        </template>
        <ul class="dropdown-menu show">
          <li><a class="dropdown-item">Action</a></li>
          <li><a class="dropdown-item">Another action</a></li>
          <li><a class="dropdown-item">Something else here</a></li>
        </ul>
    </BaseDropDown>

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