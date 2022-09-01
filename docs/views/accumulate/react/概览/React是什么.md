---
title: 概览
---

## React 是什么？
React 是一个 __声明式，高效且灵活__ 的用于构建用户界面的 JavaScript 库。使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。

React 中拥有多种不同类型的组件，我们先从 React.Component 的子类开始介绍：

``` js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// 用法示例: <ShoppingList name="Mark" />
```

我们马上会讨论这些又奇怪、又像 XML 的标签。我们通过使用组件来告诉 React 我们希望在屏幕上看到什么。__当数据发生改变时，React 会高效地更新并重新渲染我们的组件。__

其中，ShoppingList 是一个 __React 组件类__，或者说是一个 __React 组件类型__。一个组件接收一些参数，我们把这些参数叫做 props（“props” 是 “properties” 简写），然后通过 render 方法返回需要展示在屏幕上的视图的层次结构。

render 方法的返回值 描述 了你希望在屏幕上看到的内容。React 根据描述，然后把结果展示出来。更具体地来说，render 返回了一个 __React 元素__，这是一种对渲染内容的轻量级描述。大多数的 React 开发者使用了一种名为 “JSX” 的特殊语法，JSX 可以让你更轻松地书写这些结构。语法 < div /> 会被编译成 React.createElement('div')。

> [JSX](https://zh-hans.reactjs.org/docs/introducing-jsx.html)

上述的代码等同于：

``` js
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```

如果你对这个比较感兴趣，可以查阅 [API 文档](https://react.docschina.org/docs/react-api.html#createelement)了解有关 createElement() 更详细的用法。但在接下来的教程中，我们并不会直接使用这个方法，而是继续使用 JSX。

在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个 __大括号__ 把表达式括起来。每一个 React 元素事实上都是一个 JavaScript 对象，你可以在你的程序中把它保存在变量中或者作为参数传递。

前文中的 ShoppingList 组件只会渲染一些内置的 DOM 组件，如< div />、< li />等。但是你也可以组合和渲染自定义的 React 组件。例如，你可以通过 < ShoppingList /> 来表示整个购物清单组件。每个组件都是封装好的，并且可以单独运行，这样你就可以通过组合简单的组件来构建复杂的 UI 界面。

## 阅读初始代码
如果你要在浏览器中学习该教程，在新标签页中打开初始代码。如果你在本地环境中学习开发该教程的内容，就在你的工程文件夹下打开 src/index.js（你已经在前面的环境准备中创建过这个文件了）。

这些初始代码是我们要开发的小游戏的基础代码。我们已经提供了 CSS 样式，这样你只需要关注使用 React 来开发这个 __井字棋__ 了。

通过阅读代码，你可以看到我们有三个 React 组件：

- Square
- Board
- Game

Square 组件渲染了一个单独的 < button>。Board 组件渲染了 9 个方块。Game 组件渲染了含有默认值的一个棋盘，我们一会儿会修改这些值。到目前为止还没有可以交互的组件。

## 通过 Props 传递数据
让我们试试水，尝试将数据从 Board 组件传递到 Square 组件中。

我们强烈建议你动手编写本教程中的代码，不要使用复制/粘贴。这将加深你对 React 的记忆和理解。

在 Board 组件的 renderSquare 方法中，我们将代码改写成下面这样，传递一个名为 value 的 prop 到 Square 当中：

``` js
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```

修改 Square 组件中的 render 方法，把 {/* TODO */} 替换为 {this.props.value}，以显示上文中传入的值：

``` js
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

