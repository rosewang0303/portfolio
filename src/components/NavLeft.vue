<template>
  <div class="nav-left">
    <div class="close" @click="emit('close')">x</div>
    <div class="top">
      <div class="top__logo">ROSE</div>
      <div class="top__line"></div>
    </div>
    <div class="about-links">
      <div class="about-links__item" v-for="(link, index) in about.links" :key="index">
        {{ link.text }}
      </div>
    </div>
    <div class="contact-links">
      <a
        class="contact-links__item"
        v-for="(item, index) in navLeft.links"
        :key="index"
        :style="{ backgroundImage: `url(${item.img})` }"
        :href="item.url"
        target="_blank"
      ></a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { navLeft, about } from '@/data';

const emit = defineEmits(['close']);
</script>
<style lang="scss" scoped>
.nav-left {
  height: 100vh;
  border-right: 0.5px solid $white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;

  .top {
    @include flexCenter;
    flex-direction: column;

    .close {
      display: none;
    }
    &__logo {
      font-size: 20px;
      writing-mode: vertical-lr;
      cursor: pointer;
    }
    &__line {
      width: 0.5px;
      height: 200px;
      background-color: $white;
      margin: 40px 0;
    }
  }
  .about-links {
    display: none;
  }
  .contact-links {
    @include flexCenter;
    flex-direction: column;
    filter: brightness(1);

    &:hover {
      .links__item {
        filter: brightness(0.5);

        &:hover {
          filter: brightness(1);
        }
      }
    }

    &__item {
      width: 24px;
      height: 24px;
      margin-bottom: 16px;
      cursor: pointer;
    }
  }
  @include mobile {
    background-color: $black;
    justify-content: space-between;
    padding: 0;

    .close {
      position: absolute;
      top: 8px;
      right: 8px;
      display: block;
      font-size: 32px;
    }
    .top {
      width: 100vw;
      margin-top: 20px;
      position: relative;

      &__logo {
        writing-mode: unset;
      }
      &__line {
        display: none;
      }
    }
    .contact-links {
      flex-direction: row;
      margin-bottom: 100px;

      &__item {
        margin-bottom: unset;
        margin: 0 12px;
      }
    }
    .about-links {
      display: block;
      text-align: center;

      &__item {
        font-size: 28px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
