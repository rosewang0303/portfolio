<template>
  <div
    class="physics-item"
    :style="`transform: translate(${position.x}px, ${position.y}px)`"
    ref="elRef"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, inject } from 'vue';
import Matter from 'matter-js';
import type { World } from 'matter-js';

const props = defineProps<{
  maxWidth: number;
}>();

const world = inject<World>('matterWorld');

const elRef = ref<HTMLElement | null>(null);
const position = ref({ x: 0, y: 0 });
const body = ref<Matter.Body | null>(null);
const min = 100;

const numberPool = ref<number[]>([]);

const initNumberPool = () => {
  numberPool.value = [];
  console.error(props.maxWidth); // TODO
  for (let i = min; i <= props.maxWidth; i++) {
    numberPool.value.push(i);
  }

  for (let i = numberPool.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numberPool.value[i], numberPool.value[j]] = [numberPool.value[j], numberPool.value[i]];
  }
};

const getRandomUniqueNumber = (): number => {
  if (numberPool.value.length === 0) return 0;
  return numberPool.value.pop() || 0;
};

initNumberPool();

onMounted(() => {
  if (!elRef.value) return;

  const width = elRef.value.offsetWidth;
  const height = elRef.value.offsetHeight;

  body.value = Matter.Bodies.rectangle(getRandomUniqueNumber(), -10, width, height, {
    restitution: 0.9,
    friction: 0.1,
  });

  if (world) {
    Matter.World.add(world, body.value);
  }

  const update = () => {
    if (body.value) {
      position.value = {
        x: body.value.position.x - width / 2,
        y: body.value.position.y - height / 2,
      };
    }
    requestAnimationFrame(update);
  };
  update();
});

onBeforeUnmount(() => {
  if (world && body.value) {
    Matter.World.remove(world, body.value);
  }
});
</script>

<style lang="scss">
.physics-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 8px;
  user-select: none;
  z-index: 1;
  min-width: 50px;
  min-height: 50px;
  height: auto;
  position: absolute;

  img {
    pointer-events: none;
  }

  @include mobile {
    img {
      width: 40px;
    }
  }
}
</style>
