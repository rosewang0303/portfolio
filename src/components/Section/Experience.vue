<template>
  <Section
    id="experience"
    class="experience"
    :title="{
      title: experience.title,
      subTitle: experience.subTitle,
      description: experience.description,
    }"
  >
    <div class="experience__items">
      <ExperienceItem
        v-for="(item, index) in experience.list"
        :key="index"
        :idx="index"
        :position="item.position"
        :company="item.company"
        :time="item.time"
        :tags="item.tags"
        :project="item.project"
        :collapse="index === openIdx"
        @on-click="clickHandler"
      />
    </div>
  </Section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Section from '@/components/Shared/Section.vue';
import ExperienceItem from '@/components/Shared/ExperienceItem.vue';
import { experience } from '@/data';

const openIdx = ref(0);

const clickHandler = (idx: number) => {
  openIdx.value = idx;
};
</script>
<style lang="scss" scoped>
.experience {
  @include flexCenter;
  flex-direction: column;
  padding-bottom: 120px;

  &__items {
    width: 100%;

    > div {
      margin-bottom: 20px;
    }
  }

  @include mobile {
  }
}
</style>
