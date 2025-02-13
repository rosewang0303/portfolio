<template>
  <div class="tag-item">
    {{ props.text }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ text: string }>();
</script>
<style lang="scss" scoped>
.tag-item {
  font-size: 14px;
  padding: 4px 12px;
  border: solid $white 0.5px;
  border-radius: 30px;
  margin-right: 12px;
}
</style>
