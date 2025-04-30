<template>
  <Loading v-if="isLoading" />
  <RouterView v-else />
</template>
<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import { onMounted, ref } from 'vue';

import { RouterView } from 'vue-router';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 24 * 100);
});
</script>
<style lang="scss" scoped></style>
