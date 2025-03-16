<template>
  <Loading v-if="isLoading" />
  <main v-else class="home">
    <TopBar @on-click="isNavOpen = !isNavOpen" :is-open="isNavOpen" />
    <NavLeft
      :class="['home__nav-left', { 'home__nav-left--open': isNavOpen }]"
      @on-close="isNavOpen = false"
    />
    <div :class="['home__content', { 'home__content--open': !isNavOpen }]">
      <About /><Skills /><Experience /><Works />
    </div>
  </main>
</template>
<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import About from '@/components/Section/About.vue';
import Skills from '@/components/Section/Skills.vue';
import Experience from '@/components/Section/Experience.vue';
import Works from '@/components/Section/Works.vue';
import NavLeft from '@/components/NavLeft.vue';
import TopBar from '@/components/TopBar.vue';
import { onMounted, ref } from 'vue';

const isLoading = ref(true);
const isNavOpen = ref(false);

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
