<template>
  <div class="work-item" :href="props.link" target="_blank">
    <div class="work-item__date">{{ props.date }}</div>
    <div class="work-item__wrap">
      <div class="left">
        <div>
          <div class="left__name">
            {{ props.name }}
          </div>
          <div class="left__skills">
            <div v-for="(item, index) in props.skills" :key="index">{{ item }}</div>
          </div>
        </div>
        <div>
          <div class="left__tags">
            <BtnItem v-if="props.github" :link="props.github" class="github"
              ><span class="github__icon"></span>Github</BtnItem
            >
            <TagItem v-for="(item, index) in props.tags" :key="index" :text="item" />
          </div>
        </div>
      </div>
      <div class="right">
        <a :href="props.link" target="_blank" :class="{ 'cursor-target': props.link }">
          <img :class="['right__image', { 'right__image--effect': props.link }]" :src="props.img" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { WorksItemType } from '@/types';
import TagItem from '@/components/Shared/TagItem.vue';
import BtnItem from '@/components/Shared/BtnItem.vue';

const props = defineProps<WorksItemType>();
</script>
<style lang="scss" scoped>
.work-item {
  &:last-child {
    .work-item__wrap {
      border-bottom: solid 0.5px $gray;
    }
  }

  &__date {
    background-color: $white;
    color: $black;
    font-size: 14px;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    padding: 0 8px;
    margin-right: 4px;
  }
  &__wrap {
    padding: 28px 0 36px;
    border-top: solid 0.5px $gray;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__name {
      font-size: 18px;
      margin-bottom: 20px;
      color: $highlight;
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
      display: flex;
      flex-wrap: wrap;
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
  }
  .right {
    width: 330px;
    height: 247px;
    border: 0.2px solid $gray;
    background-color: $black;
    overflow: hidden;

    &__image {
      width: 330px;
      height: 247px;

      &--effect:hover {
        filter: brightness(0.8);
        transition: 0.3s all ease;
        transform: scale(1.1);
      }
    }
  }

  @include mobile {
    flex-direction: column-reverse;

    .left {
      &__name,
      &__tags {
        margin-top: 20px;
      }
    }
    .right {
      width: 100%;
      height: unset;
      margin-top: 20px;

      &__image {
        width: calc(100vw - 20px * 2);
        height: calc(247 * 100vw / 330);
      }
    }
  }
}
</style>
