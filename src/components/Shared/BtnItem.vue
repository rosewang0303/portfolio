<template>
  <a
    :class="['btn-item', { 'btn-item--effect': props.link, 'cursor-target': props.link }]"
    :href="props.link"
    target="_blank"
  >
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
  background-color: $white;
  color: $black;
  margin-top: 8px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &--effect {
    cursor: pointer;
  }
  &--effect:hover {
    transition: 0.3s all ease;
    filter: brightness(0.5);
  }
}
</style>
