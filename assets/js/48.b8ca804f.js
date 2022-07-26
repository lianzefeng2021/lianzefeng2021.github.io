(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{391:function(e,t,a){"use strict";a.r(t);var v=a(14),r=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue2-生命周期钩子函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue2-生命周期钩子函数"}},[e._v("#")]),e._v(" vue2 生命周期钩子函数")]),e._v(" "),t("ul",[t("li",[e._v("生命周期钩子 (按照它们被调用的顺序)")])]),e._v(" "),t("p",[e._v("beforeCreate")]),e._v(" "),t("p",[e._v("created")]),e._v(" "),t("p",[e._v("beforeMount")]),e._v(" "),t("p",[e._v("mounted")]),e._v(" "),t("p",[e._v("beforeUpdate")]),e._v(" "),t("p",[e._v("updated")]),e._v(" "),t("p",[t("strong",[e._v("activated")])]),e._v(" "),t("p",[t("strong",[e._v("deactivated")])]),e._v(" "),t("p",[e._v("beforeDestroy")]),e._v(" "),t("p",[e._v("destroyed")]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"beforecreate-创建前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate-创建前"}},[e._v("#")]),e._v(" beforeCreate ( 创建前 )")]),e._v(" "),t("p",[e._v("vue实例创建前")]),e._v(" "),t("p",[e._v("在实例初始化之后，数据观测和事件配置之前被调用，此时组件的选项对象还未创建，el 和 data 并未初始化，因此无法访问methods， data， computed等上的方法和数据。")])]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"created-创建后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#created-创建后"}},[e._v("#")]),e._v(" created ( 创建后 ）")]),e._v(" "),t("p",[e._v("实例已经创建完成之后被调用，在这一步，实例已完成以下配置：数据观测、属性和方法的运算，watch/event事件回调，完成了data 数据的初始化，el没有。 然而，挂在阶段还没有开始, $el属性目前不可见，这是一个常用的生命周期，因为你可以调用methods中的方法，改变data中的数据，并且修改可以通过vue的响应式绑定体现在页面上，，获取computed中的计算属性等等，通常我们可以在这里对实例进行预处理，也有一些童鞋喜欢在这里发ajax请求，值得注意的是，这个周期中是没有什么方法来对实例化过程进行拦截的，因此假如有某些数据必须获取才允许进入页面的话，并不适合在这个方法发请求，建议在组件路由钩子beforeRouteEnter中完成")])]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"beforemount-挂载前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beforemount-挂载前"}},[e._v("#")]),e._v(" beforeMount ( 挂载前 )")]),e._v(" "),t("p",[e._v("挂在开始之前被调用，相关的render函数首次被调用（虚拟DOM），实例已完成以下的配置： 编译模板，把data里面的数据和模板生成html，完成了el和data 初始化，注意此时还没有挂在html到页面上。")])]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"mounted-挂载完成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mounted-挂载完成"}},[e._v("#")]),e._v(" mounted ( 挂载完成 )")]),e._v(" "),t("p",[e._v("挂在完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。")])]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"beforeupdate-更新前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate-更新前"}},[e._v("#")]),e._v(" beforeUpdate （ 更新前 ）")]),e._v(" "),t("p",[e._v("在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加地重渲染过程")])]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"updated-更新后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updated-更新后"}},[e._v("#")]),e._v(" updated（更新后）")]),e._v(" "),t("p",[e._v("在由于数据更改导致地虚拟DOM重新渲染和打补丁只会调用，调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作，然后在大多是情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环，该钩子在服务器端渲染期间不被调用")])]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"beforedestroy-销毁前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy-销毁前"}},[e._v("#")]),e._v(" beforeDestroy（销毁前）")]),e._v(" "),t("p",[e._v("在实例销毁之前调用，实例仍然完全可用，")]),e._v(" "),t("ol",[t("li",[e._v("这一步还可以用this来获取实例，")]),e._v(" "),t("li",[e._v("一般在这一步做一些重置的操作，比如清除掉组件中的定时器 和 监听的dom事件")])])]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"destroyed-销毁后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#destroyed-销毁后"}},[e._v("#")]),e._v(" destroyed（销毁后）")]),e._v(" "),t("p",[e._v("在实例销毁之后调用，调用后，所以的事件监听器会被移出，所有的子实例也会被销毁，该钩子在服务器端渲染期间不被调用")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("只有当组件在< keep-alive >内被切换，才会有 activated 和 deactivated 这两个钩子函数")])]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"activated"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#activated"}},[e._v("#")]),e._v(" activated")]),e._v(" "),t("p",[e._v("< keep-alive > 包裹的动态组件会被缓存，它是一个抽象组件，它自身不会渲染一个dom元素，也不会出现在父组件链中。当组件在 < keep-alive > 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。")])]),e._v(" "),t("blockquote",[t("p",[e._v("● 如< keep-alive >包裹两个组件：组件A和组件B。当第一次切换到组件A时，组件A的created和activated生命周期函数都会被执行，这时通过点击事件改变组件A的文字的颜色，在切换到组件B，这时组件A的deactivated的生命周期函数会被触发；在切换回组件A，组件A的activated生命周期函数会被触发，但是它的created生命周期函数不会被触发了，而且A组件的文字颜色也是我们之前设置过的。")])]),e._v(" "),t("blockquote",[t("h3",{attrs:{id:"deactivated"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deactivated"}},[e._v("#")]),e._v(" deactivated")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/lifecycle.png",alt:"lifecycle",title:"lifecycle"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);