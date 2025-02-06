<template>
  <div class="experience-item" @click="isCollapse = !isCollapse">
    <div class="title">
      <div class="title__left">
        <div class="title__position">{{ props.position }}</div>
        <div class="title__company">{{ props.company }}</div>
      </div>
      <div class="title__right">
        <div class="title__time">{{ props.time }}</div>
        <div
          class="title__icon"
          :class="['title__icon', { 'title__icon--open': isCollapse }]"
        ></div>
      </div>
    </div>
    <div :class="['content', { 'content--open': isCollapse }]">
      <div class="content__projects">
        <div v-for="(item, index) in props.project" :key="index">{{ item }}</div>
      </div>
      <div class="content__tags">
        <span v-for="(item, index) in props.tags" :key="index">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import type { ExperienceItemType } from '@/types';

interface ExperienceItemProps extends ExperienceItemType {
  collapse: boolean;
}

const props = defineProps<ExperienceItemProps>();

const isCollapse = ref(false);

watch(
  () => props.collapse,
  () => {
    isCollapse.value = props.collapse;
  },
  { immediate: true },
);
</script>
<style lang="scss" scoped>
.experience-item {
  font-family: 'Gideon Roman';

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    color: $black;
    background-color: $white;
    border-radius: 4px;
    cursor: pointer;

    &__left {
      display: flex;
      align-items: center;
      font-size: 16px;
    }
    &__position {
      margin-right: 4px;
    }
    &__company {
    }
    &__right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 16px;
    }
    &__time {
      margin-right: 40px;
    }
    &__icon {
      width: 16px;
      height: 16px;
      background-image: url('assets/icon/plus.svg');

      &--open {
        background-image: url('assets/icon/minus.svg');
      }
    }
  }
  .content {
    margin-top: 12px;
    height: 0px;
    overflow: hidden;
    cursor: pointer;

    &--open {
      height: auto;
      padding: 16px 20px;
      border: $white solid 0.5px;
      border-radius: 4px;
      transition: 0.3s height ease;
    }

    &__projects {
      div {
        position: relative;
        padding-left: 12px;

        &::after {
          content: '-';
          position: absolute;
          left: 0;
        }
      }
    }
    &__tags {
      margin-top: 20px;

      span {
        font-size: 14px;
        padding: 4px 12px;
        border: solid $white 0.5px;
        border-radius: 30px;
        margin-right: 12px;
      }
    }
  }
}
</style>
