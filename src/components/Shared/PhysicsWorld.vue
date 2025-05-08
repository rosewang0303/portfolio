<template>
  <section class="physics-world">
    <div ref="containerRef" class="physics-area">
      <PhysicsItem v-for="(img, index) in brandLogoList" :key="index">
        <img :src="img" />
      </PhysicsItem>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, provide, ref } from 'vue';
import PhysicsItem from '@/components/Shared/PhysicsItem.vue';
import Matter from 'matter-js';
import { brandLogoList } from '@/data';

const containerRef = ref<HTMLElement | null>(null);
const engine = Matter.Engine.create();
const runner = Matter.Runner.create();

// 提供 World 給子元件
provide('matterWorld', engine.world);

onMounted(() => {
  Matter.Runner.run(runner, engine);

  // 加上地板 + 邊界
  if (!containerRef.value) return;

  const bounds = containerRef.value.getBoundingClientRect();
  const thickness = 100;

  const walls = [
    Matter.Bodies.rectangle(
      bounds.width / 2,
      bounds.height + thickness / 2,
      bounds.width,
      thickness,
      { isStatic: true },
    ),
    Matter.Bodies.rectangle(bounds.width / 2, -thickness / 2, bounds.width, thickness, {
      isStatic: true,
    }),
    Matter.Bodies.rectangle(-thickness / 2, bounds.height / 2, thickness, bounds.height, {
      isStatic: true,
    }),
    Matter.Bodies.rectangle(
      bounds.width + thickness / 2,
      bounds.height / 2,
      thickness,
      bounds.height,
      { isStatic: true },
    ),
  ];
  Matter.World.add(engine.world, walls);

  // 滑鼠拖曳控制
  const mouse = Matter.Mouse.create(containerRef.value);
  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false },
    },
  });

  Matter.World.add(engine.world, mouseConstraint);

  const mousewheelHandler = (mouse as unknown as { mousewheel: EventListener }).mousewheel;
  containerRef.value.removeEventListener('DOMMouseScroll', mousewheelHandler);
  containerRef.value.removeEventListener('wheel', mousewheelHandler);
});

onBeforeUnmount(() => {
  Matter.Runner.stop(runner);
});
</script>

<style scoped lang="scss">
.physics-world {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: transparent;

  .physics-area {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
}
</style>
