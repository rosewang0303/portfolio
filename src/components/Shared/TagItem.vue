<template>
  <div class="tag-item">
    {{ $t(props.text) }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ text: string }>();
</script>
<style lang="scss" scoped>
.tag-item {
  display: inline-block;
  font-size: 14px;
  padding: 4px 12px;
  border: solid $white 0.5px;
  margin-top: 8px;
  margin-right: 12px;
  user-select: none;
}
</style>
