<template>
  <Layout class="work-detail">
    <Section :title="null">
      <div class="work-detail__wrap">
        <WorkItem
          v-if="workInfo"
          :id="workInfo.id"
          :category="workInfo.category"
          :skills-count="workInfo.skillsCount"
          :tags-count="workInfo.tagsCount"
          :demoImgs="workInfo.demoImgs"
          :imgs="workInfo.imgs"
          :demoLinks="workInfo.demoLinks"
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
          :showName="false"
          :showFirstTag="false"
        />
      </div>
    </Section>
    <Footer />
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue';
import { computed } from 'vue';
import WorkItem from '@/components/Shared/WorkItem.vue';
import WorkGalleryItem from '@/components/Shared/WorkGalleryItem.vue';
import TagItem from '@/components/Shared/TagItem.vue';
import Section from '@/components/Shared/Section.vue';
import Footer from '@/components/Footer.vue';
import { works } from '@/data';
import { useRoute } from 'vue-router';

const route = useRoute();

const workInfo = computed(() => {
  return works.projects.find((item) => item.id.toString() === route.params.id);
});
</script>
<style lang="scss" scoped>
.work-detail {
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
    flex-wrap: wrap;
    gap: 30px;
    padding: 24px 0;
  }

  @include mobile {
  }
}
</style>
