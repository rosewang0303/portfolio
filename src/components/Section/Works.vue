<template>
  <Section class="works" :title="{ title: works.title, description: works.description }">
    <div class="works__projects">
      <WorkItem
        v-for="(item, index) in works.projects"
        :key="index"
        :name="item.name"
        :skills="item.skills"
        :tags="item.tags"
        :img="item.img"
        :link="item.link"
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
