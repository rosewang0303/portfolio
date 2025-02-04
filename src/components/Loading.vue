<template>
  <div class="loading">
    <div class="loading__name">ROSE WANG</div>
    <div class="loading__title">Front-End Engineer / Software Engineer</div>
    <div class="loading__transition-bg"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  @include flexCenter;
  flex-direction: column;
  background-color: $white;
  color: $black;
  animation: 0.5s fade-out 2s both ease-in-out;

  &__name {
    font-size: 60px;
    animation: 1s fade-in 0.2s both;
  }
  &__title {
    font-family: 'Montserrat';
    font-size: 20px;
    margin-top: 8px;
    animation: 1s fade-in 0.5s both;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fade-out {
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
      transform: translateY(-100vh);
      display: none;
    }
  }
}
</style>
