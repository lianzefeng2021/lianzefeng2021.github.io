---
title: screenfull
---

<screenfull></screenfull>

```js
npm install --save-dev screenfull@5.1.0
// 6.0版本报错，不推荐使用最新版，可能需配合vue3使用，尚未测试
html
<template>
  <div>
    <i :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" @click="click">点我~</i>
  </div>
</template>

css
<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      if (!screenfull.isEnabled) {
        this.$message({ message: '你的浏览器不支持全屏', type: 'warning' })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>
```