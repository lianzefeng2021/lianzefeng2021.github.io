---
title: layout
---

the layout for buttons

``` css
.filter-container {
  padding-bottom: 10px;

  .filter-item {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 10px;
  }
  .search-item {
    margin-right: 10px;
    width: 190px;
  }
  .date-range-item {
    width: 240px;
  }
}
```

``` html
<!-- elementUI components -->
    <div class="filter-container">
      <!-- 模糊条件查询开始 -->
      <el-form
        :inline="true"
        ref="historyConfigForm"
        :model="queryParams"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="店铺:">
          <el-select v-model="queryParams.sycmStoreId" placeholder="请选择店铺" class="filter-item">
            <el-option
              v-for="item in storeList"
              :key="item.sycmStoreId"
              :label="item.storeName"
              :value="item.sycmStoreId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="活动名称:" prop="activityName">
          <el-input
            v-model.trim="queryParams.activityName"
            placeholder="请输入活动名称"
            class="filter-item platform-item"
            clearable
          />
        </el-form-item>
        <el-form-item label="活动周期:" prop="daterange">
          <el-date-picker
            v-model="queryParams.daterange"
            type="daterange"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            range-separator="-"
            :start-placeholder="$t('table.intelligence.beginTime')"
            :end-placeholder="$t('table.intelligence.endTime')"
            class="filter-item search-item picker-time"
          />
        </el-form-item>
        <el-form-item
          ><el-button type="primary" plain class="filter-item" @click="searchActivites"
            >查询</el-button
          ></el-form-item
        >
        <el-form-item
          ><el-button type="warning" plain class="filter-item" @click="createActivites"
            >创建活动</el-button
          ></el-form-item
        >
        <el-form-item
          ><el-button type="danger" plain class="filter-item" @click="clearAllChoice"
            >清空勾选</el-button
          ></el-form-item
        >
        <el-form-item
          ><el-button type="success" plain class="filter-item" @click="batchDownload"
            >勾选下载</el-button
          ></el-form-item
        >
        <el-form-item
          ><el-button type="success" class="filter-item" @click="handleAllDownload"
            >全部下载</el-button
          ></el-form-item
        >
      </el-form>
    </div>
    <!-- 模糊条件查询结束 -->
```