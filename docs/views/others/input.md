---
title: input
--- 

<el-input  placeholder="请输入内容"  v-model="input"  clearable oncut="return false" onpaste="return false" oncopy="return false"></el-input>

::: tip
输入框禁止 使用 复制、粘贴、剪切
:::

<el-input v-model="input" @paste.native.capture.prevent="handlePaste" type="password" show-password></el-input>

```js
<el-input  placeholder="请输入内容"  v-model="input"  clearable oncut="return false" onpaste="return false" oncopy="return false"></el-input>
```

```js
<el-input v-model="resform.resPass" @paste.native.capture.prevent="handlePaste" type="password" show-password></el-input>
//
// handlePaste 为阻止 冒泡与传递事件
// 事件修饰符说明:
// native: 表明这个是dom的原生事件,如果不加native, vue会认为paste是一个自定义事件,必须要在组件内手动触发, 那么在粘贴的时候自然就不会触发了
// capture: 表明这个方法在捕获阶段执行,默认为冒泡执行,参考addEventListener方法中的useCapture参数
// prevent: 相当于event.preventDefault阻止默认行为, 同时也会阻止事件的向下传递和向上冒泡

```

<script>
  export default {
    data() {
      return {
        input: ''
      }
    },
    methods: {
        handlePaste () {

        }
    }
  }
</script>