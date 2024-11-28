
import BaseSectionHeader from './components/BaseSectionHeader.vue';

import BasePageHeader from './components/BasePageHeader.vue';
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
  </div>
</template>