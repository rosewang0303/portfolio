<template>
  <div class="experience">
    <div class="experience__wrap">
      <SectionTitle
        :title="experience.title"
        :sub-title="experience.subTitle"
        :description="experience.description"
      />
      <div class="experience__items">
        <ExperienceItem />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue';
import ExperienceItem from '@/components/ExperienceItem.vue';
import { experience } from '@/data';
</script>
<style lang="scss" scoped>
.experience {
  @include flexCenter;
  flex-direction: column;
  padding-bottom: 120px;

  &__wrap {
    display: flex;
    flex-direction: column;
  }
  &__items {
    margin-top: 80px;
  }
}
</style>
