<template>
  <Section id="about" class="about" :title="null">
    <div class="text">
      <div class="text__name">{{ $t(about.name) }}</div>
      <div class="text__title">{{ $t(about.position) }}</div>
      <div class="text__introduce" v-html="$t(about.introduce)"></div>
    </div>
    <div class="links">
      <RouterLink
        :to="link.link"
        class="links__item cursor-target"
        v-for="(link, index) in about.links"
        :key="index"
      >
        {{ $t(link.text) }}
      </RouterLink>
    </div>
    <div class="physics-interaction">
      <PhysicsWorld></PhysicsWorld>
    </div>
  </Section>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { about } from '@/data';
import Section from '@/components/Shared/Section.vue';
import PhysicsWorld from '@/components/Shared/PhysicsWorld.vue';
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const tl = gsap.timeline();

  tl.from('.text__name', { duration: 0.3, opacity: 0, y: 20 })
    .from('.text__title', { duration: 0.2, opacity: 0, y: 18 })
    .from('.text__introduce', { duration: 0.3, opacity: 0, y: 20 });
});
</script>
<style lang="scss" scoped>
.about {
  height: 100vh;
  padding-bottom: unset;
  position: relative;

  :deep(.section-content__wrap) {
    justify-content: space-between;
  }
  .text {
    &__name {
      color: $highlight;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      font-family: 'Montserrat';
    }
    &__title {
      margin-bottom: 20px;
      font-family: 'Montserrat';
      font-weight: 300;
    }
    &__introduce {
      max-width: 282px;
      font-family: 'Montserrat';
      text-align: justify;

      :deep(span) {
        color: $highlight;
        min-height: 22px;
      }
    }
  }
  .links {
    color: $white;

    &:hover {
      color: $gray;
    }

    &__item {
      font-size: 60px;
      margin-bottom: 8px;
      position: relative;
      display: block;

      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: linear-gradient(45deg, $liner-yellow);
        filter: blur(60px);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        opacity: 0;
        transition: 0.3s all ease;
      }

      &:hover {
        cursor: pointer;
        color: $white;
        animation: 0.8s link-hover both;

        &::after {
          transition: 0.3s all ease;
          opacity: 1;
        }
      }
    }
  }
  .physics-interaction {
    width: 100%;
    height: 30vh;
    position: relative;
  }
  @keyframes link-hover {
    10% {
      font-style: italic;
    }
    100% {
      font-style: italic;
      transform: translateX(10px);
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @include pad {
    .text {
      margin-bottom: 32px;
      text-align: center;

      &__introduce {
        max-width: unset;
        text-align: justify;
      }
    }
    .links {
      margin-top: 60px;
    }
  }

  @include mobile {
    .links {
      display: none;
    }
  }
}
</style>
