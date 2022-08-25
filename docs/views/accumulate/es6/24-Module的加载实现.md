---
title: 24. Module 的加载实现
---

上一章介绍了模块的语法，本章介绍如何在浏览器和 Node.js 之中加载 ES6 模块，以及实际开发中经常遇到的一些问题（比如循环加载）。

## 浏览器加载
### 传统方法
HTML 网页中，浏览器通过 < script > 标签加载 JavaScript 脚本。

``` js
<!-- 页面内嵌的脚本 -->
<script type="application/javascript">
  // module code
</script>

<!-- 外部脚本 -->
<script type="application/javascript" src="path/to/myModule.js">
</script>
```

上面代码中，由于浏览器脚本的默认语言是 JavaScript，因此 type="application/javascript" 可以省略。

默认情况下，浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到 < script > 标签就会停下来，等到执行完脚本，再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。

如果脚本体积很大，下载和执行的时间就会很长，因此造成浏览器堵塞，用户会感觉到浏览器“卡死”了，没有任何响应。这显然是很不好的体验，所以浏览器允许脚本异步加载，下面就是两种异步加载的语法。

``` js
<script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>
```

上面代码中，< script > 标签打开 defer 或 async 属性，脚本就会异步加载。渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。

defer 与 async 的区别是：defer 要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，__defer 是“渲染完再执行”，async 是“下载完就执行”__。

::: warning
另外，如果有多个 defer 脚本，会按照它们在页面出现的顺序加载，而多个 async 脚本是不能保证加载顺序的。
:::

### 加载规则
浏览器加载 ES6 模块，也使用 < script > 标签，但是要加入 __type="module"__ 属性。

``` js
<script type="module" src="./foo.js"></script>
```

上面代码在网页中插入一个模块 foo.js，由于 type 属性设为 module，所以浏览器知道这是一个 ES6 模块。

浏览器对于带有 type="module" 的 < script > ，都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，__等同于打开了 < script > 标签的 defer 属性__。

``` js
<script type="module" src="./foo.js"></script>
<!-- 等同于 -->
<script type="module" src="./foo.js" defer></script>
```

如果网页有多个 < script type="module" >，它们会按照在页面出现的顺序依次执行。

< script > 标签的 async 属性也可以打开，这时只要加载完成，渲染引擎就会中断渲染立即执行。执行完成后，再恢复渲染。

``` js
<script type="module" src="./foo.js" async></script>
```

一旦使用了 async 属性，< script type="module" > 就不会按照在页面出现的顺序执行，而是只要该模块加载完成，就执行该模块。

ES6 模块也允许内嵌在网页中，语法行为与加载外部脚本完全一致。

``` js
<script type="module">
  import utils from "./utils.js";

  // other code
</script>
```

举例来说，jQuery 就支持模块加载。

``` js
<script type="module">
  import $ from "./jquery/src/jquery.js";
  $('#message').text('Hi from jQuery!');
</script>
```

对于外部的模块脚本（上例是foo.js），有几点需要注意。

- 代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。
- 模块脚本自动采用严格模式，不管有没有声明use strict。
- 模块之中，可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用export命令输出对外接口。
- 模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。
- 同一个模块如果加载多次，将只执行一次。

下面是一个示例模块。

``` js
import utils from 'https://example.com/js/utils.js';

const x = 1;

console.log(x === window.x); //false
console.log(this === undefined); // true
```

::: tip
利用顶层的 this 等于 undefined 这个语法点，可以侦测当前代码是否在 ES6 模块之中。
:::

``` js
const isNotModuleScript = this !== undefined;
```

## ES6 模块与 CommonJS 模块的差异
讨论 Node.js 加载 ES6 模块之前，必须了解 ES6 模块与 CommonJS 模块完全不同。

它们有两个重大差异。

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

第二个差异是因为 CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

下面重点解释第一个差异。

CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。请看下面这个模块文件 lib.js 的例子。

``` js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
```

上面代码输出内部变量 counter 和改写这个变量的内部方法 incCounter。然后，在 main.js 里面加载这个模块。

``` js
// main.js
var mod = require('./lib');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
```

上面代码说明，lib.js 模块加载以后，它的内部变化就影响不到输出的 mod.counter 了。这是因为 mod.counter 是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。

``` js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  get counter() {
    return counter
  },
  incCounter: incCounter,
};
```

上面代码中，输出的 counter 属性实际上是一个取值器函数。现在再执行 main.js ，就可以正确读取内部变量 counter 的变动了。

``` js
$ node main.js
3
4
```

ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的 import 有点像 Unix 系统的“符号连接”，原始值变了，import 加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

还是举上面的例子。

``` js
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
```

上面代码说明，ES6 模块输入的变量 counter 是活的，完全反应其所在模块 lib.js 内部的变化。

再举一个出现在 export 一节中的例子。

``` js
// m1.js
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);

// m2.js
import {foo} from './m1.js';
console.log(foo);
setTimeout(() => console.log(foo), 500);
```

上面代码中，m1.js 的变量 foo，在刚加载时等于 bar，过了 500 毫秒，又变为等于baz。

让我们看看，m2.js 能否正确读取这个变化。

``` js
$ babel-node m2.js

bar
baz
```

上面代码表明，ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。

由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。

``` js
// lib.js
export let obj = {};

// main.js
import { obj } from './lib';

obj.prop = 123; // OK
obj = {}; // TypeError
```

上面代码中，main.js 从 lib.js 输入变量 obj，可以对 obj 添加属性，但是重新赋值就会报错。因为变量 obj 指向的地址是只读的，不能重新赋值，这就好比 main.js 创造了一个名为 obj 的 const 变量。

最后，export 通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。

``` js
// mod.js
function C() {
  this.sum = 0;
  this.add = function () {
    this.sum += 1;
  };
  this.show = function () {
    console.log(this.sum);
  };
}

export let c = new C();
```

上面的脚本 mod.js，输出的是一个 C 的实例。不同的脚本加载这个模块，得到的都是同一个实例。

``` js
// x.js
import {c} from './mod';
c.add();

// y.js
import {c} from './mod';
c.show();

// main.js
import './x';
import './y';
```

现在执行 main.js，输出的是 1。

``` js
$ babel-node main.js
1
```

这就证明了 x.js 和 y.js 加载的都是 C 的同一个实例。

## Node.js 加载

### 概述
Node.js 对 ES6 模块的处理比较麻烦，因为它有自己的 CommonJS 模块格式，与 ES6 模块格式是不兼容的。目前的解决方案是，将两者分开，ES6 模块和 CommonJS 采用各自的加载方案。从 v13.2 版本开始，Node.js 已经默认打开了 ES6 模块支持。

Node.js 要求 ES6 模块采用 .mjs 后缀文件名。也就是说，只要脚本文件里面使用 import 或者 export 命令，那么就必须采用 .mjs 后缀名。Node.js 遇到 .mjs 文件，就认为它是 ES6 模块，默认启用严格模式，不必在每个模块文件顶部指定 "use strict" 。

如果不希望将后缀名改成 .mjs ，可以在项目的 package.json 文件中，指定 type 字段为 module。

``` js
{
   "type": "module"
}
```

一旦设置了以后，该目录里面的 JS 脚本，就被解释用 ES6 模块。

``` js
# 解释成 ES6 模块
$ node my-app.js
```

如果这时还要使用 CommonJS 模块，那么需要将 CommonJS 脚本的后缀名都改成 .cjs 。如果没有 type 字段，或者 type 字段为 commonjs ，则 .js 脚本会被解释成 CommonJS 模块。

总结为一句话：.mjs 文件总是以 ES6 模块加载，.cjs 文件总是以 CommonJS 模块加载，.js 文件的加载取决于 package.json 里面 type 字段的设置。

注意，ES6 模块与 CommonJS 模块尽量不要混用。require 命令不能加载 .mjs 文件，会报错，只有 import 命令才可以加载 .mjs 文件。反过来，.mjs 文件里面也不能使用 require 命令，必须使用 import。

### main 字段
package.json 文件有两个字段可以指定模块的入口文件：main 和 exports。比较简单的模块，可以只使用 main 字段，指定模块加载的入口文件。

``` js
// ./node_modules/es-module-package/package.json
{
  "type": "module",
  "main": "./src/index.js"
}
```

上面代码指定项目的入口脚本为 ./src/index.js ，它的格式为 ES6 模块。如果没有 type 字段，index.js 就会被解释为 CommonJS 模块。

然后，import命令就可以加载这个模块。

``` js
// ./my-app.mjs

import { something } from 'es-module-package';
// 实际加载的是 ./node_modules/es-module-package/src/index.js
```

上面代码中，运行该脚本以后，Node.js 就会到 ./node_modules 目录下面，寻找 es-module-package 模块，然后根据该模块 package.json 的 main 字段去执行入口文件。

这时，如果用 CommonJS 模块的 require() 命令去加载 es-module-package 模块会报错，因为 CommonJS 模块不能处理 export 命令。

### exports 字段
exports字段的优先级高于main字段。它有多种用法。

- （1）子目录别名

package.json文件的exports字段可以指定脚本或子目录的别名。

``` js
// ./node_modules/es-module-package/package.json
{
  "exports": {
    "./submodule": "./src/submodule.js"
  }
}
```

上面的代码指定 src/submodule.js 别名为 submodule ，然后就可以从别名加载这个文件。

``` js
import submodule from 'es-module-package/submodule';
// 加载 ./node_modules/es-module-package/src/submodule.js
```

下面是子目录别名的例子。

``` js
// ./node_modules/es-module-package/package.json
{
  "exports": {
    "./features/": "./src/features/"
  }
}

import feature from 'es-module-package/features/x.js';
// 加载 ./node_modules/es-module-package/src/features/x.js
```

如果没有指定别名，就不能用“ 模块 + 脚本名 ”这种形式加载脚本。

``` js
// 报错
import submodule from 'es-module-package/private-module.js';

// 不报错
import submodule from './node_modules/es-module-package/private-module.js';
```

- （2）main 的别名

exports 字段的别名如果是 . ，就代表模块的主入口，优先级高于 main 字段，并且可以直接简写成 exports 字段的值。

``` js
{
  "exports": {
    ".": "./main.js"
  }
}

// 等同于
{
  "exports": "./main.js"
}
```

由于 exports 字段只有支持 ES6 的 Node.js 才认识，所以可以用来兼容旧版本的  Node.js 。

``` js
{
  "main": "./main-legacy.cjs",
  "exports": {
    ".": "./main-modern.cjs"
  }
}
```

上面代码中，老版本的 Node.js （不支持 ES6 模块）的入口文件是 main-legacy.cjs ，新版本的 Node.js 的入口文件是 main-modern.cjs。

- （3）条件加载

利用.这个别名，可以为 ES6 模块和 CommonJS 指定不同的入口。目前，这个功能需要在 Node.js 运行的时候，打开 --experimental-conditional-exports 标志。

``` js
{
  "type": "module",
  "exports": {
    ".": {
      "require": "./main.cjs",
      "default": "./main.js"
    }
  }
}
```

上面代码中，别名 . 的 require 条件指定 require() 命令的入口文件（即 CommonJS 的入口），default 条件指定其他情况的入口（即 ES6 的入口）。

上面的写法可以简写如下。

``` js
{
  "exports": {
    "require": "./main.cjs",
    "default": "./main.js"
  }
}
```

注意，如果同时还有其他别名，就不能采用简写，否则或报错。

``` js
{
  // 报错
  "exports": {
    "./feature": "./lib/feature.js",
    "require": "./main.cjs",
    "default": "./main.js"
  }
}
```

### ES6 模块加载 CommonJS 模块
目前，一个模块同时支持 ES6 和 CommonJS 两种格式的常见方法是，package.json 文件的 main 字段指定 CommonJS 入口，给 Node.js 使用；module 字段指定 ES6 模块入口，给打包工具使用，因为 Node.js 不认识 module 字段。

有了上一节的条件加载以后，Node.js 本身就可以同时处理两种模块。

``` js
// ./node_modules/pkg/package.json
{
  "type": "module",
  "main": "./index.cjs",
  "exports": {
    "require": "./index.cjs",
    "default": "./wrapper.mjs"
  }
}
```

上面代码指定了 CommonJS 入口文件 index.cjs，下面是这个文件的代码。

``` js
// ./node_modules/pkg/index.cjs
exports.name = 'value';
```

然后，ES6 模块可以加载这个文件。

``` js
// ./node_modules/pkg/wrapper.mjs
import cjsModule from './index.cjs';
export const name = cjsModule.name;
```

注意，import 命令加载 CommonJS 模块，只能整体加载，不能只加载单一的输出项。

``` js
// 正确
import packageMain from 'commonjs-package';

// 报错
import { method } from 'commonjs-package';
```

还有一种变通的加载方法，就是使用 Node.js 内置的 module.createRequire() 方法。

``` js
// cjs.cjs
module.exports = 'cjs';

// esm.mjs
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const cjs = require('./cjs.cjs');
cjs === 'cjs'; // true
```

上面代码中，ES6 模块通过 module.createRequire() 方法可以加载 CommonJS 模块

### CommonJS 模块加载 ES6 模块
CommonJS 的 require 命令不能加载 ES6 模块，会报错，只能使用 import() 这个方法加载。

``` js
(async () => {
  await import('./my-app.mjs');
})();
```

上面代码可以在 CommonJS 模块中运行。

### Node.js 的内置模块
Node.js 的内置模块可以整体加载，也可以加载指定的输出项。

``` js
// 整体加载
import EventEmitter from 'events';
const e = new EventEmitter();

// 加载指定的输出项
import { readFile } from 'fs';
readFile('./foo.txt', (err, source) => {
  if (err) {
    console.error(err);
  } else {
    console.log(source);
  }
});
```

### 加载路径
ES6 模块的加载路径必须给出脚本的完整路径，不能省略脚本的后缀名。import 命令和 package.json 文件的 main 字段如果省略脚本的后缀名，会报错。

``` js
// ES6 模块中将报错
import { something } from './index';
```

为了与浏览器的 import 加载规则相同，Node.js 的 .mjs 文件支持 URL 路径。

``` js
import './foo.mjs?query=1'; // 加载 ./foo 传入参数 ?query=1
```

上面代码中，脚本路径带有参数 ?query=1 ，Node 会按 URL 规则解读。同一个脚本只要参数不同，就会被加载多次，并且保存成不同的缓存。由于这个原因，只要文件名中含有: 、%、#、? 等特殊字符，最好对这些字符进行转义。

目前，Node.js 的 import 命令只支持加载本地模块（file:协议）和 data: 协议，不支持加载远程模块。另外，脚本路径只支持相对路径，不支持绝对路径（即以 / 或 // 开头的路径）。

最后，Node 的import命令是异步加载，这一点与浏览器的处理方法相同。

### 内部变量

## 循环加载

### CommonJS 模块的加载原理
### CommonJS 模块的循环加载
### ES6 模块的循环加载