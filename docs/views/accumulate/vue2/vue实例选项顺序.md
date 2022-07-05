# vue实例/选项书写顺序
1. 副作用 (触发组件外的影响)

- el

2. 全局感知 (要求组件以外的知识)

- name
- parent

3. 组件类型 (更改组件的类型)

- functional

4. 模板修改器 (改变模板的编译方式)

- delimiters
- comments

5. 模板依赖 (模板内使用的资源)

- components
- directives
- filters

6. 组合 (向选项里合并 property)

- extends
- mixins

7. 接口 (组件的接口)

- inheritAttrs
- model
- props/propsData

8. 本地状态 (本地的响应式 property)

- data
- computed

9. 事件 (通过响应式事件触发的回调)

- watch
- 生命周期钩子 (按照它们被调用的顺序)
- - beforeCreate
- - created
- - beforeMount
- - mounted
- - beforeUpdate
- - updated
- - activated
- - deactivated
- - beforeDestroy
- - destroyed

10. 非响应式的 property (不依赖响应系统的实例 property)

- methods

11. 渲染 (组件输出的声明式描述)

- template/render
- renderError