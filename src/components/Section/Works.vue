<template>
  <Section
    id="works"
    class="works"
    :title="{ title: $t(works.title), description: $t(works.description) }"
  >
    <div class="works__category">
      <Tabs :items="categoryList" @on-click="tabClickHandler" />
    </div>
    <div class="works__projects">
      <WorkGalleryItem
        class="fade-in-top"
        v-for="(item, index) in workList"
        :key="index"
        :id="item.id"
        :category="item.category"
        :demoImgs="item.demoImgs"
        :imgs="item.imgs"
        :demoLinks="item.demoLinks"
        :github="item.github"
        :showLink="true"
        :showName="true"
        :showFirstTag="true"
      />
    </div>
  </Section>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Section from '@/components/Shared/Section.vue';
import WorkGalleryItem from '@/components/Shared/WorkGalleryItem.vue';
import Tabs from '@/components/Shared/Tabs.vue';
import { WorksCategoryEnum } from '@/types';
import { works, categoryList } from '@/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const filterCategoryKey = ref(WorksCategoryEnum.ALL as string);

const tabClickHandler = (key: string) => {
  filterCategoryKey.value = key;
};

const workList = computed(() => {
  if (filterCategoryKey.value === WorksCategoryEnum.ALL) return works.projects;
  return works.projects.filter((item) => item.category === filterCategoryKey.value);
});

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.works',
      toggleActions: 'play none none none',
    },
  });

  tl.from('.works .section-title', { duration: 0.8, opacity: 0, y: 80 }).from(
    '.works .fade-in-top',
    {
      duration: 0.7,
      opacity: 0,
      y: 40,
      stagger: 0.2,
    },
  );
});
</script>
<style lang="scss" scoped>
.works {
  &__category {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
  }
  &__projects {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
