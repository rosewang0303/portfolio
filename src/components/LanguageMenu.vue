<template>
  <div class="lang-menu" @click="setLocale()">{{ currentLocale.toUpperCase() }}</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = ref(locale.value);

const setLocale = () => {
  let lang = '';
  if (currentLocale.value === 'en') lang = 'zh';
  else lang = 'en';

  locale.value = lang;
  currentLocale.value = lang;
  localStorage.setItem('locale', lang);
};
</script>
<style lang="scss" scoped>
.lang-menu {
  cursor: pointer;
}
</style>
