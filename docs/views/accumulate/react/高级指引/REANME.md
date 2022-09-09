---
title: 高级指引
---

## 无障碍辅助功能

### 为什么我们需要无障碍辅助功能？
网络无障碍辅助功能（Accessibility，也被称为 a11y，因为以 A 开头，以 Y 结尾，中间一共 11 个字母）是一种可以帮助所有人获得服务的设计和创造。无障碍辅助功能是使得辅助技术正确解读网页的必要条件。

React 对于创建可访问网站有着全面的支持，而这通常是通过标准 HTML 技术实现的。

### 标准和指南
#### WCAG

[网络内容无障碍指南（Web Content Accessibility Guidelines，WCAG）](https://www.w3.org/WAI/intro/wcag) 为开发无障碍网站提供了指南。

下面的 WCAG 检查表提供了一些概览：
- [Wuhcag 提供的 WCAG 检查表（WCAG checklist from Wuhcag）](https://www.wuhcag.com/wcag-checklist/)
- [WebAIM 提供的 WCAG 检查表（WCAG checklist from WebAIM）](https://webaim.org/standards/wcag/checklist)
- [A11Y Project 提供的检查表（Checklist from The A11Y Project）](https://a11yproject.com/checklist.html)

#### WAI-ARIA
[网络无障碍倡议 - 无障碍互联网应用（Web Accessibility Initiative - Accessible Rich Internet Applications）](https://www.w3.org/WAI/intro/aria) 文件包含了创建完全无障碍 JavaScript 部件所需要的技术。

注意：JSX 支持所有 aria-* HTML 属性。虽然大多数 React 的 DOM 变量和属性命名都使用驼峰命名（camelCased），但 aria-* 应该像其在 HTML 中一样使用带连字符的命名法（也叫诸如 hyphen-cased，kebab-case，lisp-case)。

``` js
<input
  type="text"
  aria-label={labelText}
  aria-required="true"
  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>
```

## 语义化的 HTML
语义化的 HTML 是无障碍辅助功能网络应用的基础。 利用多种 HTML 元素来强化您网站中的信息通常可以使您直接获得无障碍辅助功能。

- [MDN 的 HTML 元素参照（MDN HTML elements reference）](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

有时，语义化的 HTML 会被破坏。比如当在 JSX 中使用 <div> 元素来实现 React 代码功能的时候，又或是在使用列表（<ol>， <ul> 和 <dl>）和 HTML <table> 时。 在这种情况下，我们应该使用 [React Fragments](https://react.docschina.org/docs/fragments.html) 来组合各个组件。

举个例子，

``` js
import React, { Fragment } from 'react';

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}
```

和其他的元素一样，你可以把一系列的对象映射到一个 fragment 的数组中。

``` js
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Fragments should also have a `key` prop when mapping collections
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
```

当你不需要在 fragment 标签中添加任何 prop 且你的工具支持的时候，你可以使用 [短语法](https://react.docschina.org/docs/fragments.html#short-syntax)：

``` js
function ListItem({ item }) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}
```

更多信息请参见 [Fragments 文档](https://react.docschina.org/docs/fragments.html)。

### 无障碍表单
#### 标记
所有的 HTML 表单控制，例如 <input> 和 <textarea> ，都需要被标注来实现无障碍辅助功能。我们需要提供屏幕朗读器以解释性标注。