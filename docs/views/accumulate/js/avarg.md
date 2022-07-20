---
title: junfensuanfa
---

    const leaveNum = Number(new Big(100).minus(this.percentSum)) // 剩余数值
    const average = Number((leaveNum / targetNullBudget.length).toFixed(2)) // 平均值
    const sum = Number(new Big(average).times(targetNullBudget.length))
    if (sum !== leaveNum) {
        const difference = Number(new Big(leaveNum).minus(sum)) // 差值
        this.settingTableData.map(item => {
        if (item.time === targetNullBudget[0].time) {
            item.budgetRatio = Number(new Big(average).plus(difference))
            item.budget = Number(
            new Big(item.budgetRatio).div(100).times(Number(this.queryInfos.budget))
            ).toFixed(2)
        }
        if (!item.budgetRatio) {
            item.budgetRatio = average
            item.budget = Number(
            new Big(item.budgetRatio).div(100).times(Number(this.queryInfos.budget))
            ).toFixed(2)
        }
        return item
        })
    } else {
        this.settingTableData.map(item => {
        if (!item.budgetRatio) {
            item.budgetRatio = average
            item.budget = Number(
            new Big(item.budgetRatio).div(100).times(Number(this.queryInfos.budget))
            ).toFixed(2)
        }
        return item
        })
    }
    this.isRatioRight()