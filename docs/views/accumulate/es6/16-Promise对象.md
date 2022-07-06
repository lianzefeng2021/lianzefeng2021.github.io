# 16.Promise对象

## Promise的含义
> Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。
>
> 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
> 
> Promise对象有以下两个特点。
> 1. 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
> 
> 2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
> 
> 注意，为了行文方便，本章后面的resolved统一只指fulfilled状态，不包含rejected状态。
> 
> 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。
> 
> Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）
> 
> 如果某些事件不断地反复发生，一般来说，使用 Stream 模式是比部署Promise更好的选择。
> 


## Promise.resolve()
> 有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。

```js
const jsPromise = Promise.resolve($.ajax('/whatever.json'));
```

> 上面代码将 jQuery 生成的deferred对象，转为一个新的 Promise 对象。

> Promise.resolve()等价于下面的写法。

```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```

> Promise.resolve方法的参数分成四种情况。

> - 1. 参数是一个 Promise 实例
> 如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
> 
> - 2. 参数是一个thenable对象
> thenable对象指的是具有then方法的对象，比如下面这个对象。
> 
```js
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
```
> Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
```js
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value);  // 42
});
```
> 上面代码中，thenable对象的then方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then方法指定的回调函数，输出 42。

> - 3. 参数不是具有then方法的对象，或根本就不是对象

> 如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。

```js
const p = Promise.resolve('Hello');
p.then(function (s){
  console.log(s)
});
// Hello
```
> 上面代码生成一个新的 Promise 对象的实例p。由于字符串Hello不属于异步操作（判断方法是字符串对象不具有 then 方法），返回 Promise 实例的状态从一生成就是resolved，所以回调函数会立即执行。Promise.resolve方法的参数，会同时传给回调函数。

> - 4. 不带有任何参数

> Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。

> 所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用Promise.resolve()方法。

```js
const p = Promise.resolve();
p.then(function () {
  // ...
});
```
> 上面代码的变量p就是一个 Promise 对象。

> 需要注意的是，立即resolve()的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。

```js
setTimeout(function () {
  console.log('three');
}, 0);
Promise.resolve().then(function () {
  console.log('two');
});
console.log('one');
// one
// two
// three
```

> 上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出。


## Promise.reject()
> Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。

```js
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))
p.then(null, function (s) {
  console.log(s)
});
// 出错了
```

> 上面代码生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。
>
> 注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。

```js
const thenable = {
  then(resolve, reject) {
    reject('出错了');
  }
};
Promise.reject(thenable)
.catch(e => {
  console.log(e === thenable)
})
// true
```
> 上面代码中，Promise.reject方法的参数是一个thenable对象，执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串，而是thenable对象。


## 应用
### 加载图片
> 我们可以将图片的加载写成一个Promise，一旦加载完成，Promise的状态就发生变化。
```js
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```
### Generator 函数与 Promise 的结合
> 使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个Promise对象。
```js
function getFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}
const g = function* () {
  try {
    const foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};
function run (generator) {
  const it = generator();
  function go(result) {
    if (result.done) return result.value;
    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }
  go(it.next());
}
run(g);
```
> 上面代码的 Generator 函数g之中，有一个异步操作getFoo，它返回的就是一个Promise对象。函数run用来处理这个Promise对象，并调用下一个next方法。

## Promise.try
> 实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。一般就会采用下面的写法。
```js
Promise.resolve().then(f)
```
> 上面的写法有一个缺点，就是如果f是同步函数，那么它会在本轮事件循环的末尾执行。
```js
const f = () => console.log('now');
Promise.resolve().then(f);
console.log('next');
// next
// now
```
> 上面代码中，函数f是同步的，但是用 Promise 包装了以后，就变成异步执行了。

> 那么有没有一种方法，让同步函数同步执行，异步函数异步执行，并且让它们具有统一的 API 呢？回答是可以的，并且还有两种写法。第一种写法是用async函数来写。

```js
const f = () => console.log('now');
(async () => f())();
console.log('next');
// now
// next
```
> 上面代码中，第二行是一个立即执行的匿名函数，会立即执行里面的async函数，因此如果f是同步的，就会得到同步的结果；如果f是异步的，就可以用then指定下一步，就像下面的写法。
```js
(async () => f())()
.then(...)
```
> 需要注意的是，async () => f()会吃掉f()抛出的错误。所以，如果想捕获错误，要使用promise.catch方法。
```js
(async () => f())()
.then(...)
.catch(...)
```
> 第二种写法是使用new Promise()。
```js
const f = () => console.log('now');
(
  () => new Promise(
    resolve => resolve(f())
  )
)();
console.log('next');
// now
// next
```
> 上面代码也是使用立即执行的匿名函数，执行new Promise()。这种情况下，同步函数也是同步执行的。

> 鉴于这是一个很常见的需求，所以现在有一个提案，提供Promise.try方法替代上面的写法。

```js
const f = () => console.log('now');
Promise.try(f);
console.log('next');
// now
// next
```
> 事实上，Promise.try存在已久，Promise 库Bluebird、Q和when，早就提供了这个方法。

> 由于Promise.try为所有操作提供了统一的处理机制，所以如果想用then方法管理流程，最好都用Promise.try包装一下。这样有许多好处，其中一点就是可以更好地管理异常。
```js
function getUsername(userId) {
  return database.users.get({id: userId})
  .then(function(user) {
    return user.name;
  });
}
```
> 上面代码中，database.users.get()返回一个 Promise 对象，如果抛出异步错误，可以用catch方法捕获，就像下面这样写。
```js
database.users.get({id: userId})
.then(...)
.catch(...)
```
> 但是database.users.get()可能还会抛出同步错误（比如数据库连接错误，具体要看实现方法），这时你就不得不用try...catch去捕获。
```js
try {
  database.users.get({id: userId})
  .then(...)
  .catch(...)
} catch (e) {
  // ...
}
```
> 上面这样的写法就很笨拙了，这时就可以统一用promise.catch()捕获所有同步和异步的错误。
```js
Promise.try(() => database.users.get({id: userId}))
  .then(...)
  .catch(...)
```
> 事实上，Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码块。


## 基本语法
> ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。

> 下面代码创造了一个Promise实例。
```js
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
> Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

> resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

> Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```
> then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。

> 下面是一个Promise对象的简单例子。

```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}
timeout(100).then((value) => {
  console.log(value);
});
```

> 上面代码中，timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。

> Promise 新建后就会立即执行。

```js
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});
promise.then(function() {
  console.log('resolved.');
});
console.log('Hi!');
// Promise
// Hi!
// resolved
```

> 上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。

> 下面是异步加载图片的例子。

```js
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };
    image.src = url;
  });
}
```
> 上面代码中，使用Promise包装了一个图片加载的异步操作。如果加载成功，就调用resolve方法，否则就调用reject方法。

> 下面是一个用Promise对象实现的 Ajax 操作的例子。

```js
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });
  return promise;
};
getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```

> 上面代码中，getJSON是对 XMLHttpRequest 对象的封装，用于发出一个针对 JSON 数据的 HTTP 请求，并且返回一个Promise对象。需要注意的是，在getJSON内部，resolve函数和reject函数调用时，都带有参数。

> 如果调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。reject函数的参数通常是Error对象的实例，表示抛出的错误；resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例，比如像下面这样。

```js
const p1 = new Promise(function (resolve, reject) {
  // ...
});
const p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
```

> 上面代码中，p1和p2都是 Promise 的实例，但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另一个异步操作。

> 注意，这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})
p2
  .then(result => console.log(result))
  .catch(error => console.log(error))
// Error: fail
```

> 上面代码中，p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。

> 注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。

```js
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
```
> 上面代码中，调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。

> 一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。所以，最好在它们前面加上return语句，这样就不会有意外。

```js
new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.log(2);
})
```
## Promise.prototype.then()

## Promise.prototype.catch()

## Promise.prototype.finally()

## Promise.all()

## Promise.race()

## Promise.allSettled()

## Promise.any()