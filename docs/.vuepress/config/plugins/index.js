// 不要忘了安装 moment
const moment = require("moment");
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
];
