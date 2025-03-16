<template>
  <div class="top-bar">
    <div class="top-bar__icon"></div>
    <div class="top-bar__name">ROSE</div>
    <div class="top-bar__icon" @click="emit('onClick')"></div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['onClick']);
</script>
<style lang="scss" scoped>
.top-bar {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  padding: 20px;

  &__name {
    font-size: 20px;
  }
  &__icon {
    background-color: red; // TODO
    width: 24px;
    height: 24px;
  }

  @include mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
