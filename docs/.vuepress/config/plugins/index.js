// 不要忘了安装 moment
// const { CountUp } = require("countup.js");
const moment = require("moment");
// const screenfull = require("screenfull");
// import screenfull from 'screenfull'

module.exports = [
  ["@vuepress/back-to-top"], // 返回顶部按钮
  [
    "@vuepress/search",
    {
      // 搜索框
      searchMaxSuggestions: 10,
    },
  ],
  [
    "@vuepress/last-updated", // md文件最后更新日期显示
    {
      transformer: (timestamp, lang) => {
        moment.locale(lang);
        return moment(timestamp).fromNow();
      },
    },
  ],
  [
    "md-enhance",
    {
      // 启用自定义容器
      container: true,
    },
  ],
  ["vuepress-plugin-smooth-scroll"],
  ["vuepress-plugin-auto-sidebar"],
  ["screenfull"],
  // [
  //   '@vuepress/plugin-register-components',
  //   {
  //     components: [
  //       {
  //         name: 'reco-home-page-one',
  //         path: path.resolve(__dirname, './components/HomePageOne.vue')
  //       }
  //     ],
  //     componentsDir: path.resolve(__dirname, './demo')
  //   }
  // ],
];
