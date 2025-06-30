// src/i18n.ts
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import zh from './locales/zh.json';

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'zh', // 預設語言
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
  },
});

export default i18n;
