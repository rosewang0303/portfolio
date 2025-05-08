<template>
  <footer>
    <div class="wrap">
      <div>
        <RouterLink
          :to="{ hash: link.link }"
          class="link cursor-target"
          v-for="(link, index) in about.links"
          :key="index"
        >
          {{ link.text }}
        </RouterLink>
      </div>
      <div class="contact-links">
        <a
          :class="['cursor-target', 'contact-links__item']"
          v-for="(item, index) in navLeft.links"
          :key="index"
          :href="item.url"
          target="_blank"
          ><span class="contact-links__icon" :style="{ backgroundImage: `url(${item.img})` }"></span
          ><span>{{ item.text }}</span></a
        >
      </div>
    </div>
    <div class="copyright">Copyright © 2025 Rose Wang</div>
  </footer>
</template>
<script setup lang="ts">
import { navLeft, about } from '@/data';
</script>
<style lang="scss" scoped>
footer {
  padding: 60px 0 80px;
  margin: 0 auto;
  width: 80%;

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .link {
    display: block;
    font-size: 16px;
    font-family: 'Gideon Roman';
    padding: 6px 0;
  }
  .contact-links {
    margin-left: 20px;

    &__item {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    &__icon {
      display: block;
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
  }
  .copyright {
    margin-top: 50px;
    text-align: center;
  }

  @include pad {
    width: 100%;
  }
  @include mobile {
    .wrap {
      flex-direction: column;
    }
    .link {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .contact-links {
      margin-top: 32px;
      margin-left: unset;

      &__item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
