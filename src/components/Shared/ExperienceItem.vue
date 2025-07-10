<template>
  <div class="experience-item">
    <div :class="['title', { 'title--open': isCollapse }]" @click="clickHandler">
      <div class="title__arrow"></div>
      <div :class="['title__wrap', { 'title__wrap--empty': contentIsEmpty }]">
        <div class="title__left">
          <div class="title__position">{{ $t(props.position) }}</div>
          <div class="title__company">@{{ $t(props.company) }}</div>
        </div>
        <div class="title__right">
          <div class="title__time">{{ props.time }}</div>
          <div
            :class="[
              'title__icon',
              { 'title__icon--open': isCollapse, 'title__icon--empty': contentIsEmpty },
            ]"
          ></div>
        </div>
      </div>
    </div>
    <div :class="['content', { 'content--open': isCollapse }]">
      <div class="content__projects">
        <div v-for="(item, index) in props.project" :key="index">{{ $t(item) }}</div>
      </div>
      <div class="content__tags">
        <TagItem v-for="(item, index) in props.tags" :key="index" :text="item" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type { ExperienceItemType } from '@/types';
import TagItem from '@/components/Shared/TagItem.vue';

interface ExperienceItemProps extends ExperienceItemType {
  collapse: boolean;
  idx: number;
}

const props = defineProps<ExperienceItemProps>();
const emit = defineEmits<{
  (e: 'onClick', idx: number): void;
}>();

const isCollapse = ref(false);

watch(
  () => props.collapse,
  () => {
    isCollapse.value = props.collapse;
  },
  { immediate: true },
);

const contentIsEmpty = computed(() => props.project.length === 0 && props.tags.length === 0);

const clickHandler = () => {
  if (contentIsEmpty.value) return;

  isCollapse.value = !isCollapse.value;
  emit('onClick', props.idx);
};
</script>
<style lang="scss" scoped>
.experience-item {
  font-family: 'Gideon Roman';

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px;

    &:hover,
    &--open {
      .title__wrap {
        transition: 0.3s all ease;
        width: calc(100% - 24px);
      }
      .title__arrow {
        display: block;
      }
    }
    &--open {
      .title__arrow {
        animation: unset;
      }
    }

    &__wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      color: $black;
      background-color: $white;
      cursor: pointer;
      width: 100%;

      &--empty {
        cursor: unset;
      }
    }

    @keyframes arrow-move {
      from {
        transform: translateX(4px);
      }
      to {
        transform: translateX(0px);
      }
    }
    &__arrow {
      width: 16px;
      height: 16px;
      background-image: url('/assets/icon/caret-right.svg');
      animation: arrow-move 0.5s 0.5s infinite;
      display: none;
    }
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
      background-image: url('/assets/icon/plus.svg');

      &--open {
        background-image: url('/assets/icon/minus.svg');
      }
      &--empty {
        background-image: unset;
      }
    }
  }

  .content {
    display: none;

    &--open {
      padding: 16px 20px;
      border: $white solid 0.5px;
      display: block;
    }
    &__projects {
      div {
        position: relative;
        padding-left: 12px;

        &::after {
          content: '-';
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
    &__tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 28px;
    }
  }

  @include pad {
    .title {
      position: relative;

      &__wrap,
      &__left {
        display: block;
      }
    }
  }
  @include mobile {
    .title {
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
