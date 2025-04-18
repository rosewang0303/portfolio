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
        <a
          v-if="props.imgs.length > 0"
          :href="props.link"
          target="_blank"
          :class="[
            'right__wrap',
            { 'cursor-target': props.link, 'right__wrap--effect': props.link },
          ]"
        >
          <img
            :class="[
              'right__image',
              {
                'right__image--active': index === currentIndex,
              },
            ]"
            v-for="(img, index) in props.imgs"
            :key="index"
            :src="img"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { WorksItemType } from '@/types';
import TagItem from '@/components/Shared/TagItem.vue';
import BtnItem from '@/components/Shared/BtnItem.vue';

const props = defineProps<WorksItemType>();

const currentIndex = ref(0);
const timer = ref<number | undefined>(undefined);

onMounted(() => {
  if (props.imgs.length > 1) {
    timer.value = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % props.imgs.length;
    }, 3000);
  }
});
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    padding: 0 8px;
    margin-right: 4px;
  }
  &__wrap {
    padding: 28px 0 64px;
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
    &__wrap {
      width: 330px;
      height: 247px;
      border: 0.2px solid $gray;
      background-color: $black;
      overflow: hidden;
      position: relative;
      display: block;

      &--effect:hover {
        filter: brightness(0.6);
        transition: 0.3s all ease;
      }
    }
    &__image {
      width: 100%;
      height: 100%;
      object-fit: fill;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transform: scale(0.99);
      transition: all 1s ease;

      &--active {
        filter: brightness(1);
        transform: scale(1);
        opacity: 1;
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
