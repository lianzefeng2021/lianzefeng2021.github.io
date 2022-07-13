---
title: el-image
---
::: tip
elements-UI 大图 预览功能

个人感觉功能也不错，支持大图轮播预览效果，拖拽图片，旋转，缩放等
:::

<el-image ref="preview" :src='img' :preview-src-list="imageList" style="width:200px"/>

####

<el-button @click="click">click</el-button>

```js
// （支持IE 使用elementUi官网文档中的组件）一般项目中需要点击触发事件才进行查看大图，elementUi组件库中并没有写触发需要执行的代码，这里在触发的方法中加this.$refs.preview.clickHandler()触发查看大图功能
<el-button @click="onPreview">预览</el-button>
<el-image ref="preview" :src="url" :preview-src-list="srcList"></el-image>

export default {
    data() {
        return {
      url: '/images/before.jpg',
      srcList: [
        '/images/before.jpg',
        '/images/before.jpg',
        '/images/before.jpg'
      ],
        }
    },
    methods: {
        onPreview() {
          this.$refs.preview.clickHandler()
        },
    }
}
```

```js
// 不支持IE　使用el-image-viewer组件，是elementUi自带的但官网文档中可能因不兼容IE没有把它暴露出来，不需要下载包引入即可
<el-button @click="onPreview">预览</el-button>
<el-image-viewer v-if="showViewer" :on-close="closeViewer" :url-list="srcList" />
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
    components: { ElImageViewer },
    data() {
     return {
      showViewer: true,
      url: '/images/before.jpg',
      srcList: [
        '/images/before.jpg',
        '/images/before.jpg',
        '/images/before.jpg'
      ]
     }
    },
    methods: {
    onPreview() {
      this.showViewer = true
    },
    closeViewer() {
      this.showViewer = false
    },
    }
}
```


<script>
  export default{
    data() {
        return {
            img: 'https://lianzefeng2021.github.io/images/photo.jpg',
            imageList: ['/images/before.jpg']
        }
    },
    methods: {
      click() {
        this.$refs.preview.clickHandler()
      },
    },
  }
</script>