<template>
  <div>
    <CustomCursor />
    <main class="layout">
      <TopBar @on-click="isNavOpen = !isNavOpen" :is-open="isNavOpen" />
      <NavLeft
        :class="['layout__nav-left', { 'layout__nav-left--open': isNavOpen }]"
        @on-close="isNavOpen = false"
      />
      <div :class="['layout__content', { 'layout__content--open': !isNavOpen }]">
        <slot></slot>
        <Footer />
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import NavLeft from '@/components/NavLeft.vue';
import TopBar from '@/components/TopBar.vue';
import CustomCursor from '@/components/CustomCursor.vue';
import Footer from '@/components/Footer.vue';

import { ref } from 'vue';

const isNavOpen = ref(false);
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  background-color: $black;

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
    padding: $pc-container-padding;
    overflow: hidden;
  }

  @include mobile {
    &__nav-left {
      display: none;
      width: 100vw;
      padding: 200px 0 60px;

      &--open {
        display: flex;
      }
    }
    &__content {
      width: 100vw;
      margin-left: unset;
      display: none;
      padding: $mobile-container-padding;

      &--open {
        display: block;
      }
    }
  }
}
</style>
