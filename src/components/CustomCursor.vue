<template>
  <div
    :class="['custom-cursor', { 'custom-cursor--effect': hover }]"
    :style="{ left: `${x}px`, top: `${y}px` }"
  >
    <div class="custom-cursor__mouse"></div>
    <div class="custom-cursor__text">前往 ↗</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const x = ref(0);
const y = ref(0);
const hover = ref(false);

const handleMouseMove = (e: MouseEvent) => {
  x.value = e.clientX - 12;
  y.value = e.clientY - 12;
};

const handleMouseOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.closest('.cursor-target')) {
    hover.value = true;
  }
};

const handleMouseOut = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.closest('.cursor-target')) {
    hover.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseover', handleMouseOver);
  document.addEventListener('mouseout', handleMouseOut);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseover', handleMouseOver);
  document.removeEventListener('mouseout', handleMouseOut);
});
</script>

<style lang="scss">
.custom-cursor {
  position: fixed;
  z-index: 10000;
  pointer-events: none;
  mix-blend-mode: difference;

  &__mouse {
    width: 24px;
    height: 24px;
    background-color: $highlight;
    border: 1px solid $highlight;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
  &__text {
    color: $black;
    background-color: $white;
    white-space: nowrap;
    position: absolute;
    left: 32px;
    top: 24px;
    padding: 2px 8px;
    transition: 0.3s all ease;
    opacity: 0;
  }

  &--effect {
    .custom-cursor__mouse {
      transform: scale(2);
      transition: transform 0.2s ease;
    }
    .custom-cursor__text {
      opacity: 1;
      transform: scale(1.4);
      transition: transform 0.2s ease;
    }
  }
}
</style>
