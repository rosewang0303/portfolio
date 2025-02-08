<template>
  <div class="nav-left">
    <div class="top">
      <div class="top__logo">ROSE</div>
      <div class="top__line"></div>
    </div>
    <div class="links">
      <div
        class="links__item"
        v-for="(item, index) in navLeft.links"
        :style="{ backgroundImage: `url(${item.img})` }"
        :key="index"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { navLeft } from '@/data';
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

  .links {
    @include flexCenter;
    flex-direction: column;

    &__item {
      width: 24px;
      height: 24px;
      margin-bottom: 16px;
      cursor: pointer;
    }
  }
}
</style>
