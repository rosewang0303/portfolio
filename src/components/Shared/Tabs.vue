<template>
  <div class="tabs">
    <button
      :class="['tabs__item', { 'tabs__item--active': currentKey === item.key }]"
      v-for="(item, index) in props.items"
      :key="index"
      @click="clickHandler(item.key)"
    >
      {{ $t(item.text) }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  items: Array<{
    key: string;
    text: string;
  }>;
  defaultKey?: string;
}>();

const emit = defineEmits<{
  (e: 'onClick', key: string): void;
}>();

const currentKey = ref('');

watch(
  () => props.defaultKey,
  () => {
    if (props.defaultKey) currentKey.value = props.defaultKey;
    else currentKey.value = props.items[0].key;
  },
  { immediate: true },
);

const clickHandler = (key: string) => {
  currentKey.value = key;
  emit('onClick', key);
};
</script>
<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: center;

  &__item {
    font-size: 14px;
    min-height: 30px;
    padding: 4px 12px;
    border: solid $white 0.5px;
    background-color: $black;
    color: $white;
    margin-top: 8px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover:not(.tabs__item--active) {
      border: solid $highlight 0.5px;
      color: $highlight;
    }
    &--active {
      background-color: $white;
      color: $black;
    }
  }
}
</style>
