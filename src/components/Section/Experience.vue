<template>
  <Section
    id="experience"
    class="experience"
    :title="{
      title: $t(experience.title),
      subTitle: experience.subTitle,
      description: $t(experience.description),
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
import gsap from 'gsap';
import { ref, onMounted } from 'vue';
import Section from '@/components/Shared/Section.vue';
import ExperienceItem from '@/components/Shared/ExperienceItem.vue';
import { experience } from '@/data';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const openIdx = ref(0);

const clickHandler = (idx: number) => {
  openIdx.value = idx;
};

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.experience',
      toggleActions: 'play none none none',
    },
  });

  tl.from('.experience .section-title', { duration: 0.8, opacity: 0, y: 80 }).from(
    '.experience-item',
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
