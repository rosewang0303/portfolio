<template>
  <div class="loading-bg">
    <div class="loading-bg__name">{{ $t(loading.name) }}</div>
    <div class="loading-bg__title">{{ $t(loading.position) }}</div>
  </div>
</template>
<script setup lang="ts">
import { loading } from '@/data';
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const tl = gsap.timeline();

  tl.from('.loading-bg__name', { duration: 0.6, delay: 0.2, opacity: 0, y: 30 }, '-=0.2')
    .from(
      '.loading-bg__title',
      {
        duration: 0.4,
        opacity: 0,
        y: 30,
      },
      '+=0.5',
    )
    .to('.loading-bg', { duration: 0.1, opacity: 0.9 }, '+=0.2')
    .to('.loading-bg', { duration: 0.6, y: '-100%' });
});
</script>
<style lang="scss" scoped>
.loading-bg {
  width: 100vw;
  height: 100vh;
  @include flexCenter;
  flex-direction: column;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: $white;
  color: $black;

  &__name {
    font-size: 60px;
  }
  &__title {
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 300;
    margin-top: 8px;
  }

  @include mobile {
    &__name {
      font-size: 40px;
    }
    &__title {
      font-size: 12px;
    }
  }
}
</style>
