<template>
  <div class="experience-item"></div>
</template>
<script setup lang="ts">
import { experience } from '@/data';
import type { ExperienceItemType } from '@/types';

interface ExperienceItem extends ExperienceItemType {
  collapse: boolean;
}

const props = defineProps<ExperienceItem>();
</script>
<style lang="scss" scoped>
.experience-item {
}
</style>
