<template>
  <a :class="['btn-item', { 'btn-item--effect': props.link }]" :href="props.link" target="_blank">
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
  padding: 4px 12px;
  border: solid $white 0.5px;
  margin-top: 8px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &--effect {
    cursor: pointer;
  }
  &--effect:hover {
    background-color: $white;
    color: $black;
    transition: 0.3s all ease;
  }
}
</style>
