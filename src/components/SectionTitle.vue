<template>
  <div class="section-title">
    <h1>
      <span class="section-title__deco">//</span>
      <span class="section-title__title">{{ props.title }}</span>
      <span v-if="props.subTitle" class="section-title__sub-title">{{ props.subTitle }}</span>
    </h1>
    <p class="section-title__description">{{ props.description }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  subTitle?: string;
}>();
</script>
<style lang="scss" scoped>
.section-title {
  &__deco {
    margin-right: 60px;
    font-size: 40px;
  }
  &__title {
    font-size: 40px;
  }
  &__sub-title {
    font-size: 24px;
    margin-left: 36px;
  }
  &__description {
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: lighter;
    max-width: 940px;
    margin-top: 28px;
  }
}
</style>
