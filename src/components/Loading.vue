<template>
  <div class="loading-bg">
    <div class="loading-bg__name">{{ loading.name }}</div>
    <div class="loading-bg__title">{{ loading.position }}</div>
  </div>
</template>
<script setup lang="ts">
import { loading } from '@/data';
</script>
<style lang="scss" scoped>
.loading-bg {
  width: 100vw;
  height: 100vh;
  @include flexCenter;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $white;
  color: $black;
  animation: 0.5s fade-out 2s both ease-in-out;

  &__name {
    font-size: 60px;
    animation: 1s fade-in 0.2s both;
  }
  &__title {
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 300;
    margin-top: 8px;
    animation: 1s fade-in 0.3s both;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fade-out {
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
      transform: translateY(-100vh);
      display: none;
    }
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
