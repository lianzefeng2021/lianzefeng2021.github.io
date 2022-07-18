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
validatorLimitDateRang (days, dateRang) {
    const legalRang = days * 24 * 3600 * 1000
    const currentRang = dayjs(dateRang[1]).valueOf() - dayjs(dateRang[0]).valueOf()
    if (currentRang > legalRang) return false
    return true
}
```

> rules 限制（表单验证）

```js
rules: {
    batchTimeRange: [
        {
            type: 'array',
            required: true,
            message: "选择日期才可提交表单嗷",
            trigger: 'blur',
            fields: {
            0: { required: true, message: "选择完整日期才可提交表单嗷" },
            1: { required: true, message: "选择完整日期才可提交表单嗷" }
            }
        },
        {
            validator: (rule, value, callback) => {
            if (!this.validatorLimitDateRang(15, value)) {
                callback(new Error('最多可选择15天'))
            } else {
                callback()
            }
            // callback()
            },
            trigger: 'blur'
        }
    ]
},
```