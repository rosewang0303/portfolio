<template>
  <div class="top-bar">
    <div class="top-bar__icon top-bar__icon--empty"></div>
    <div class="top-bar__name">ROSE</div>
    <div
      class="top-bar__icon"
      @click="emit('onClick')"
      :style="{ backgroundImage: `url(${props.isOpen ? iconsImg.close : iconsImg.bars})` }"
    ></div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['onClick']);
const props = defineProps<{
  isOpen: boolean;
}>();

const iconsImg = {
  bars: '/assets/icon/bars.svg',
  close: '/assets/icon/window-close.svg',
};
</script>
<style lang="scss" scoped>
.top-bar {
  width: 100vw;
  height: $mobile-nav-bar-height;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: none;
  padding: $mobile-container-padding;
  background-color: $black;
  border-bottom: 0.5px solid $white;

  &__name {
    font-size: 20px;
  }
  &__icon {
    width: 24px;
    height: 24px;
    cursor: pointer;

    &--empty {
      pointer-events: none;
    }
  }

  @include mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
