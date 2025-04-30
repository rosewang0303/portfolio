<template>
  <Layout class="work-detail">
    <Section :title="null">
      <div class="work-detail__wrap">
        <WorkItem
          v-if="workInfo"
          :id="workInfo.id"
          :category="workInfo.category"
          :name="workInfo.name"
          :date="workInfo.date"
          :skills="workInfo.skills"
          :tags="workInfo.tags"
          :description="workInfo.description"
          :demoImgs="workInfo.demoImgs"
          :imgs="workInfo.imgs"
          :link="workInfo.link"
          :github="workInfo.github"
        />
      </div>
      <div class="work-detail__item-title-wrap"><TagItem :text="'專案展示'" /></div>
      <div class="work-detail__item-wrap" v-if="workInfo && workInfo.imgs.length > 0">
        <WorkGalleryItem
          class="fade-in-top"
          v-for="(item, index) in workInfo.imgs"
          :key="index"
          :demoImgs="[item]"
        />
      </div>
    </Section>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Shared/Layout.vue';
import { onMounted, computed } from 'vue';
import WorkItem from '@/components/Shared/WorkItem.vue';
import WorkGalleryItem from '@/components/Shared/WorkGalleryItem.vue';
import TagItem from '@/components/Shared/TagItem.vue';
import Section from '@/components/Shared/Section.vue';
import { works } from '@/data';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  console.error(works.projects);
  console.error(route.params.id);
});

const workInfo = computed(() => {
  return works.projects.find((item) => item.id.toString() === route.params.id);
});
</script>
<style lang="scss" scoped>
.work-detail {
  // width: 80%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-wrap: wrap;

  &__wrap {
    width: 100%;
    margin-top: 60px;
  }
  &__item-title-wrap {
    width: 100%;
  }
  &__item-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 24px 0;
  }

  @include mobile {
    // width: 100%;
    // justify-content: center;
  }
}
</style>
