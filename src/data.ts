import type { LoadingType, AboutType, SkillsType } from '@/types';

export const loading: LoadingType = {
  name: 'ROSE WANG',
  title: 'Front-End Engineer / Software Engineer',
};

export const about: AboutType = {
  name: 'ROSE WANG',
  title: 'Front-End Engineer / Software Engineer',
  introduce:
    '超過6年的程式開發經驗，擅長前後端網頁開發，目前專注於前端領域，喜歡學習新事物，勇於嘗試挑戰，利用程式解決生活中的痛點。',
  links: [
    { text: 'SKILLS', link: '#skills' },
    { text: 'EXPERIENCE', link: '#experience' },
    { text: 'WORKS', link: '#works' },
    { text: 'CONTACT', link: '#contact' },
  ],
};

export const skills: SkillsType = {
  title: 'SKILLS',
  description:
    '從全端網頁開發到專注前端領域上，不斷學習新技術，從最初踏入前端世界的 jQuery、Bootstrap，到使用前端框架 Vue.js。因為對設計和美術的興趣累積了不少設計美感，也會 Figma 和 PS、AI 的基本操作。除了前端領域，也開發過後端 PHP、Java、C# 專案，在軟體開發路上也勇於嘗試其他領域，像是區塊鏈撰寫智能合約 Solidity 和 Web3.js 串接，iOS APP 從設計、開發到上架，用 Google Chrome Extension 開發小工具等等。',
  items: [
    {
      name: 'FRONT-END',
      skill: [
        'Vue.js / Nuxt.js (SSR)',
        '',
        'RWD / In-APP-Webview',
        'SASS (SCSS) / Tailwind',
        'Javascript (ES6+) / TypeScript',
        '',
        'LINE Front-end Framework (LIFF)',
        'Google Chrome Extension',
        '',
        'Vite',
        'Webpack',
        'Yarn、bun、npm',
        '',
        'jQuery',
        'Bootstrap',
      ],
    },
    { name: 'BACK-END', skill: ['Node.js (Express)', 'PHP (Laravel)', '', 'mySQL'] },
    { name: '協作開發', skill: ['Git', '', 'Figma、Zeplin', '', 'Jira'] },
    {
      name: 'OTHERS',
      skill: ['Figma', 'PS、AI', '', 'Web3.js、Solidity', 'Phaser.js', '', 'iOS APP (Swift)'],
    },
  ],
};
