<template>
  <a class="work-item" :href="props.link" target="_blank">
    <div class="left">
      <div>
        <div class="left__name">{{ props.name }}</div>
        <div class="left__skills">
          <div v-for="(item, index) in props.skills" :key="index">{{ item }}</div>
        </div>
      </div>
      <div>
        <div class="left__tags">
          <TagItem v-for="(item, index) in props.tags" :key="index" :text="item" />
        </div>
      </div>
    </div>
    <div class="right">
      <img class="right__image" :src="props.img" />
    </div>
  </a>
</template>
<script setup lang="ts">
import type { WorksItemType } from '@/types';
import TagItem from '@/components/TagItem.vue';

const props = defineProps<WorksItemType>();
</script>
<style lang="scss" scoped>
.work-item {
  padding: 28px 0;
  border-top: solid 0.5px $gray;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &:last-child {
    border-bottom: solid 0.5px $gray;
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
  }
  .right {
    width: 330px;
    height: 247px;
    overflow: hidden;

    &__image {
      width: 330px;
      height: 247px;
    }
  }

  @include mobile {
    flex-direction: column-reverse;

    .left {
      &__name {
        margin-top: 20px;
      }
      &__tags {
        margin-top: 20px;
      }
    }
    .right {
      width: 100%;
      height: unset;

      &__image {
        width: calc(100vw - 20px * 2);
        height: calc(247 * 100vw / 330);
      }
    }
  }
}
</style>
