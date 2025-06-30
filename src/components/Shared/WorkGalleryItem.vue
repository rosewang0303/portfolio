<template>
  <div class="work-gallery-item">
    <div v-if="showFirstTag" class="work-gallery-item__tag">
      {{ $t(works.lang.tagsPrefix + props.id + '_1') }}
    </div>
    <router-link
      v-if="props.showLink"
      :to="`/works/${props.id}`"
      :class="['work-gallery-item__wrap', { 'cursor-target': props.showLink }]"
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
        {{ $t(works.lang.name + props.id) }}
      </div>
    </router-link>
    <div v-else class="work-gallery-item__wrap">
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
      <div v-if="showName" class="work-gallery-item__name">
        {{ $t(works.lang.name + props.id) }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { WorksItemType } from '@/types';
import { works } from '@/data';

const props =
  defineProps<
    Partial<WorksItemType & { showLink: boolean; showName: boolean; showFirstTag: boolean }>
  >();

const currentIndex = ref(0);
const timer = ref<number | undefined>(undefined);

onMounted(() => {
  if (props.demoImgs && props.demoImgs.length > 1) {
    timer.value = setInterval(() => {
      if (props.demoImgs) currentIndex.value = (currentIndex.value + 1) % props.demoImgs.length;
      else timer.value = undefined;
    }, 3000);
  }
});
</script>
<style lang="scss" scoped>
.work-gallery-item {
  flex: 1 1 calc((100% - 30px * 2) / 3);
  max-width: calc((100% - 30px * 2) / 3);

  &__wrap.cursor-target {
    &:hover {
      .work-gallery-item__image {
        filter: brightness(0.8);
        transition: 0.3s all ease;
      }
      .work-gallery-item__img-wrap {
        transition: 0.3s all ease;
        border: 0.2px solid $highlight;
      }
      .work-gallery-item__name {
        color: $highlight;
        transition: 0.3s all ease;
      }
    }
  }
  &__tag {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 8px;
    font-size: 14px;
    padding: 4px 12px;
    background-color: $white;
    color: $black;
    box-shadow: 2px 2px 10px rgb(91 91 91);
  }
  &__img-wrap {
    border: 0.2px solid $gray;
    background-color: $black;
    overflow: hidden;
    position: relative;
    display: block;
    position: relative;

    width: 100%;
    padding-top: 74.85%;
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
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
    flex: 1 1 calc((100% - 30px) / 2);
    max-width: calc((100% - 30px) / 2);
  }
  @include pad {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
