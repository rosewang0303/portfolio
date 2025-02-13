<template>
  <div class="works">
    <div class="works__wrap">
      <SectionTitle :title="works.title" :description="works.description" />
      <div class="works__projects">
        <WorkItem
          v-for="(item, index) in works.projects"
          :key="index"
          :name="item.name"
          :skills="item.skills"
          :tags="item.tags"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue';
import WorkItem from '@/components/WorkItem.vue';
import { works } from '@/data';
</script>
<style lang="scss" scoped>
.works {
  @include flexCenter;
  flex-direction: column;
  padding-bottom: 120px;

  &__wrap {
    display: flex;
    flex-direction: column;
  }
  &__projects {
    margin-top: 80px;
  }
}
</style>
