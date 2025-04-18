<template>
  <Section id="works" class="works" :title="{ title: works.title, description: works.description }">
    <div class="works__projects">
      <WorkItem
        class="fade-in-top"
        v-for="(item, index) in works.projects"
        :key="index"
        :id="item.id"
        :name="item.name"
        :date="item.date"
        :skills="item.skills"
        :tags="item.tags"
        :imgs="item.imgs"
        :link="item.link"
        :github="item.github"
      />
    </div>
  </Section>
</template>
<script setup lang="ts">
import Section from '@/components/Shared/Section.vue';
import WorkItem from '@/components/Shared/WorkItem.vue';
import { works } from '@/data';
</script>
<style lang="scss" scoped>
.works {
  &__projects {
    width: 100%;
  }

  @include mobile {
  }
}
</style>
