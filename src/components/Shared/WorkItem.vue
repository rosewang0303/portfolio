<template>
  <div class="work-item">
    <div class="work-item__date">{{ props.date }}</div>
    <div class="work-item__wrap">
      <div>
        <div class="work-item__name">
          {{ props.name }}
        </div>
        <div class="work-item__description" v-html="props.description"></div>
        <div class="work-item__skills">
          <div v-for="(item, index) in props.skills" :key="index">{{ item }}</div>
        </div>
      </div>
      <div>
        <div class="work-item__tags">
          <TagItem v-for="(item, index) in props.tags" :key="index" :text="item"></TagItem>
        </div>
        <div class="work-item__btns">
          <BtnItem v-if="props.github" :link="props.github" class="github"
            ><span class="github__icon"></span>Github</BtnItem
          >
          <BtnItem v-if="props.link" :link="props.link" class="github">Project Demo</BtnItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { WorksItemType } from '@/types';
import BtnItem from '@/components/Shared/BtnItem.vue';
import TagItem from '@/components/Shared/TagItem.vue';

const props = defineProps<WorksItemType>();
</script>
<style lang="scss" scoped>
.work-item {
  &__date {
    background-color: $white;
    color: $black;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    padding: 0 8px;
    margin-right: 4px;
  }
  &__wrap {
    padding: 28px 0 64px;
  }
  &__name {
    font-size: 18px;
    margin-bottom: 20px;
    color: $highlight;
  }
  &__description {
    margin-bottom: 20px;

    :deep(a) {
      text-decoration: underline;

      &:hover {
        color: $highlight;
      }
    }
  }
  &__skills {
    div {
      position: relative;
      padding-left: 12px;

      &::after {
        content: '-';
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  &__tags {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__skills {
    margin-bottom: 20px;
  }
  &__btns {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .github {
    &__icon {
      width: 16px;
      height: 16px;
      margin-right: 4px;
      background-image: url('/assets/icon/github-dark.svg');
      background-size: contain;
    }
  }

  @include pad {
    &__name,
    &__btns {
      margin-top: 20px;
    }
  }
}
</style>
