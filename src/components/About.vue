<template>
  <div class="about">
    <div class="about__wrap">
      <div class="text">
        <div class="text__name">{{ about.name }}</div>
        <div class="text__title">{{ about.position }}</div>
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
  </div>
</template>
<script setup lang="ts">
import { about } from '@/data';
</script>
<style lang="scss" scoped>
.about {
  @include flexCenter;
  flex-direction: column;
  animation: 1s fade-in;

  &__wrap {
    height: 100vh;
    width: $pc-section-content-width;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .text {
    &__name {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      font-family: 'Montserrat';
    }
    &__title {
      margin-bottom: 20px;
      font-family: 'Montserrat';
      font-weight: 300;
    }
    &__introduce {
      max-width: 282px;
      font-family: 'Montserrat';
      text-align: justify;
    }
  }
  .links {
    color: $white;

    &:hover {
      color: $gray;
    }

    &__item {
      font-size: 88px;
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

  @include mobile {
    &__wrap {
      width: 100%;
      justify-content: center;
    }
    .text {
      text-align: center;

      &__introduce {
        max-width: unset;
        text-align: justify;
      }
    }
    .links {
      display: none;
    }
  }
}
</style>
