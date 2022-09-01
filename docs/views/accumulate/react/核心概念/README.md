---
title: 核心概念
---

## 1. Hello Word
最简易的 React 示例如下：

``` js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

它将在页面上展示一个 “Hello, world!” 的标题。

[在 CodePen 上尝试](https://react.docschina.org/redirect-to-codepen/hello-world)

__如何阅读本指南__
在本指南中，我们将研究 React 应用程序的组成部分：元素和组件。一旦你掌握了它们，便可以使用这些可复用的小片段组成复杂的应用。

__预备知识__
React 是一个 JavaScript 库，所以我们假设你对 JavaScript 语言已有基本的了解。如果你对自己的基础不自信，我们推荐[通过 JavaScript 教程](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)检查你的基础知识储备水平，使得你能够无压力的阅读本指南。这可能会花费你 30 分钟到 1 个小时的时间，但这样做的好处是你不会觉得同时在学习 React 和 JavaScript。

::: tip
注意

本指南的示例中偶尔会使用一些 JavaScript 新语法。如果你在过去几年中并没有使用过 JavaScript，大多数情况下[这三点](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c)应该能帮到你。
:::

## 2. JSX 简介
考虑如下变量声明：

``` js
const element = <h1>Hello, world!</h1>;
```

这个有趣的 标签语法 既不是 字符串 也不是 HTML。

它被称为 __JSX__，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。

JSX 可以生成 React “元素”。我们将在下一章节中探讨如何将这些元素渲染为 DOM。下面我们看下学习 JSX 所需的基础知识。

### 为什么使用 JSX？
React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

React 并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现 __关注点分离__。我们将在后面章节中深入学习 __组件__。如果你还没有适应在 JS 中使用标记语言，这个会议讨论应该可以说服你。

React 不强制要求使用 JSX，但是大多数人发现，在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用。它还可以使 React 显示更多有用的错误和警告消息。

搞清楚这个问题后，我们就开始学习 JSX 吧！

### 在 JSX 中嵌入表达式
在下面的例子中，我们声明了一个名为 name 的变量，然后在 JSX 中使用它，并将它包裹在大括号中：

``` js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

在 JSX 语法中，你可以在大括号内放置任何有效的 __JavaScript 表达式__。例如，2 + 2，user.firstName 或 formatName(user) 都是有效的 JavaScript 表达式。

在下面的示例中，我们将调用 JavaScript 函数 formatName(user) 的结果，并将结果嵌入到 < h1> 元素中。

``` js
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

为了便于阅读，我们会将 JSX 拆分为多行。同时，我们建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到 __自动插入分号__ 陷阱。

### JSX 也是一个表达式
在编译之后，__JSX 表达式__ 会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。

也就是说，你可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：

``` js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### JSX 特定属性
你可以通过使用引号，来将属性值指定为字符串字面量：

``` js
const element = <div tabIndex="0"></div>;
```

也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：

``` js
const element = <img src={user.avatarUrl}></img>;
```

在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。

::: tip
警告：

因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。
:::

### 使用 JSX 指定子元素
假如一个标签里面没有内容，你可以使用 /> 来闭合标签，就像 XML 语法一样：

``` js
const element = <img src={user.avatarUrl} />;
```

JSX 标签里能够包含很多子元素:

``` js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX 防止注入攻击
你可以安全地在 JSX 当中插入用户输入内容：

``` js
const title = response.potentiallyMaliciousInput;
// 直接使用是安全的：
const element = <h1>{title}</h1>;
```

React DOM 在渲染所有输入内容之前，__默认会进行转义__。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 __XSS（cross-site-scripting, 跨站脚本）__ 攻击。

### JSX 表示对象
Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。

以下两种示例代码完全等效：

``` js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

``` js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：

``` js
// 注意：这是简化过的结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。

我们将在下一章节中探讨如何将 React 元素渲染为 DOM。

::: js
提示：

我们推荐在你使用的编辑器中，使用 [“Babel” 提供的语言定义](https://babeljs.io/docs/editors)，来正确地高亮显示 ES6 和 JSX 代码。本网站使用与其兼容的[ Oceanic Next ](https://github.com/voronianski/oceanic-next-color-scheme/)配色方案。
:::

## 3. 元素渲染
> 元素是构成 React 应用的最小砖块。

元素描述了你在屏幕上想看到的内容。

``` js
const element = <h1>Hello, world</h1>;
```

与浏览器的 DOM 元素不同，React 元素是 __创建开销极小的普通对象__。React DOM 会负责更新 DOM 来与 React 元素保持一致。

::: tip
注意：

你可能会将元素与另一个被熟知的概念——“组件”混淆起来。我们会在下一个章节介绍组件。组件是由元素构成的。我们强烈建议你不要觉得繁琐而跳过本章节，应当深入阅读这一章节。
:::

### 将一个元素渲染为 DOM
假设你的 HTML 文件某处有一个 < div >：

``` js
<div id="root"></div>
```

我们将其称为“根” DOM 节点，因为该节点内的所有内容都将由 React DOM 管理。

仅使用 React 构建的应用通常只有单一的根 DOM 节点。如果你在将 React 集成进一个已有应用，那么你可以在应用中包含任意多的独立根 DOM 节点。

想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 __ReactDOM.render()__：

``` js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

页面上会展示出 “Hello, world”。

### 更新已渲染的元素
React 元素是 __不可变对象__。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。

根据我们已有的知识，更新 UI 唯一的方式是创建一个全新的元素，并将其传入 ReactDOM.render()。

考虑一个计时器的例子：

``` js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

这个例子会在 setInterval() 回调函数，每秒都调用 __ReactDOM.render()__。

::: tip
注意：

在实践中，大多数 React 应用只会调用一次 ReactDOM.render()。在下一个章节，我们将学习如何将这些代码封装到 __有状态组件__ 中。

我们建议你不要跳跃着阅读，因为每个话题都是紧密联系的。
:::

### React 只更新它需要更新的部分
React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。

你可以使用浏览器的检查元素工具查看上一个例子来确认这一点。

![定时器图片](https://react.docschina.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif)

尽管每一秒我们都会新建一个描述整个 UI 树的元素，React DOM 只会更新实际改变了的内容，也就是例子中的文本节点。

根据我们的经验，考虑 UI 在任意给定时刻的状态，而不是随时间变化的过程，能够消灭一整类的 bug。

## 4. 组件 & Props
> 组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。本指南旨在介绍 __组件__ 的相关理念。你可以[参考详细组件 API](https://react.docschina.org/docs/react-component.html)。

组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

### 函数组件与 class 组件
定义组件最简单的方式就是编写 JavaScript 函数：

``` js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为 __“函数组件”__，因为它本质上就是 JavaScript 函数。

你同时还可以使用 [ES6 的 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 来定义组件：

``` js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

上述两个组件在 React 里是等效的。

我们将在下一章节中讨论关于 __函数组件__ 和 __class 组件__ 的额外特性。

### 渲染组件
之前，我们遇到的 React 元素都只是 DOM 标签：

``` js
const element = <div />;
```

不过，React 元素也可以是 __用户自定义的组件__：

``` js
const element = <Welcome name="Sara" />;
```

当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。

例如，这段代码会在页面上渲染 “Hello, Sara”：

``` js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

让我们来回顾一下这个例子中发生了什么：

1. 我们调用 ReactDOM.render() 函数，并传入 <Welcome name="Sara" /> 作为参数。
2. React 调用 Welcome 组件，并将 {name: 'Sara'} 作为 props 传入。
3. Welcome 组件将 <h1>Hello, Sara</h1> 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 <h1>Hello, Sara</h1>。

::: tip
注意： 组件名称必须以大写字母开头。

React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。

你可以在[深入 JSX](https://react.docschina.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)中了解更多关于此规范的原因。
:::

### 组合组件
组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示。

例如，我们可以创建一个可以多次渲染 Welcome 组件的 App 组件：

``` js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

::: warning
警告：
"Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"

版本v18.2.0
但教程可能未及时更新
:::

通常来说，每个新的 React 应用程序的顶层组件都是 App 组件。但是，如果你将 React 集成到现有的应用程序中，你可能需要使用像 Button 这样的小组件，并自下而上地将这类组件逐步应用到视图层的每一处。

### 提取组件
将组件拆分为更小的组件。

例如，参考如下 Comment 组件：

``` js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

该组件用于描述一个社交媒体网站上的评论功能，它接收 author（对象），text （字符串）以及 date（日期）作为 props。

该组件由于嵌套的关系，变得难以维护，且很难复用它的各个部分。因此，让我们从中提取一些组件出来。

首先，我们将提取 Avatar 组件：

``` js
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

Avatar 不需知道它在 Comment 组件内部是如何渲染的。因此，我们给它的 props 起了一个更通用的名字：user，而不是 author。

::: tip
我们建议从 __组件自身的角度__ 命名 props，而不是依赖于调用组件的上下文命名。
:::

::: warning
那我有一个疑问，props中只有author没有user，怎么取到想要的值阿...  命名都不一样了
将 其 解构赋值？
user={props.author}
:::

我们现在针对 Comment 做些微小调整：

``` js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} /> // Avatar components is here
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

接下来，我们将提取 UserInfo 组件，该组件在用户名旁渲染 Avatar 组件：

``` js
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

进一步简化 Comment 组件：

``` js
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

最初看上去，提取组件可能是一件繁重的工作，但是，在大型应用中，构建可复用组件库是完全值得的。根据经验来看，如果 UI 中有一部分被多次使用（Button，Panel，Avatar），或者组件本身就足够复杂（App，FeedStory，Comment），那么它就是一个可复用组件的候选项。

### Props 的只读性
组件无论是使用 函数声明 还是通过 class 声明，都决不能修改自身的 props。来看下这个 sum 函数：

``` js
function sum(a, b) {
  return a + b;
}
```

这样的函数被称为 __“纯函数”__，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。

相反，下面这个函数则不是纯函数，因为它更改了自己的入参：

``` js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React 非常灵活，但它也有一个严格的规则：

__所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。__

当然，应用程序的 UI 是动态的，并会伴随着时间的推移而变化。在下一章节中，我们将介绍一种新的概念，称之为 __“state”__。在不违反上述规则的情况下，state 允许 React 组件随用户操作、网络响应或者其他变化而动态更改输出内容。

## 5. State & 生命周期
本页面介绍了 React 组件中 state 和生命周期的概念。你可以查阅[详细的组件 API 参考文档](https://react.docschina.org/docs/react-component.html)。

请参考前一章节中时钟的例子。在 __元素渲染__ 章节中，我们只了解了一种更新 UI 界面的方法。通过调用 __ReactDOM.render()__ 来修改我们想要渲染的元素：

``` js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

在本章节中，我们将学习如何封装真正可复用的 Clock 组件。它将设置自己的计时器并每秒更新一次。

我们可以从封装时钟的外观开始：

``` js
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

然而，它忽略了一个关键的技术细节：Clock 组件需要设置一个计时器，并且需要每秒更新 UI。

理想情况下，我们希望只编写一次代码，便可以让 Clock 组件自我更新：

``` js
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

我们需要在 Clock 组件中添加 “state” 来实现这个功能。

::: tip
__State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。__
:::

### 将函数组件转换成 class 组件
通过以下五步将 Clock 的函数组件转成 class 组件：

1. 创建一个同名的 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)，并且继承于 React.Component。
2. 添加一个空的 render() 方法。
3. 将函数体移动到 render() 方法之中。
4. 在 render() 方法中使用 this.props 替换 props。
5. 删除剩余的空函数声明。

``` js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

现在 Clock 组件被定义为 class，而不是函数。

每次组件更新时 render 方法都会被调用，但只要在相同的 DOM 节点中渲染 < Clock /> ，就仅有一个 Clock 组件的 class 实例被创建使用。这就使得我们可以使用如 state 或生命周期方法等很多其他特性。

### 向 class 组件中添加局部的 state
我们通过以下三步将 date 从 props 移动到 state 中：

1. 把 render() 方法中的 this.props.date 替换成 this.state.date ：

``` js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2> // 这里产生替换
      </div>
    );
  }
}
```

2. 添加一个 [class 构造函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor)，然后在该函数中为 this.state 赋初值：

``` js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

通过以下方式将 props 传递到父类的构造函数中：

``` js
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```

Class 组件应该始终使用 props 参数来调用父类的构造函数。

3. 移除 <Clock /> 元素中的 date 属性：

``` js
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

我们之后会将计时器相关的代码添加到组件中。

代码如下：

``` js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

接下来，我们会设置 Clock 的计时器并每秒更新它。

### 将生命周期方法添加到 Class 中
在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。

当 Clock 组件第一次被渲染到 DOM 中的时候，就为其[设置一个计时器](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)。这在 React 中被称为 __“挂载（mount）”__。

同时，当 DOM 中 Clock 组件被删除的时候，应该[清除计时器](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval)。这在 React 中被称为 __“卸载（unmount）”__。

我们可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：

``` js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

这些方法叫做 __“生命周期方法”__。

__componentDidMount() 方法会在组件 已经 被渲染到 DOM 中 后 运行，所以，最好在这里设置计时器：__

``` js
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```

接下来把计时器的 ID 保存在 this 之中（this.timerID）。

尽管 this.props 和 this.state 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段。

我们会在 componentWillUnmount() 生命周期方法中清除计时器：

``` js
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

最后，我们会实现一个叫 tick() 的方法，Clock 组件每秒都会调用它。

__使用 this.setState() 来时刻更新组件 state：__

``` js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
///////////////////  在这里 更新 数据 的 方法
  tick() {
    this.setState({
      date: new Date()
    });
  }
///////////////////
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

现在时钟每秒都会刷新。

让我们来快速概括一下发生了什么和这些方法的调用顺序：

1. 当 < Clock /> 被传给 ReactDOM.render()的时候，React 会调用 Clock 组件的构造函数。因为 Clock 需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化 this.state。我们会在之后更新 state。
2. 之后 React 会调用组件的 render() 方法。这就是 React 确定该在页面上展示什么的方式。然后 React 更新 DOM 来匹配 Clock 渲染的输出。
3. 当 Clock 的输出被插入到 DOM 中后，React 就会调用 ComponentDidMount() 生命周期方法。在这个方法中，Clock 组件向浏览器请求设置一个计时器来每秒调用一次组件的 tick() 方法。
4. 浏览器每秒都会调用一次 tick() 方法。 在这方法之中，Clock 组件会通过调用 setState() 来计划进行一次 UI 更新。得益于 setState() 的调用，React 能够知道 state 已经改变了，然后会重新调用 render() 方法来确定页面上该显示什么。这一次，render() 方法中的 this.state.date 就不一样了，如此以来就会渲染输出更新过的时间。React 也会相应的更新 DOM。
5. 一旦 Clock 组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法，这样计时器就停止了。

### 正确地使用 State
关于 setState() 你应该了解三件事：

- 1. 不要直接修改 State
例如，此代码不会重新渲染组件：

``` js
// Wrong
this.state.comment = 'Hello';
```

而是应该使用 setState():

``` js
// Correct
this.setState({comment: 'Hello'});
```

__构造函数__ 是唯一可以给 this.state 赋值的地方：

__State 的更新可能是异步的__

出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。

::: tip
因为 this.props 和 this.state 可能会 __异步更新__，所以你不要依赖他们的值来更新下一个状态。
:::

例如，此代码可能会无法更新计数器：

``` js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

要解决这个问题，可以让 setState() 接收一个 __函数__ 而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

``` js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

上面使用了箭头函数，不过使用普通的函数也同样可以：

``` js
// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

__State 的更新会被合并__

当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。

例如，你的 state 包含几个独立的变量：

``` js
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

然后你可以分别调用 setState() 来单独地更新它们：

``` js
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments。

### 数据是向下流动的
不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。

这就是为什么称 __state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。__

组件可以选择把它的 state 作为 props 向下传递到它的子组件中：

``` js
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```

这对于自定义组件同样适用：

``` js
<FormattedDate date={this.state.date} />
```

FormattedDate 组件会在其 props 中接收参数 date，但是组件本身无法知道它是来自于 Clock 的 state，或是 Clock 的 props，还是手动输入的：

``` js
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。

如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。

为了证明每个组件都是真正独立的，我们可以创建一个渲染三个 Clock 的 App 组件：

``` js
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

每个 Clock 组件都会单独设置它自己的计时器并且更新它。

在 React 应用中，组件是有状态组件还是无状态组件属于组件实现的细节，它可能会随着时间的推移而改变。你可以在有状态的组件中使用无状态的组件，反之亦然。

## 6. 事件处理
> React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

例如，传统的 HTML：

``` js
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

在 React 中略微不同：

``` js
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

在 React 中另一个 __不同点__ 是你不能通过返回 false 的方式阻止默认行为。你必须 __显式__ 的使用 preventDefault 。例如，传统的 HTML 中阻止链接默认打开一个新页面，你可以这样写：

``` js
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

在 React 中，可能是这样的：

``` js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

在这里，e 是一个合成事件。React 根据 [W3C 规范](https://www.w3.org/TR/DOM-Level-3-Events/) 来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。如果想了解更多，请查看 [SyntheticEvent](https://react.docschina.org/docs/events.html) 参考指南。

使用 React 时，你一般 不需要 使用 addEventListener 为已创建的 DOM 元素添加监听器。事实上，你只需要在该元素初始渲染的时候添加监听器即可。

当你使用 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。例如，下面的 Toggle 组件会渲染一个让用户切换开关状态的按钮：

``` js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定 this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。__(上代码用.bind(this)绑定了上下文的this)__

这并不是 React 特有的行为；这其实与 JavaScript 函数工作原理有关。通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。

如果觉得使用 bind 很麻烦，这里有两种方式可以解决。如果你正在使用实验性的 public class fields 语法，你可以使用 class fields 正确的绑定回调函数：

``` js
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

[Create React App](https://github.com/facebookincubator/create-react-app) 默认启用此语法。

如果你没有使用 class fields 语法，你可以在回调中使用[箭头函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)：

``` js
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

此语法问题在于每次渲染 LoggingButton 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。

### 向事件处理程序传递参数
在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 id 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：

``` js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过[箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)和 [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) 来实现。

在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。

## 7. 条件渲染
在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。

React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 if 或者条件运算符去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI。

观察这两个组件:

``` js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

再创建一个 Greeting 组件，它会根据用户是否登录来决定显示上面的哪一个组件。

``` js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

这个示例根据 isLoggedIn 的值来渲染不同的问候语。

### 元素变量
你可以使用变量来储存元素。 它可以帮助你有条件地渲染组件的一部分，而其他的渲染部分并不会因此而改变。

观察这两个组件，它们分别代表了注销和登录按钮：

``` js
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```

在下面的示例中，我们将创建一个名叫 LoginControl 的[有状态的组件](https://react.docschina.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)。

它将根据当前的状态来渲染 <LoginButton /> 或者 <LogoutButton />。同时它还会渲染上一个示例中的 <Greeting />。

``` js
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```