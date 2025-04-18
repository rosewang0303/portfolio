<template>
  <div class="work-gallery-item" :href="props.link" target="_blank">
    <a
      v-if="props.imgs.length > 0"
      :href="props.link"
      target="_blank"
      class="work-gallery-item__wrap cursor-target"
    >
      <div class="work-gallery-item__img-wrap">
        <img
          :class="[
            'work-gallery-item__image',
            {
              'work-gallery-item__image--active': index === currentIndex,
            },
          ]"
          v-for="(img, index) in props.demoImgs"
          :key="index"
          :src="img"
        />
      </div>
      <div class="work-gallery-item__name">
        {{ props.name }}
      </div>
    </a>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { WorksItemType } from '@/types';

const props = defineProps<WorksItemType>();

const currentIndex = ref(0);
const timer = ref<number | undefined>(undefined);

onMounted(() => {
  if (props.demoImgs.length > 1) {
    timer.value = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % props.demoImgs.length;
    }, 3000);
  }
});
</script>
<style lang="scss" scoped>
.work-gallery-item {
  $pc-width: 20vw;
  $pc-height: calc(247 * 20vw / 330);
  $lg-pc-width: 31vw;
  $lg-pc-height: calc(247 * 31vw / 330);
  $mb-width: 100vw;
  $mb-height: calc(247 * 100vw / 330);

  width: $pc-width;

  &__wrap {
    width: 100%;

    &:hover {
      .work-gallery-item__image {
        filter: brightness(0.6);
        transition: 0.3s all ease;
      }
      .work-gallery-item__name {
        color: $highlight;
        transition: 0.3s all ease;
      }
    }
  }
  &__img-wrap {
    width: 100%;
    height: $pc-height;
    border: 0.2px solid $gray;
    background-color: $black;
    overflow: hidden;
    position: relative;
    display: block;
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
  &__name {
    font-size: 16px;
    color: $white;
    margin-top: 12px;
    white-space: nowrap;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @include lg-pc {
    width: $lg-pc-width;

    &__img-wrap {
      height: $lg-pc-height;
    }
  }
  @include pad {
    width: $mb-width;

    &__img-wrap {
      height: $mb-height;
    }
  }
}
</style>
