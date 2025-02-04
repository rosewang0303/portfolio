<template>
  <Loading v-if="isLoading" />
  <main v-else class="home">
    <NavLeft class="home__nav-left" />
    <div class="home__content"><About /><About /><About /></div>
  </main>
</template>
<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import About from '@/components/About.vue';
import NavLeft from '@/components/NavLeft.vue';
import { onMounted, ref } from 'vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
});
</script>
<style lang="scss" scoped>
.home {
  display: flex;

  &__nav-left {
    width: 10vw;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }
  &__content {
    width: 90vw;
    overflow-y: auto;
    margin-left: 10vw;
  }
}
</style>
