<template>
  <Section class="skills" :title="{ title: skills.title, description: skills.description }">
    <div class="skills__items">
      <div class="item item-wrap">
        <div class="item__title">{{ skills.items[0].name }}</div>
        <div v-for="(item, index) in skills.items[0].skill" :key="index">
          <div class="item__text" v-html="item"></div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="item">
          <div class="item__title">{{ skills.items[1].name }}</div>
          <div v-for="(item, index) in skills.items[1].skill" :key="index">
            <div class="item__text" v-html="item"></div>
          </div>
        </div>
        <div class="item">
          <div class="item__title">{{ skills.items[2].name }}</div>
          <div v-for="(item, index) in skills.items[2].skill" :key="index">
            <div class="item__text" v-html="item"></div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item__title">{{ skills.items[3].name }}</div>
        <div v-for="(item, index) in skills.items[3].skill" :key="index">
          <div class="item__text" v-html="item"></div>
        </div>
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
import Section from '@/components/Shared/Section.vue';
import { skills } from '@/data';
</script>
<style lang="scss" scoped>
.skills {
  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }

  .item-wrap {
    .item {
      &:nth-child(2) {
        margin-top: 40px;
      }
    }
  }
  .item {
    &__title {
      font-family: 'Montserrat';
      text-decoration: underline;
      font-weight: bolder;
      margin-bottom: 20px;
    }
    &__text {
      font-family: 'Montserrat';
      min-height: 22px;

      :deep(span) {
        color: $highlight;
        font-family: 'Montserrat';
        min-height: 22px;
      }
    }
  }

  @include mobile {
    &__items {
      flex-direction: column;
    }
  }
}
</style>
