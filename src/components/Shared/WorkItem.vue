<template>
  <div class="work-item">
    <div class="work-item__date">{{ props.date }}</div>
    <div class="work-item__wrap">
      <div class="left">
        <div>
          <div class="left__name">
            {{ props.name }}
          </div>
          <div class="left__description" v-html="props.description"></div>
          <div class="left__skills">
            <div v-for="(item, index) in props.skills" :key="index">{{ item }}</div>
          </div>
          <div class="left__tags">
            <div v-for="(item, index) in props.tags" :key="index">{{ item }}</div>
          </div>
        </div>
        <div>
          <div class="left__btns">
            <BtnItem v-if="props.github" :link="props.github" class="github"
              ><span class="github__icon"></span>Github</BtnItem
            >
            <BtnItem v-if="props.link" :link="props.link" class="github">Project Demo</BtnItem>
          </div>
        </div>
      </div>
      <div class="right">
        <div v-if="props.imgs.length > 0" :class="['right__wrap']">
          <img
            :class="[
              'right__image',
              {
                'right__image--active': index === currentIndex,
              },
            ]"
            v-for="(img, index) in props.demoImgs"
            :key="index"
            :src="img"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { WorksItemType } from '@/types';
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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
  }

  .left {
    display: flex;
    flex-direction: column;

    &__name {
      font-size: 18px;
      margin-bottom: 20px;
      color: $highlight;
    }
    &__description {
      margin-bottom: 20px;
    }
    &__skills,
    &__tags {
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
    &__skills {
      margin-bottom: 20px;
    }
    &__btns {
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
      border: 0.5px solid $gray;
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

  @include pad {
    &__wrap {
      flex-direction: column-reverse;
    }
    .left {
      &__name,
      &__btns {
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
