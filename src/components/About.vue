<template>
  <div class="about-me">
    <div class="text">
      <div class="text__name">{{ about.name }}</div>
      <div class="text__title">{{ about.title }}</div>
      <div class="text__introduce">
        {{ about.introduce }}
      </div>
    </div>
    <div class="links">
      <div class="links__item" v-for="(link, index) in about.links" :key="index">
        {{ link.text }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { about } from '@/data';
</script>
<style lang="scss" scoped>
.about-me {
  height: 100vh;
  @include flexCenter;
  animation: 1s fade-in;

  .text {
    margin-right: 160px;

    &__name {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      font-family: 'Montserrat';
    }
    &__title {
      margin-bottom: 20px;
      font-family: 'Montserrat';
    }
    &__introduce {
      max-width: 282px;
      font-family: 'Montserrat';
    }
  }
  .links {
    color: $white;

    &:hover {
      color: $gray;
    }

    &__item {
      font-size: 100px;
      margin-bottom: 8px;

      &:hover {
        cursor: pointer;
        color: $white;
        animation: 0.8s link-hover both;
      }
    }
  }
  @keyframes link-hover {
    10% {
      font-style: italic;
    }
    100% {
      font-style: italic;
      transform: translateX(10px);
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
