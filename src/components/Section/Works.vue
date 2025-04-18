<template>
  <Section id="works" class="works" :title="{ title: works.title, description: works.description }">
    <div class="works__category">
      <BtnItem>全部</BtnItem>
      <BtnItem>工作專案</BtnItem>
      <BtnItem>Side Project</BtnItem>
    </div>
    <div class="works__projects">
      <WorkGalleryItem
        class="fade-in-top"
        v-for="(item, index) in works.projects"
        :key="index"
        :id="item.id"
        :name="item.name"
        :date="item.date"
        :skills="item.skills"
        :tags="item.tags"
        :demoImgs="item.demoImgs"
        :imgs="item.imgs"
        :link="item.link"
        :github="item.github"
      />
    </div>
  </Section>
</template>
<script setup lang="ts">
import Section from '@/components/Shared/Section.vue';
import WorkGalleryItem from '@/components/Shared/WorkGalleryItem.vue';
import BtnItem from '@/components/Shared/BtnItem.vue';

import { works } from '@/data';
</script>
<style lang="scss" scoped>
.works {
  &__category {
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: flex-start;
    // padding-bottom: 8px;
    margin-bottom: 32px;
    // border-bottom: solid 0.5px $gray;
  }
  &__projects {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
  }

  @include mobile {
  }
}
</style>
