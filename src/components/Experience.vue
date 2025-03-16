<template>
  <Section
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
        :position="item.position"
        :company="item.company"
        :time="item.time"
        :tags="item.tags"
        :project="item.project"
        :collapse="index === openIdx"
        @click="openIdx = index"
      />
    </div>
  </Section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Section from '@/components/Section.vue';
import ExperienceItem from '@/components/ExperienceItem.vue';
import { experience } from '@/data';

const openIdx = ref(0);
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
