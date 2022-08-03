---
title: css3 新特性
---

[css3新特性](https://www.w3cschool.cn/css_series/css_series-cmbf24qi.html)

[css3新特性](https://blog.csdn.net/ZLJ_999/article/details/115035292)

## 细讲

### 1. CSS3是CSS2.1的一个升级版，它是对CSS的一个扩展。

### 2. CSS3的主要新特性：

> 1. 选择器
>
> 2. 阴影
>
> 3. 形状转换（2D <-> 3D）
>
> 4. 变形
>
> 5. 动画（过渡动画、帧动画）
>
> 6. 边框
>
> 7. 多重背景
>
> 8. 反射
>
> 9. 文字
>
> 10. 颜色函数（rgba/hsl/hsla）
>
> 11. 滤镜（filter）
>
> 12. 弹性布局
>
> 13. 多列布局
>
> 14. 栅格布局
>
> 15. 盒模型
>
> 16. Web字体
>
> 17. 媒体查询


### 3. CSS3不是属于浏览器或同一浏览器的不同版本都支持，所以需要兼容处理，通常的做法就是加厂商前缀。
> 1）主流浏览器内核（面试点）
>
> 1. Trident: IE 内核
> 2. Webkit：Chrome 和 Safari 内核
> 3. Gecko：FireFox 内核
> 4. Blink（是 Webkit 的一个分支）： Chrome 和 Opera 内核
>
> Tips（技巧）:目前国内的浏览器大多都是双核的（IE 内核 + Chrome 内核）
>
> 2）厂商前缀
>
> IE： -ms-
>
> Chrome & Safari： -webkit-
>
> FireFox： -moz-
>
> Opera： -o-

### 4. CSS3选择器
丰富选择的目的：在标签中减少class和id属性的使用。

> 1）属性选择器
>
> [属性名]
>
> [属性名=属性值]
>
> [属性名^=属性值]
>
> [属性名$=属性值]
>
> [属性名*=属性值]

> 2）结构性伪类
>
> :first-child
>
> :last-child
>
> :nth-child(n)
>
> :nth-last-child(n)
>
> :nth-of-type(n)
>
> :nth-last-of-type(n)
>
> :only-child
>
> :only-of-type
>
> :empty

> 3）目标伪类
>
> :target

> 4）UI元素状态伪类
>
> :checked (只在Opera浏览器中有效)
>
> :disabled
>
> :enabled
>
> :selection

> 5）否定伪类
>
> :not()

> 6）通用兄弟元素选择器

### 5. CSS3文本
> 1. 文本阴影（主流浏览器都支持，（IE9以上支持））
> 
> text-shadow: 水平偏移距离 垂直偏移距离 [模糊距离] [阴影的尺寸] [颜色] [inset];
>
> 2. 文本自动换行（主流浏览器都支持）
>
> word-wrap: normal|break-word;
>
> 3. 单词拆分（主流浏览器都支持）
>
> word-break: normal|break-all|keep-all;
> 
> 4. 文本拆分（所有主流浏览器都不支持）
> 
> text-wrap: normal|none|unrestricted|suppress;
> 
> 5. 文本溢出
> 
> a)单行文本溢出（重要）
>
> text-overflow: clip|ellipsis|string;
``` js
 a)处理文字溢出样式：
                width: px/%/em/rem...;
                white-space: nowrap; /* 为允许折行 */
                -ms-text-overflow: ellipsis; /* 处理IE兼容 */
                text-overflow: ellipsis;
                overflow: hidden;
b)多行文本溢出（IE9以下的版本不支持，主要是谷歌支持）
            width: px/%/em/rem...;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 行数;
            overflow: hidden;
```

### 6. CSS3边框
> 1. 圆角边框（掌握）
``` js
border-radius: 1-4 length|% / 1-4 length|%;
```
> 四个方位的词：top-left/top-right/bottom-left/bottom-right

> 2. 边框阴影（IE9以上支持）
``` js
box-shadow: 水平偏移距离 垂直偏移距离 [模糊距离] [阴影的尺寸] [颜色] [inset];
```
> 3. 边框图片(IE11.0及以后版本支持）
``` js
border-image：图片 向内偏移距离 宽度 图像区域超出边框的距离 重复效果;
```
> 重复效果：round/strech/repeat

### 7. CSS3背景
> 1. 多重背景
``` js
background: 背景色 背景图片 平铺方式 位置,背景色 背景图片 平铺方式 位置,…
```

> 2. background-size：设定背景图像的尺寸。
``` js
background-size: 固定长度|百分比值|cover|contain;
```
> 3. background-origin：指定背景图像的位置区域。
``` js
background-origin: padding-box|border-box|content-box;
```
> 4. background-clip：设定背景的绘制区域。
``` js
background-clip: border-box|padding-box|content-box;
```
> 5. 渐变背景
``` js
background-image: 线性渐变｜径向渐变
```

### 8. CSS3颜色函数
1. RGBA
``` js
rgba(r,g,b,a)
```
> r:红色 取值范围：0-255/0-100%
>
> g:绿色 取值范围：0-255/0-100%
>
> b:蓝色 取值范围：0-255/0-100%
>
> a:不透明度 取值范围：0-1的一个小数

2）HSL
``` js
hsl(h,s,l)
```
> h:色调 取值范围：0-360

> s:饱和度 取值范围：0-100%

> l:亮度 取值范围：0-100%

3）HSLA
``` js
hsla(h,s,l,a)
```
> h:色调 取值范围：0-360

> s:饱和度 取值范围：0-100%

> l:亮度 取值范围：0-100%

> a:不透明度 取值范围：0-1的一个小数

### 9. opacity
调整元素的不透明度，大多数情况下用于做元素的遮罩效果。

取值范围：0-1的一个小数 IE8及8以下版本不支持opacity，处理兼容的方式，再添加一行代码来处理不透明度：filter:alpha(opacity=数值） 数值的范围：0-100

### 10. CSS3渐变
渐变主要用来设置背景或制作三维图。

1. 线性渐变

``` js
background: linear-gradient(方向或角度, 颜色1 百分比, 颜色2 百分比, …);

```

> 方向：

to left:            从右向左渐变

to right:           从左向右渐变

to top:             从下向上渐变

to bottom:          从上向下渐变

to top left:        右下角向左上角渐变

to top right:       从左下角向右上角渐变

to bottom left:     从右上角向左下角渐变

to bottom right:    左上角向右下角渐变

> 角度：

比如45度角，应该表示为：45deg

> 颜色取值：

> 1. 表示颜色的单词
> 2. 16进制颜色
> 3. 表示颜色的函数（rgb()/rgba()/hsl()/hsla()…)

2. 径向渐变(沿半径方向渐变）
``` js
background: radial-gradient(形状 渐变大小 at 位置,颜色1 百分比, …, 颜色n 百分比);
```

> 形状：
>> ellipse:椭圆径向渐变（默认）
>> circle:圆径向渐变
>
> 渐变大小：
>> farthest-corner: 渐变的半径长度为从圆心到离圆心最远的角（默认）
>> closest-side: 渐变的半径长度为从圆心到离圆心最近的边
>> closest-corner: 渐变的半径长度为从圆心到离圆心最近的角
>> farthest-side: 渐变的半径长度为从圆心到离圆心最远的边
>
> 位置：
>> center:设置圆心在中心位置（默认）
>> top:设置圆心在顶部位置
>> bottom:设置圆心在底部位置
>> at 圆心橫坐标 圆心纵坐标: 设定圆心的位置在指定的（橫坐标，纵坐标）处

3. 文字渐变
``` js
background-image: 线性渐变或径向渐变;
```
> -webkit-background-clip: text;
>
> -webkit-text-fill-color: transparent;

### 11. box-sizing

允许你以某种方式定义某些元素，以适应指定的区域。

box-sizing: content-box/border-box （火狐和谷歌低版本需要厂商前缀）

## 按功能划分

按照功能分为下面几部分，即：

> 1. 选择器的拓展
> 2. 页面布局的加强
> 3. 元素修饰的加强
> 4. 开放字体的支持
> 5. 多终端的适配
> 6. 动画支持

### 1. 选择器的拓展
CSS3新增了许多可使用的选择器使得前端开发人员在选择页面元素时更加灵活。新增的选择器包含如下几个方面，

- 属性选择器
- 结构伪类选择器
- UI元素状态伪类选择器
- 目标伪类选择器
- 否定选择器
- 通用兄弟选择器

### 2. 页面布局的加强

#### 多列布局方式
CSS3中新增了相关的属性column-count和column-width来设定具体的多列布局样式。示例代码如下，
``` js
<style>
    div {
        -webkit-column-count: 2;
        -webkit-column-width: 100px;
    }
</style>
<div>
    blablablabla....
</div>
```

#### 可变更的盒模型
我们知道W3C的CSS2.1规范中，默认的盒模型在计算盒子的总大小的时候，元素的border和padding是被被加入到宽度和高度之中的。而IE系的老旧浏览器的行为恰恰与之相反。

CSS3规范提供了box-sizing属性并允许设置浏览器使用的盒模型。

简单来说box-sizing属性提供了content-box和border-box两种赋值来确定元素究竟使用哪一种盒模型。其中现代浏览器默认的取值是content-box，既符合W3C标准的盒模型。

#### 可伸缩的布局方式
CSS3引入了可以算是一种新的盒模型：弹性盒模型，该模型决定一个盒子在其他盒子中的分布方式以及如何处理可用的空间。

### 3. 元素修饰的加强
CSS3提供一系列属性来支持以前必须使用图片或者js操作才能实现的效果，大大的提升了页面展示效果的开发效率。

#### RGBA和透明度

#### 圆角支持

#### 多背景图片支持

#### 渐变效果支持

#### 阴影和反射效果

### 4. 开放字体的支持
CSS3提供@font-face特性为页面自定义字体的展示提供支持。通过@font-face你可以在页面中嵌入不同的自定义字体，为不同的元素应用不同的字体。

### 5. 多终端的适配
之前为了适配不同的设备（主要是不同设备的屏幕不一样），可能需要为不同设备准备不同的css文件。CSS3提供了更加方便的方式，通过媒体查询（media queries）可以让你为不同的设备基于它们的能力定义不同的样式。

比如，在可视区域小于480像素的时候，你可能想让网站的侧栏显示在主内容的下边，这样它就不应该浮动并显示在右侧了

``` js
#sidebar {   
    float: right;   
    display: inline; /* IE Double-Margin Bugfix */  
}   
@media all and (max-width:480px) {   
    #sidebar {   
        float: none;   
        clear: both;   
    }   
}
```

### 6. 动画支持
web开发中要在页面上实现动画有许多种途径。CSS3为我们提供了一系列方便的方法。在CSS3中，有如下三个关键字可以用来实现动画，

transition，意为过渡

transform，意为变换

animation，意为动画