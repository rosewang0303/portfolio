import type {
  LoadingType,
  NavLeftType,
  AboutType,
  SkillsType,
  ExperienceType,
  WorksType,
} from '@/types';

export const loading: LoadingType = {
  name: 'ROSE WANG',
  position: 'Front-End Engineer / Software Engineer',
};

export const navLeft: NavLeftType = {
  links: [
    {
      url: 'https://github.com/rosewang0303',
      img: '/assets/icon/github.svg',
    },
    {
      url: 'https://codepen.io/rosewang0303',
      img: '/assets/icon/codepen.svg',
    },
    {
      url: 'https://www.linkedin.com/in/rose-wang-9577631b8/',
      img: '/assets/icon/linkin.svg',
    },
    {
      url: 'mailto:rosewang0303@gmail.com?subject=[Rose作品集] 回覆聯絡',
      img: 'assets/icon/envelope.svg',
    },
  ],
};

export const about: AboutType = {
  name: 'ROSE WANG',
  position: 'Front-End Engineer / Software Engineer',
  introduce:
    '熱愛細節的前端工程師。最初涉略全端開發，在探索的過程中，發現前端世界的無限可能與樂趣，因此專注於前端技術的精進與創新。特別講究 Pixel Perfect，力求每個畫面都能完美呈現設計的細節，帶給使用者最佳體驗。',
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
    '從全端網頁開發到專注前端領域上，不斷學習新技術，從最初踏入前端世界的 jQuery、Bootstrap，到使用前端框架 Vue.js、React.js 到 SSR。因為對設計和美術的興趣累積了不少設計美感，也會 Figma 和 PS、AI 的基本操作。除了前端領域，也開發過後端 PHP、Java、C# 專案，在軟體開發路上也勇於嘗試其他領域，像是區塊鏈撰寫智能合約 Solidity 和 Web3.js 串接，iOS APP 從設計、開發到上架，用 Google Chrome Extension 開發小工具等等。',
  items: [
    {
      name: 'FRONT-END',
      skill: [
        '<span>Vue.js / Nuxt.js (SSR)</span>',
        '<span>Pinia / Vuex / VueUse</span>',
        '',
        '<span>RWD / In-APP-Webview</span>',
        '<span>SASS (SCSS) / Tailwind / BEM</span>',
        '<span>Javascript / TypeScript</span>',
        '',
        'Cypress',
        'Vite',
        'Webpack',
        'Yarn / bun / npm',
        '',
        'Electron',
        'LINE Front-end Framework (LIFF)',
        'Google Chrome Extension',
        '',
        'jQuery / Bootstrap',
      ],
    },
    { name: 'BACK-END', skill: ['Node.js (Express)', 'PHP (Laravel)', '', 'mySQL'] },
    {
      name: '協作開發',
      skill: ['Git (Github / Gitlab)', '', 'Figma / Zeplin / Sketch', '', 'Jira'],
    },
    {
      name: 'OTHERS',
      skill: [
        'Figma',
        'PS / AI',
        '',
        'Web3.js / Solidity (Block chain)',
        '',
        'Phaser.js / Chart.js',
        '',
        'iOS APP (Swift)',
      ],
    },
  ],
};

export const experience: ExperienceType = {
  title: 'EXPERIENCE',
  subTitle: '(6+y)',
  description:
    '擁有超過 6 年的軟體開發經驗，大學期間爭取到系上唯一的實習機會，正式踏入職場。自資訊管理系畢業後，持續深耕軟體產業，最初從事全端開發，累積前後端協作與系統設計經驗，後來專注於前端領域，精進技術與使用者體驗的最佳實踐。曾參與大型企業的多人協作開發與系統維護，也在新創公司從 0 到 1 開發並成功推動多項產品上線。',
  list: [
    {
      position: '前端工程師',
      company: '@新加坡商競舞電競有限公司 (Garena)',
      time: '2022/04 ~ Present (2y10m)',
      project: [
        '開發遊戲行銷官網 / 遊戲內營收網頁 / 後台管理系統',
        'RWD前端網頁 / In APP webview 前端開發',
        '大量資料渲染優化',
        'API 對接',
        '高互動網頁遊戲',
        '動畫 / 音效處理',
      ],
      tags: ['Vue.js', 'Nuxt.js', 'TypeScript'],
    },
    {
      position: '全端工程師',
      company: '@紫洣科技股份有限公司',
      time: '2019/12 ~ 2022/04 (2y5m)',
      project: [
        '開發電商官網 / 區塊鏈產品官網 / 後台系統',
        'RWD前端網頁',
        '資料庫建置，後端 API 開發',
        '撰寫區塊鏈智能合約上鏈',
        '串接區塊鏈錢包交易',
      ],
      tags: ['Vue.js', 'Nuxt.js', 'PHP (Laravel)', 'Web3.js', 'Solidity'],
    },
    {
      position: '全端工程師',
      company: '@諾亞克科技股份有限公司',
      time: '2019/07 ~ 2018/08 (1y)',
      project: ['開發長照系統 / 公托系統 / 醫療設備 APP', '資料庫建置，後端 API 開發'],
      tags: ['PHP (Laravel)', 'C# (.Net Framework)'],
    },
    {
      position: '程式設計實習生',
      company: '@國泰人壽保險股份有限公司',
      time: '2018/06 ~ 2018/02 (5m)',
      project: ['開發金融後台系統 / 部門內部工具', '後端 API、模組開發', '前端開發'],
      tags: ['Java', 'JSP', 'Jquery'],
    },
  ],
};

export const works: WorksType = {
  title: 'WORKS',
  description:
    '除了工作上累積的開發經驗，也熱衷於研究新技術，並喜歡把自己遇到的痛點轉化成 Side Project。憑藉過去的後端經驗，我能夠獨立完成全端開發，讓專案從 UI/UX 設計到功能實現都能完整落地，打造出兼具技術深度與良好體驗的作品。此外，我對設計有濃厚的興趣，雖然不是專業設計師，但我注重細節與美感，希望讓畫面既符合使用者體驗，也能呈現更好的視覺效果。',
  projects: [
    {
      name: 'Project Name',
      skills: [
        '開發遊戲行銷官網 / 遊戲內營收網頁 / 後台管理系統',
        'RWD前端網頁 / In APP webview 前端開發',
        '大量資料渲染優化',
        'API 對接',
        '高互動網頁遊戲',
        '動畫 / 音效處理',
      ],
      tags: ['Vue.js', 'Nuxt.js', 'TypeScript'],
      img: '/assets/works/shop.png',
      link: 'https://www.shop168.fun/',
    },
    {
      name: 'Project Name',
      skills: [
        '開發遊戲行銷官網 / 遊戲內營收網頁 / 後台管理系統',
        'RWD前端網頁 / In APP webview 前端開發',
        '大量資料渲染優化',
        'API 對接',
        '高互動網頁遊戲',
        '動畫 / 音效處理',
      ],
      tags: ['Vue.js', 'Nuxt.js', 'TypeScript'],
      img: '/assets/works/tracke.png',
    },
    {
      name: 'Project Name',
      skills: [
        '開發遊戲行銷官網 / 遊戲內營收網頁 / 後台管理系統',
        'RWD前端網頁 / In APP webview 前端開發',
        '大量資料渲染優化',
        'API 對接',
        '高互動網頁遊戲',
        '動畫 / 音效處理',
      ],
      tags: ['Vue.js', 'Nuxt.js', 'TypeScript'],
      img: '',
    },
  ],
};
