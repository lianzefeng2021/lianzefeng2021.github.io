module.exports = {
  nav: [
    // 导航栏配置
    {
      text: '前端基础',
      link: '/views/accumulate/',
      items: [
        {
          text: 'js',
          link: '/views/accumulate/js/'
        },
        {
          text: 'css',
          link: '/views/accumulate/css/'
        },
        {
          text: 'html',
          link: '/views/accumulate/html/'
        },
        {
          text: 'es6',
          link: '/views/accumulate/es6/'
        },
        {
          text: 'ts',
          link: '/views/accumulate/ts/'
        },
        {
          text: '网络基础',
          link: '/views/accumulate/network/'
        },
        {
          text: 'git',
          link: '/views/accumulate/git/'
        },
        {
          text: 'vue2',
          link: '/views/accumulate/vue2/'
        },
        {
          text: 'vue3',
          link: '/views/accumulate/vue3/'
        }
      ]
    },
    { text: '面试题库', link: '/views/interview/' },
    {
      text: '我的组件',
      link: '/others/',
      items: [
        {
          text: 'countjs',
          link: '/views/others/countup'
        },
        {
          text: 'screenfull',
          link: '/views/others/screenfull'
        },
      ]
    },
    { text: '联系晓锋', link: 'https://github.com/lianzefeng2021' }
  ],
  // sidebar: [
  //   {
  //     title: 'Group 1',   // 必要的
  //     path: '/views/accumulate/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  //     collapsable: false, // 可选的, 默认值是 true,
  //     sidebarDepth: 1,    // 可选的, 默认值是 1
  //     children: [
  //       '/', '/vue2/', '/vue3/', '/es6/'
  //     ]
  //   }
  // ]
  sidebar: 'auto', // 侧边栏配置
  sidebarDepth: 2 // 侧栏标题深度，默认只显示到2级标题 ##
}
