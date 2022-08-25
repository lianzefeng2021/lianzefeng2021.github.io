---
title: traffic bank
---

## all the pages creat by myself
from the create of pages to the joint investigation of apis

main components：
el-table
pagination
el-upload(excel & img)
download-link(a link)

::: warning
sigle variable may effect many place,if some one change,both of key or value,so,please pay attention!
:::

``` html
<!-- excel -->
<!-- 按钮样式 -->
<!-- 不可拖拽上传，仅单个上传 -->
          <el-upload
            ref="upload"
            :action="actionUrl"
            :headers="headers"
            :show-file-list="false"
            :before-upload="excelBeforeUpload"
            :on-success="excelUploadSuccess"
            :on-error="excelUploadError"
            :on-progress="excelUploadProgress"
            accept=".xlsx,.xls"
          >
            <el-button slot="trigger" class="button-item" plain type="success">上传文件</el-button>
          </el-upload>

<!-- 图片 -->
<!-- 方块组件样式 -->
<!-- 可拖拽上传，且多个并发上传 -->
        <el-upload
            class="upload-demo"
            :action="uploadUri"
            multiple
            drag
            :show-file-list="false"
            :before-upload="imgBeforUpload"
            :on-success="imgUploadSuccess"
            :on-error="imgUploadError"
            accept=".jpg,.jpeg,.png,.JPG,.JPEG,.PNG"
          >
            <!-- <el-button type="primary" size="small" plain>本地上传</el-button> -->
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">
              只能上传.jpg,.jpeg,.png,.JPG,.JPEG,.PNG文件<br />注意图片名称需和Excel中的活动ID相同
            </div>
            <!-- slot="tip" -->
          </el-upload>
```

``` js
    // excel上传
    excelBeforeUpload (file) {},
    excelUploadSuccess (response, file, fileList) {
      if (file.response.code === 200) {
        this.excelName = file.name
        this.isOpen = file.response.data.isOpen || 0
        this.code = file.response.code || 0
        this.temId = file.response.data.temId || ''
        // 处理失败列表
        this.errorSize = file.response.data.errorSize || file.response.data.errorList?.length || 0
        this.successSize = file.response.data.successSize || 0
        this.gridData = file.response.data.errorList || []
        // console.log(file.response.data.errorList, 'file.response.data.errorlList')
        this.$message({
          message: `${file.response.message}`,
          type: 'success'
        })
      } else {
        this.$message.error(`${file.response.message}`)
      }
    },
    excelUploadError (err, file, fileList) {
      this.$message.error('上传失败请重试')
      console.error(err, file, fileList)
    },
    excelUploadProgress (event, file, fileList) {
      // 文件上传时的钩子
    },


        // 图片上传
    imgBeforUpload (file) {
      this.isLoadPic = true
      // console.log(file, 'imgBeforUpload')
      if (file.size > 3145728) {
        this.$message.error('图片尺寸不得大于3M')
        return false
      }
      // if (this.fileList.length < 20) {
      //   this.isLoadPic = true
      // } else {
      //   console.log('file')
      //   this.$message.error('无法上传xx,超过20张')
      //   return false
      // }
    },
    formateFile (file) {
      const name = file.name
      const fileData = file.response.data
      const { suffix, fileName, fileSize, url, width, height, id } = fileData
      const arr = fileName.split(suffix)
      const formateFileName = arr[0]
      const key = new Date().getTime()
      return {
        fileSize,
        imagePath: url,
        fileName,
        name,
        suffix,
        width,
        height,
        formateFileName: formateFileName,
        creativeName: formateFileName,
        key: `${id}_${key}`
      }
    },
    imgUploadSuccess (response, file, fileList) {
      // console.log(file, 'file')
      // console.log(fileList, 'fileList')
      this.isLoadPic = false
      const data = this.formateFile(file)
      // console.log(data, 'data')
      const sizeList = [[522, 522]]
      const maxFileSize = 3145728
      const { width, height, fileSize, suffix } = data
      const fileName = data.name.split(suffix)
      const isValid = sizeList.findIndex(item => item[0] === width && item[1] === height)
      if (isValid === -1) {
        this.$message.error(data.name + ' 图片尺寸不符合要求,要求为:尺寸为522*522')
        return false
      }
      if (maxFileSize < fileSize) {
        this.$message.error(data.name + ' 图片大小不符合要求,要求为:大小3M内')
        return false
      }
      // console.log(data.name, 'data.name')
      // console.log(this.fileList, 'this.fileList')
      if (this.fileList.find(imgData => imgData.imgName === fileName[0])) {
        this.$message.error(data.name + ' 这张图片已存在已上传列表，如若替换，请先删除列表中图片')
        return false
      }
      this.$message({
        message: data.name + '上传成功',
        type: 'success'
      })
      this.fileList.push({ imgName: fileName[0], imgUrl: data.imagePath })
      // console.log(this.fileList)
    },
    imgUploadError (err, file, fileList) {
      this.$message.error('上传失败请重试')
      console.error(err, file, fileList)
    },
```

