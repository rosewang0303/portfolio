import type {
  LoadingType,
  NavLeftType,
  AboutType,
  SkillsType,
  ExperienceType,
  WorksType,
} from '@/types';
import { WorksCategoryEnum } from '@/types';

export const loading: LoadingType = {
  name: 'ROSE WANG',
  position: 'Front-End Engineer / Software Engineer',
};

export const navLeft: NavLeftType = {
  links: [
    {
      url: 'mailto:rosewang0303@gmail.com?subject=[Rose作品集] 回覆聯絡',
      img: '/assets/icon/envelope.svg',
      text: 'rosewang0303@gmail.com',
    },
    {
      url: 'https://github.com/rosewang0303',
      img: '/assets/icon/github.svg',
      text: 'GitHub',
    },
    {
      url: 'https://www.linkedin.com/in/rose-wang-9577631b8/',
      img: '/assets/icon/linkin.svg',
      text: 'LinkIn',
    },
    {
      url: 'https://codepen.io/rosewang0303',
      img: '/assets/icon/codepen.svg',
      text: 'Codepen',
    },
  ],
};

export const about: AboutType = {
  name: 'ROSE WANG',
  position: 'Front-End Engineer / Software Engineer',
  introduce:
    '專注於打造 視覺吸引力強、細節到位的網頁互動體驗，我是一位從全端轉向前端的開發者，擁有 6 年以上實戰經驗，熱愛特效動畫與使用者體驗的極致追求。',
  links: [
    { text: 'SKILLS', link: '#skills' },
    { text: 'EXPERIENCE', link: '#experience' },
    { text: 'WORKS', link: '#works' },
    // { text: 'CONTACT', link: '#contact' },
  ],
};

export const skills: SkillsType = {
  title: 'SKILLS',
  description:
    '專注於 Vue.js 開發，熟悉使用 Nuxt.js 進行 SSR，並有初步接觸過 React.js，逐步精進前端技術，也使用 GSAP 等動畫套件。對設計與美術有興趣，了解 Figma、PS、AI 等工具的基本操作。擁有後端開發經驗，曾開發 PHP、Java、C# 等專案，並探索區塊鏈技術，撰寫 Solidity 智能合約。曾獨立完成 iOS App 開發及上架，也開發過 Google Chrome Extension，並有 LIFF 和 Electron.js ...等技術的 Side Project 經驗。',
  items: [
    {
      name: '前端技術 & 框架',
      skill: [
        '<span>Vue.js / Nuxt.js (SSR)</span>',
        '<span>Pinia / Vuex / VueUse</span>',
        null,
        '<span>RWD / In-APP-Webview</span>',
        '<span>SASS (SCSS) / Tailwind / BEM</span>',
        '<span>Javascript / TypeScript</span>',
        null,
        'Cypress',
        'Vite',
        'Webpack',
        'Yarn / bun / npm',
        null,
        'Electron.js',
        'LINE Front-end Framework (LIFF)',
        'Google Chrome Extension',
        'Element UI',
        null,
        'jQuery / Bootstrap',
      ],
    },
    {
      name: '後端經驗',
      skill: [
        '<span>Node.js (Express)</span>',
        'PHP (Laravel)',
        null,
        'mySQL',
        'API 開發',
        '系統 & 資料庫設計',
      ],
    },
    {
      name: '團隊合作 / 工具',
      skill: ['Git (Github / Gitlab)', null, 'Figma / Zeplin / Sketch', null, 'Jira', 'Slack'],
    },
    {
      name: '其他實戰經驗 / 興趣延伸',
      skill: [
        'Figma',
        'PS / AI',
        null,
        'Web3.js / Solidity (Block chain)',
        null,
        'Phaser.js / Chart.js',
        'GSAP',
        null,
        'iOS APP (Swift)',
      ],
    },
  ],
};

export const experience: ExperienceType = {
  title: 'EXPERIENCE',
  subTitle: '(6+y)',
  description:
    '超過 6 年的軟體開發經驗，大學期間爭取到系上唯一的實習機會，正式踏入職場。自資訊管理系畢業後，持續深耕軟體產業，最初從事全端開發，累積前後端協作與系統設計經驗，後來專注於前端領域，精進技術與使用者體驗的最佳實踐。參與過大型企業的多人協作開發與系統維護，也在新創公司從 0 到 1 開發並成功推動多款產品上線。',
  list: [
    {
      position: '前端工程師',
      company: '@新加坡商競舞電競有限公司 (Garena)',
      time: '2022/04 ~ 2025/03 (3y)',
      project: [
        '開發遊戲行銷官網 / 遊戲內網頁遊戲 / 後台管理系統',
        'RWD 前端網頁 / In APP webview 前端開發',
        '大量資料渲染優化',
        'API 對接',
        '高互動網頁遊戲',
        '動畫 / 音效處理',
      ],
      tags: ['Vue.js', 'Nuxt.js', 'TypeScript'],
    },
    {
      position: '全端工程師 → 前端工程師 (遠端)',
      company: '@紫洣科技股份有限公司',
      time: '2019/12 ~ 2022/04 (2y5m)',
      project: [
        '開發電商官網 / 區塊鏈產品官網 / 後台系統',
        'RWD 前端網頁',
        '資料庫建置，後端 API 開發',
        '撰寫區塊鏈智能合約上鏈',
        '串接區塊鏈錢包交易',
      ],
      tags: ['Vue.js', 'Nuxt.js', 'PHP', 'Laravel', 'Web3.js', 'Solidity'],
    },
    {
      position: '前端工程師',
      company: '@個人接案',
      time: '2019 ~ 2021',
      project: ['開發後台管理系統 / Google Blogger 模板', 'RWD 前端網頁', 'API 對接'],
      tags: ['Vue.js', 'Javascript', 'CSS', 'Jquery'],
    },
    {
      position: '全端工程師',
      company: '@諾亞克科技股份有限公司',
      time: '2018/08 ~ 2019/07 (1y)',
      project: [
        '開發ERP 系統 / 長照醫療系統 / 醫療設備 APP',
        '資料庫建置，後端 API 開發',
        'RWD 前端網頁',
      ],
      tags: ['PHP', 'Laravel', 'C#', '.Net Framework'],
    },

    {
      position: '程式設計實習生',
      company: '@國泰金融控股股份有限公司',
      time: '2018/02 ~ 2018/06  (5m)',
      project: ['開發金融後台系統 / 部門內部工具', '後端 API、模組開發', '前端開發'],
      tags: ['Java', 'JSP', 'Jquery'],
    },
    {
      position: '資訊管理學系 學士',
      company: '@東海大學',
      time: '2014/09 ~ 2018/06 (4y)',
      project: ['程式設計', '資料庫規劃', '統計學', '離散數學', '會計學', '資訊管理', '微積分'],
      tags: ['Python', 'Java', 'Javascript', 'PHP', 'C', 'C#'],
    },
  ],
};

export const works: WorksType = {
  title: 'WORKS',
  description:
    '除了工作上累積的開發經驗，也熱衷於研究新技術，並喜歡把自己遇到的痛點轉化成 Side Project。憑藉過去的後端經驗，我能夠獨立完成全端開發，讓專案從 UI/UX 設計到功能實現都能完整落地，打造出兼具技術深度與良好體驗的作品。此外，我對設計有濃厚的興趣，雖然不是專業設計師，但我注重細節與美感，希望讓畫面既符合使用者體驗，也能呈現更好的視覺效果。',
  projects: [
    {
      id: 13,
      name: '自行車道地圖資訊整合網（比賽作品）',
      category: WorksCategoryEnum.SIDE_PROJECT,
      date: '2021 年',
      skills: [
        '使用 Nuxt.js Vue SSR 框架開發',
        '串接 Google Map api 服務，Maps JavaScript API 呈現地圖，Distance Matrix API 計算位置距離，以及自訂地圖樣式',
        'axios 串接 TDX api v2 政府 Open Data 服務',
        '響應式 RWD 網頁開發，並搭配 Typescript、SASS (SCSS) 撰寫程式碼',
        '此專案為參加<a class="cursor-target" href="https://2021.thef2e.com/" target="_blank">「THE F2E 3rd 前端修煉精神時光屋」</a>之比賽作品',
      ],
      description:
        '查詢全台自行車站點的車位資訊、和路線資訊，顯示自行車可借還數量，並在 google 地圖上顯示。',
      tags: [
        'Nuxt.js (Vue)',
        'Vuex',
        'google map api',
        'TDX api v2',
        'RWD',
        'Typescript',
        'SASS (SCSS)',
      ],
      demoImgs: ['/assets/works/youbike_map.png'],
      imgs: ['/assets/works/youbike_map.png'],
      demoLinks: [
        {
          link: 'https://youbike-map.netlify.app/',
          text: '專案網站',
        },
      ],
      github: 'https://github.com/rosewang0303/youbike-map',
    },
    {
      id: 12,
      name: '台灣旅遊景點導覽（比賽作品）',
      category: WorksCategoryEnum.SIDE_PROJECT,
      date: '2021 年',
      skills: [
        '使用 Vue.js 框架開發',
        '挑戰不使用第三方套件自己手刻實作「輪播圖片」功能和「時間選擇器」',
        'axios 串接 TDX api v2 和 v3 政府 Open Data 服務',
        '響應式 RWD 網頁開發，並搭配 Typescript、SASS (SCSS) 撰寫程式碼',
        '此專案為參加<a class="cursor-target" href="https://2021.thef2e.com/" target="_blank">「THE F2E 3rd 前端修煉精神時光屋」</a>之比賽作品',
      ],
      description:
        '整合全台各縣市政府舉辦的近期活動、景點導覽以及美食店家，並提供使用者依照篩選分類查詢。',
      tags: ['Vue.js', 'Vuex', 'google map api', 'TDX api v2, v3', 'RWD'],
      demoImgs: ['/assets/works/taiwan_spots.png'],
      imgs: ['/assets/works/taiwan_spots.png'],
      demoLinks: [
        {
          link: 'https://taiwan-spots.netlify.app/',
          text: '前往網站',
        },
      ],
      github: 'https://github.com/rosewang0303/taiwan-spots',
    },
    {
      id: 11,
      name: '旅遊行程安排小工具',
      category: WorksCategoryEnum.SIDE_PROJECT,
      date: '2020 年',
      skills: [
        '從零到一從 UI/UX 到前端規劃及開發，因自身痛點而開發的專案',
        '使用 jQuery 開發',
        '特別使用 contextmenu, drag, drop event 來實作',
        '響應式 RWD 網頁開發，並搭配 Bootstrap 撰寫程式碼',
      ],
      description:
        '安排旅遊行程規劃的簡易小工具，並提供多款客製化功能，像是 icon 顯示，使用拖拉行程來方便安排規劃順序，可無限增加行程天數。',
      tags: ['jQuery', 'RWD', 'Bootstrap', 'Font Awesome'],
      demoImgs: ['/assets/works/travel_planner.png'],
      imgs: ['/assets/works/travel_planner.png'],
      demoLinks: [
        {
          link: 'https://travel-planner-gogo.netlify.app/',
          text: '前往轉案',
        },
      ],
    },
    {
      id: 10,
      name: '直播視訊串流',
      category: WorksCategoryEnum.SIDE_PROJECT,
      date: '2022 年',
      skills: ['使用 Vue.js 框架開發', '從零到一從 UI/UX 到前端規劃及開發', '響應式 RWD 網頁開發'],
      description: '使用 navigator.mediaDevices 練習網頁串流視訊和音訊，並加入聊天互動介面。',
      tags: ['Vue.js', 'RWD', 'navigator.mediaDevices'],
      demoImgs: ['/assets/works/live_stream.png'],
      imgs: ['/assets/works/live_stream.png'],
      demoLinks: [
        {
          link: 'https://live-stream-chat.netlify.app/',
          text: '專案',
        },
      ],
      github: 'https://github.com/rosewang0303/live-stream',
    },

    {
      id: 9,
      name: '全台公車動態時刻查詢應用服務（比賽作品）',
      category: WorksCategoryEnum.SIDE_PROJECT,
      date: '2021 年',
      skills: [
        '使用 Nuxt.js Vue SSR 框架開發',
        'axios 串接 TDX api v2 政府 Open Data 服務',
        '響應式 RWD 網頁開發，並搭配 SASS (SCSS) 撰寫程式碼',
        '此專案為參加<a class="cursor-target" href="https://2021.thef2e.com/" target="_blank">「THE F2E 3rd 前端修煉精神時光屋」</a>之比賽作品',
      ],
      description:
        '整合全台公車、客運的動態時刻，提供使用者查詢，並在地圖上顯示各站點公車、客運動態站牌狀態。<br>[比賽時間內沒挑戰完成，功能未完整]',
      tags: ['Nuxt.js (Vue)', 'Vuex', 'RWD', 'TDX api v2'],
      demoImgs: ['/assets/works/bus_timetable.png'],
      imgs: ['/assets/works/bus_timetable.png'],
      demoLinks: [
        {
          link: 'https://taiwan-bus-timetable.netlify.app/',
          text: '專案網站',
        },
      ],
      github: 'https://github.com/rosewang0303/bus-timetable',
    },
    {
      id: 8,
      name: '遊戲行銷網站',
      category: WorksCategoryEnum.WORK,
      date: '2022~2025 年',
      skills: [
        '開發「DeltaForce」、「鋼之鍊金術師M」...等多款未上市遊戲行銷網站',
        '使用 Nuxt.js（Vue SSR 框架） 進行前端開發，建構 SEO 友善且效能良好的網站架構',
        '實作 響應式 RWD 網頁，搭配 SASS(SCSS) 進行樣式模組化開發，並導入 TypeScript 強化程式碼穩定性與可維護性',
        '整合 i18n 國際化套件，實現多語系切換功能以支援全球用戶',
        '參與專案的後續版本維護與新功能開發，持續提升使用者體驗與產品穩定性',
        '跨部門協作：與遊戲營運團隊討論需求與技術可行性，依據工單流程交付專案',
        '與其他前端工程師協作開發並進行 Code Review，共同討論最佳實作方式，持續優化程式碼品質與維持團隊開發一致性',
        '與後端工程師協作 API 設計與串接，確保前後端資料流程順暢',
        '與設計師密切合作，依據 UI 設計稿切版，實作動畫特效與音效觸發邏輯',
        '配合行銷部門需求，整合並設定 GA、Google Conversion、Meta Pixel、TikTok Pixel 等追蹤碼',
        '與 QA 測試工程師協作，針對測試回饋進行問題排查與優化，確保功能穩定與體驗流暢',
        '撰寫並維護開發文件，提升團隊內部知識共享',
      ],
      description:
        '2022 至 2025 年任職於新加坡商競舞電競有限公司（Garena），負責多款遊戲的多國語系行銷官網開發與維護。專案涵蓋遊戲主視覺展示、預註冊活動、公告發布、社群分享等功能，並結合互動式視覺特效，提升玩家參與感。參與從需求討論、前後端串接、UI 實作到後續改版維運等各階段，協助打造具品牌識別與行銷效益的網站體驗。',
      tags: [
        'Nuxt.js (Vue)',
        'Typescript',
        'SASS (SCSS)',
        'Vite',
        'i18n 多國語',
        'Google Analytics',
        'Google Conversion',
        'Meta Pixel',
        'TikTok Pixel',
      ],
      demoImgs: ['/assets/works/fam_preregister.png'],
      imgs: ['/assets/works/deltaforce.png', '/assets/works/fam_preregister.png'],
      demoLinks: [
        {
          link: 'https://deltaforce.garena.com/en/?redirect=0',
          text: '專案網站',
        },
      ],
    },
    {
      id: 7,
      name: '手遊 In-App-Webview 互動網頁',
      category: WorksCategoryEnum.WORK,
      date: '2022~2025 年',
      skills: [
        '開發「傳說對決」、「天涯明月刀M」、「決勝時刻：Mobile」、「黑色五葉草M 魔法帝之道」、「黎明覺醒」、「鋼之鍊金術師M」...等多款手遊內互動網頁',
        '使用 Vue.js 開發手遊內 In-App WebView 活動頁，針對 iOS 與 Android 平台進行跨裝置相容性調整',
        '實作 響應式 RWD 網頁，搭配 SASS(SCSS) 進行樣式模組化開發，並導入 TypeScript 強化程式碼穩定性與可維護性',
        '整合 i18n 國際化套件，實現多語系切換功能以支援全球用戶',
        '參與專案的後續版本維護與新功能開發，持續提升使用者體驗與產品穩定性',
        '跨部門協作：與遊戲營運團隊討論需求與技術可行性，依據工單流程交付專案',
        '與其他前端工程師協作開發並進行 Code Review，共同討論最佳實作方式，持續優化程式碼品質與維持團隊開發一致性',
        '與後端工程師協作 API 設計與串接，確保前後端資料流程順暢',
        '與設計師密切合作，依據 UI 設計稿切版，實作動畫特效與音效觸發邏輯',
        '配合行銷部門需求，整合並設定 GA 追蹤碼',
        '與 QA 測試工程師協作，針對測試回饋進行問題排查與優化，確保功能穩定與體驗流暢',
        '面向數百萬玩家，用戶活動高峰期間需支援大量即時在線瀏覽與互動，開發時特別重視效能與穩定性',
        '採用 懶加載（Lazy Loading）、分頁機制與批次請求策略，有效優化資料渲染與用戶操作體驗',
        '整合 WebSocket 即時連線技術，支援玩家於活動頁面中即時互動與參與遊戲機制，提升參與感與趣味性',
        '撰寫並維護開發文件，提升團隊內部知識共享',
      ],
      description:
        '2022 至 2025 年任職於新加坡商競舞電競有限公司（Garena），負責多款手遊的 In-App WebView 活動頁開發與維護。專案涵蓋多國語系支援、視覺特效與互動遊戲設計，內容包括營收向活動頁、IP 聯名合作、遊戲內活動大廳、賽事頁與玩家問卷等，協助提升遊戲黏著度與用戶參與率。',
      tags: [
        'Vue.js',
        'Vue3, Vue2',
        'Typescript',
        'SASS (SCSS)',
        'Vite',
        'In-App-Webview',
        'i18n 多國語',
        'Google Analytics',
      ],
      demoImgs: [
        '/assets/works/mbm_bingo.png',
        '/assets/works/aov_psschesttem.png',
        '/assets/works/aov_supersale.png',
      ],
      imgs: [
        '/assets/works/mbm_bingo.png',
        '/assets/works/aov_psschesttem.png',
        '/assets/works/aov_supersale.png',
        '/assets/works/aov_grouping_topup.png',
        '/assets/works/codm_doftem.png',
        '/assets/works/aov_towerchest_hunter_ip.png',
        '/assets/works/aov_vdiscount.jpg',
        '/assets/works/bcm_golbalworldmatch.png',
        '/assets/works/bcm_golbalworldmatch_2.png',
        '/assets/works/bcm_mysteryshop.png',
        '/assets/works/ud_option_panel.png',
        '/assets/works/aov_skin_grading.jpg',
      ],
    },
    {
      id: 6,
      name: '樂享購 (電商網路購物平台)',
      category: WorksCategoryEnum.WORK,
      date: '2019~2022年',
      skills: [
        '使用 Nuxt.js Vue SSR 框架開發',
        '響應式 RWD 網頁開發，並搭配 SASS (SCSS) 撰寫程式碼',
        '維護專案後續改版，和開發增加新需求',
        '跨部門合作、參與產品完整規劃和開發維護',
        '參與團隊會議與 PM 一同討論產品規劃從零到上線',
        '與後端工程師討論開 API 規格、並串接 API',
        '與設計師合作討論 UI/UX 優化，並依照提供的 sketch、zeplin 設計稿開發',
        '依行銷需求埋點 Google Analytics、Google Conversion，並設定後台埋點規則',

        'SSR框架開發',
        '串接api及後續維護',
        '網頁互動小遊戲開發',
        '第三方服務串接',
        'In-App-Webview行動裝置網頁開發',
      ],
      description: '',
      tags: ['Nuxt.js (Vue)', 'SASS (SCSS)'],
      demoImgs: ['/assets/works/shop.png', '/assets/works/shop_2.png'],
      imgs: ['/assets/works/shop.png', '/assets/works/shop_2.png'],
      demoLinks: [
        {
          link: 'https://www.shop168.fun/',
          text: '專案網站',
        },
      ],
    },
    {
      id: 5,
      name: 'Tracke (區塊鏈收藏品交易平台)',
      category: WorksCategoryEnum.WORK,
      date: '2019~2022年',
      skills: [
        '前端RWD開發',
        '串接 api 及後續維護',
        '後端 api 撰寫及資料庫規劃',
        '第三方服務串接',
        '以太坊智能合約開發及合約互動api撰寫',
      ],
      description: '',
      tags: ['Javascript', 'CSS', 'Bootstrap', '多國語'],
      demoImgs: ['/assets/works/tracke.png'],
      imgs: ['/assets/works/tracke.png'],
    },
    {
      id: 4,
      name: '全家超商:智能販賣機',
      category: WorksCategoryEnum.WORK,
      date: '2019~2022年',
      skills: ['販賣機使用者互動開發', '販賣機廣告遊戲開發'],
      description: '',
      tags: ['Vue.js', 'CSS'],
      demoImgs: ['/assets/works/vending_machines.png'],
      imgs: ['/assets/works/vending_machines.png'],
    },
    {
      id: 3,
      name: 'ALTC (長期照護媒合平台)',
      category: WorksCategoryEnum.WORK,
      date: '2018~2019年',
      skills: ['全端網站RWD', 'SSR開發及後續維護', '資料庫建置規劃，獨立開發'],
      description: '',
      tags: ['PHP (Laravel)', 'CSS', 'Javascript'],
      demoImgs: ['/assets/works/altc.png'],
      imgs: ['/assets/works/altc.png'],
      demoLinks: [
        {
          link: 'https://www.airltc.com/',
          text: '專案網站',
        },
      ],
    },
    {
      id: 2,
      name: '桃園市社會局日照及公托資訊管理系統',
      category: WorksCategoryEnum.WORK,
      date: '2018~2019年',
      skills: [
        '全端網站RWD',
        'SSR開發',
        '資料庫建置規劃',
        'iOS APP開發及介面設計',
        '處理客戶第一線需求',
      ],
      description: '',
      tags: ['C# (.Net Framework)', 'CSS', 'Javascript'],
      demoImgs: ['/assets/works/taoyuan.png', '/assets/works/taoyuan_2.png'],
      imgs: ['/assets/works/taoyuan.png', '/assets/works/taoyuan_2.png'],
    },
    {
      id: 1,
      name: '臺中市長期照顧資訊系統',
      category: WorksCategoryEnum.WORK,
      date: '2018~2019年',
      skills: ['全端網站RWD', 'SSR開發', '資料庫建置規劃', 'iOS APP開發'],
      description: '',
      tags: ['C# (.Net Framework)', 'CSS', 'Javascript'],
      demoImgs: ['/assets/works/taichung.png', '/assets/works/taichung_2.png'],
      imgs: ['/assets/works/taichung.png', '/assets/works/taichung_2.png'],
    },
  ],
};
