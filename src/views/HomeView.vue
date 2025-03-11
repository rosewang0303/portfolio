<template>
  <Loading v-if="isLoading" />
  <main v-else class="home">
    <NavLeft
      :class="['home__nav-left', { 'home__nav-left--open': isNavOpen }]"
      @close="isNavOpen = false"
    />
    <div :class="['home__content', { 'home__content--open': !isNavOpen }]">
      <About /><Skills /><Experience /><Works />
    </div>
  </main>
</template>
<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';
import Experience from '@/components/Experience.vue';
import Works from '@/components/Works.vue';
import NavLeft from '@/components/NavLeft.vue';
import { onMounted, ref } from 'vue';

const isLoading = ref(true);
const isNavOpen = ref(true);

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

  @include mobile {
    &__nav-left {
      display: none;
      width: 100vw;
      padding: 30px 0;

      &--open {
        display: flex;
      }
    }
    &__content {
      width: 100vw;
      margin-left: unset;
      display: none;

      &--open {
        display: block;
      }
    }
  }
}
</style>
