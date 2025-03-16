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
        <TagItem v-for="(item, index) in props.tags" :key="index" :text="item" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import type { ExperienceItemType } from '@/types';
import TagItem from '@/components/TagItem.vue';

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
    margin-bottom: 12px;
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
      font-weight: 300;
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
    height: 0px;
    overflow: hidden;
    cursor: pointer;

    &--open {
      padding: 16px 20px;
      border: $white solid 0.5px;
      border-radius: 4px;
      height: 100%;
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
      display: flex;
      flex-wrap: wrap;
      margin-top: 28px;
    }
  }

  @include mobile {
    .title {
      display: block;
      position: relative;

      &__left {
        display: block;
      }
      &__position {
        margin-right: unset;
      }
      &__right {
        justify-content: space-between;
      }
      &__icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .content {
      &__tags {
        margin-top: 12px;
      }
    }
  }
}
</style>
