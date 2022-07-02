const plugins = require("./config/plugins/");
module.exports = {
  title: "晓锋空间",
  // theme: require.resolve('../../'),
  description: "记录与分享",

  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    ["link", { rel: "manifest", href: "/images/photo.jpg" }],
    ["link", { rel: "apple-touch-icon", href: "/images/photo.jpg" }],
    ["meta", { "http-quiv": "pragma", cotent: "no-cache" }],
    ["meta", { "http-quiv": "pragma", cotent: "no-cache,must-revalidate" }],
    ["meta", { "http-quiv": "expires", cotent: "0" }],
  ],
  plugins,
  serviceWorker: true, // 是否开启 PWA
  base: "/", // 部署到github相关的配置
  markdown: {
    lineNumbers: true, // 代码块是否显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: "前端基础", link: "/accumulate/" },
      { text: "面试题库", link: "/algorithm/" },
      { text: "诗和远方", link: "/others/" },
      { text: "联系晓锋", link: "https://github.com/lianzefeng2021" },
    ],
    // sidebar:{
    //   '/accumulate/': [
    //       {
    //         title: '前端积累',
    //         children: [
    //           '/accumulate/1.html',
    //           '/accumulate/2.html',
    //           '/accumulate/3.html',
    //           '/accumulate/4.html',
    //           '/accumulate/5.html',
    //           '/accumulate/6.html',
    //           '/accumulate/7.html',
    //           '/accumulate/8.html',
    //           '/accumulate/9.html',
    //           '/accumulate/10.html',
    //           '/accumulate/11.html',
    //         ]
    //       }
    //     ],
    //     '/algorithm/': [
    //       '/algorithm/',
    //       {
    //         title: '第二组侧边栏下拉框的标题1',
    //         children: [
    //           '/algorithm/'
    //         ]
    //       }
    //     ]
    // },
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2,
  },
};
