<template>
  <Loading v-if="isLoading" />
  <Layout v-else class="home"><About /><Skills /><Experience /><Works /></Layout>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Loading from '@/components/Loading.vue';
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

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 24 * 100);
});
</script>
<style lang="scss" scoped>
.home {
  @include mobile {
  }
}
</style>
