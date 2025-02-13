<template>
  <div class="work-item">
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
      <img class="right__image" :src="''" />
    </div>
  </div>
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
    }
    &__skills {
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
    }
  }
  .right {
    &__image {
      width: 330px;
      height: 247px;
      border: 0.5px solid $gray;
      background-color: $dark-gray;
    }
  }
}
</style>
