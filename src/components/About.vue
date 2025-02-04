<template>
  <div class="about">
    <div class="text">
      <div class="text__name">ROSE WANG</div>
      <div class="text__title">Front-End Engineer / Software Engineer</div>
      <div class="text__introduce">
        前端開發前端開發前端開發前端開發前端開發前端開發前端開發前端開發
      </div>
    </div>
    <div class="links">
      <div class="links__item">SKILL</div>
      <div class="links__item">SKILL</div>
      <div class="links__item">SKILL</div>
      <div class="links__item">SKILL</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.about {
  height: 100vh;
  font-size: 14px;

  @include flexCenter;
  animation: 0.8s fade-in;

  .text {
    margin-right: 160px;

    &__name {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      font-family: 'Montserrat';
    }
    &__title {
      margin-bottom: 20px;
      font-family: 'Montserrat';
    }
    &__introduce {
      max-width: 282px;
      font-family: 'Montserrat';
    }
  }
  .links {
    &__item {
      font-size: 100px;
      margin-bottom: 8px;
      color: $gray;

      &:hover {
        cursor: pointer;
        color: $white;
        animation: 0.8s link-hover;
      }
    }
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
}
</style>
