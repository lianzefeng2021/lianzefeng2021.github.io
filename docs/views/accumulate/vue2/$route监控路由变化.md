---
title: $route 监控路由变化
---

## $route 参数 introduce 表示(当前路由信息对象)

```js
console.log(this.$route)
//
[object Object]
//
{
  fullPath:"", // 完成解析后的 URL，包含查询参数和 hash 的完整路径。
  hash:"", // 当前路由的 hash 值 (不带 #) ，如果没有 hash 值，则为空字符串。锚点
  matched:[{
    beforeEnter: undefined,
    components:{}, // 组件的路由信息？
    instances:{},
    matchAs: undefined,
    ...
  },{}], // 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
  meta:{
    breadcrumb: true,
    icon: "el-icon-shopping-cart-full",
    title: ""
    }, // 路由元信息
  name: "邮件随达设置", // 当前路径名字
  params:{}, //  一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。
  path: "/crmExtraGiftsManagement/emailSendingSetting", // 字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。
  query: {} // 一个 key/value 对象，表示 URL 查询参数。
      // 例如，对于路径 /foo?user=1，则有 $route.query.user == 1，
      // 如果没有查询参数，则是个空对象。
}
```

## $router 路由对象方法
### this.$router.push()
``` js
// 字符串
this.$router.push('home')
// 对象
this.$router.push({ path: 'home' })
// 命名的路由
this.$router.push({ name: 'user', params: { userId: 123 }})
// 带查询参数，变成 /register?plan=123
this.$router.push({ path: 'register', query: { plan: '123' }})

// 注：push 方法其实和 <router-link :to="..."> 是等同的。
// 注：push方法的跳转会向 history 栈添加一个新的记录，当我们点击浏览器的返回按钮时可以看到之前的页面。
```

### this.router.go(-1)
``` js
// 页面路由跳转 前进或者后退
this.$router.go(-1) // 后退
```

### this.$router.replace()
``` js
//push方法会向 history 栈添加一个新的记录，而replace方法是替换当前的页面，不会向 history 栈添加一个新的记录
<router-link to="/05" replace>05</router-link>

// 一般使用replace来做404页面
this.$router.replace('/')
```

## 用法

```js
  watch: {
    $route (to, from) {
      if (from.path === '/intelligence/trafficBank/activitiesCreate') {
        // this.$message.error('离开本页？')
        this.reset()
      }
    }
  }
```

- 其中，to 为即将前往的 页面路由对象，
- from 为 本页路由，从哪页离开就是哪个路由

```js
this.$router.push({
  path: '/intelligence/trafficBank/activitiesCreate'
})
```

- 区别于：路由跳转

## 拓展

<!-- 2022/09/06 -->

- 钩子函数

```js
  beforeRouteLeave (to, from, next) {
    if (this.isEdit === true && from.path === '/crmExtraGiftsManagement/emailSendingSetting') {
      this.$confirm('您处于编辑状态，尚未保存, 是否离开本页面?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'warning',
            message: '尚未保存已离开!'
          })
          next()
        })
        .catch(() => {
          this.$message({
            type: 'success',
            message: '已留在本页'
          })
          next(false)
        })
    } else if (this.isEdit === false) {
      next()
    }
  },
```

> next(false) : 阻止路由跳转

> next() / next(true) : 允许路由跳转
