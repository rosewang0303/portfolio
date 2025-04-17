<template>
  <div class="section-content" ref="sectionRef">
    <div class="section-content__wrap">
      <SectionTitle class="section-content__title" v-if="props.title" :="props.title" />
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SectionTitle from '@/components/Shared/SectionTitle.vue';
import { useSequentialFadeIn } from '@/composables/useSequentialFadeIn';

const props = defineProps<{
  title: { title: string; description: string; subTitle?: string } | null;
}>();

const sectionRef = ref<HTMLElement | null>(null);
useSequentialFadeIn(sectionRef);
</script>
<style lang="scss" scoped>
.section-content {
  width: 100%;
  @include flexCenter;
  flex-direction: column;
  padding-bottom: 120px;

  &__wrap {
    width: $pc-section-content-width;
    @include flexCenter;
    flex-wrap: wrap;
  }
  &__title {
    margin-bottom: 60px;
  }

  @include mobile {
    &__wrap {
      width: 100%;
      justify-content: center;
    }
  }
}
</style>
