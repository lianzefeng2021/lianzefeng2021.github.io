---
title: el-date-picker
---
<div></div>
<el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="店铺">
    <el-input class="input-item" v-model="form.storeName" disabled></el-input>
    </el-form-item>
    <el-form-item :label="开店日期" prop="batchTimeRange">
    <el-date-picker
        v-model="form.batchTimeRange"
        type="daterange"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        range-separator="-"
        :picker-options="pickerOptions"
        :start-placeholder="缺少开始时间"
        :end-placeholder="缺少结束时间"
    />
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
</el-form>
</div>
<script>
  export default {
    data() {
      return {
        form: {
            storeName: '解忧杂货店',
            batchTimeRange: []
        },
        // 禁掉之前的日期
        pickerOptions: {
            disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
            }
        },
        rules: {
        batchTimeRange: [
            {
                type: 'array',
                required: true,
                message: this.$t('table.intelligenceBoard.selectDateRange'),
                trigger: 'blur',
                fields: {
                0: { required: true, message: this.$t('table.intelligenceBoard.selectDateRange') },
                1: { required: true, message: this.$t('table.intelligenceBoard.selectDateRange') }
                }
            },
            {
                validator: (rule, value, callback) => {
                if (!this.validatorLimitDateRang(15, value)) {
                    callback(new Error('最多可选择15天'))
                } else {
                    callback()
                }
                },
                trigger: 'blur'
            }
        ]
      },
      }
    },
    methods: {
        submitForm () {
            this.$refs.form.validate(valid => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
    }
  }
</script>
