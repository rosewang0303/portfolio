<template>
  <div class="nav-left">
    <div class="top">
      <div class="top__logo">ROSE</div>
      <div class="top__line"></div>
    </div>
    <div class="links">
      <div class="links__item"></div>
      <div class="links__item"></div>
      <div class="links__item"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.nav-left {
  height: 100vh;
  border-right: 0.5px solid $white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 60px 0;

  .top {
    @include flexCenter;
    flex-direction: column;

    &__logo {
      font-size: 20px;
      margin-bottom: 40px;
      writing-mode: vertical-lr;
      cursor: pointer;
    }
    &__line {
      width: 0.5px;
      height: 200px;
      background-color: $white;
    }
  }

  .links {
    @include flexCenter;
    flex-direction: column;

    &__item {
      width: 24px;
      height: 24px;
      margin-top: 16px;
      cursor: pointer;

      &:nth-child(1) {
        background-image: url('/assets/icon/github.svg');
      }
      &:nth-child(2) {
        background-image: url('/assets/icon/codepen.svg');
      }
      &:nth-child(3) {
        background-image: url('/assets/icon/linkin.svg');
      }
    }
  }
}
</style>
