---
title: $route 监控路由变化
---

``` js
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

``` js
      this.$router.push({
        path: '/intelligence/trafficBank/activitiesCreate'
      })
```

- 区别于：路由跳转