<template>
  <a :class="['btn-item', { 'cursor-target': props.link }]" :href="props.link" target="_blank">
    <slot></slot>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  link?: string;
}>();
</script>
<style lang="scss" scoped>
.btn-item {
  font-size: 14px;
  min-height: 30px;
  padding: 4px 12px;
  border: solid $white 0.5px;
  background-color: $white;
  color: $black;
  margin-top: 8px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: $highlight;
    transition: 0.3s all ease;
  }
}
</style>
