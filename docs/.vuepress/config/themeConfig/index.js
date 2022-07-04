module.exports = {
  nav: [
    // 导航栏配置
    {
      text: "前端基础",
      link: "/views/accumulate/",
      items: [
        {
          text: "vue2",
          link: "/views/accumulate/vue2/",
        },
        {
          text: "vue3",
          link: "/views/accumulate/vue3/",
        },
        {
          text: "js",
          link: "/views/accumulate/es6/",
        },
        {
          text: "css",
          link: "/views/accumulate/css/",
        },
        {
          text: "html",
          link: "/views/accumulate/html/",
        },
        {
          text: "网络基础",
          link: "/views/accumulate/netword/",
        },
      ],
    },
    { text: "面试题库", link: "/views/interview/" },
    {
      text: "组件展示",
      link: "/others/",
      items: [
        {
          text: "countjs",
          link: "/views/others/countup",
        },
      ],
    },
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
};
