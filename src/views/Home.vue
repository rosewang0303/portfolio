<template>
  <Layout class="home"><About /><Skills /><Experience /><Works /></Layout>
</template>
<script setup lang="ts">
import About from '@/components/Section/About.vue';
import Skills from '@/components/Section/Skills.vue';
import Experience from '@/components/Section/Experience.vue';
import Works from '@/components/Section/Works.vue';
import Layout from '@/components/Shared/Layout.vue';

import { useSectionHashSync } from '@/composables/useSectionHashSync';

useSectionHashSync(['about', 'skills', 'experience', 'works'], {
  offset: 0,
  threshold: 0.5,
});
</script>
<style lang="scss" scoped>
.home {
  @include mobile {
  }
}
</style>
