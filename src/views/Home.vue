<template>
  <Layout class="home">
    <Loading v-if="!hasLoaded" />
    <template v-else> <About /><Skills /><Experience /><Works /><Footer /> </template>
  </Layout>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useBaseStore } from '@/stores/base';
import { storeToRefs } from 'pinia';
import Loading from '@/components/Loading.vue';
import About from '@/components/Section/About.vue';
import Skills from '@/components/Section/Skills.vue';
import Experience from '@/components/Section/Experience.vue';
import Works from '@/components/Section/Works.vue';
import Layout from '@/components/Layout.vue';
import Footer from '@/components/Footer.vue';
import { useSectionHashSync } from '@/composables/useSectionHashSync';

useSectionHashSync(['about', 'skills', 'experience', 'works'], {
  offset: 0,
  threshold: 0.5,
});

const { setHasLoaded } = useBaseStore();
const { hasLoaded } = storeToRefs(useBaseStore());

onMounted(() => {
  if (!hasLoaded.value) {
    setTimeout(() => {
      setHasLoaded(true);
    }, 24 * 100);
  }
});
</script>
<style lang="scss" scoped>
.home {
  @include mobile {
  }
}
</style>
