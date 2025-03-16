<template>
  <div class="section-title">
    <h1>
      <span class="section-title__deco">//</span>
      <span v-if="props.title" class="section-title__title">{{ props.title }}</span>
      <span v-if="props.subTitle" class="section-title__sub-title">{{ props.subTitle }}</span>
    </h1>
    <p props.description class="section-title__description">{{ props.description }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
  subTitle?: string;
}>();
</script>
<style lang="scss" scoped>
.section-title {
  width: 100%;

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
    text-align: justify;
  }

  @include mobile {
    &__deco {
      margin-right: 10px;
    }
    &__sub-title {
      margin-left: 10px;
    }
  }
}
</style>
