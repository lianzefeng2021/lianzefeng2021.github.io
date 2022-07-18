---
title: el-date-picker
---

<DatePicker />

> 禁止今日前日期的可选中

```js
// 禁掉之前的日期

// html
<el-date-picker :picker-options="pickerOptions" />

// js
pickerOptions: {
    disabledDate (time) {
    return time.getTime() < Date.now() - 8.64e7
    }
}
```

> 限制可选 日期范围 如：前后日期不可超7天

```js

```