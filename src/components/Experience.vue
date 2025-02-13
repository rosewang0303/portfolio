<template>
  <div class="experience">
    <div class="experience__wrap">
      <SectionTitle
        :title="experience.title"
        :sub-title="experience.subTitle"
        :description="experience.description"
      />
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import SectionTitle from '@/components/SectionTitle.vue';
import ExperienceItem from '@/components/ExperienceItem.vue';
import { experience } from '@/data';

const openIdx = ref(0);
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

    > div {
      margin-bottom: 20px;
    }
  }
}
</style>
