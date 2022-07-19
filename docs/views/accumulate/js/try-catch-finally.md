---
title: try-catch-finally
---

> try-catch-finally

```js
try {

} catch(e) {
    console.error(e)
} finally {

}
```

> try {} 尝试执行 {} 代码块中的代码，常用于异步请求中
>
> catch (e) {} 当执行代码出现错误时，立即终止执行，并执行 catch 函数块，抛出错误
>
> finally {} 无论 try {} 代码块执行成功还是失败，最后执行一次 finally {} 函数块


> why to use?
>
> try/catch/finally use to deal the error which may cause in code
> 
> 之所以需要它是因为当执行 JavaScritp 发生错误时，会停止执行接下来的程序，出现的异常会导致程序崩溃。
>
> 所以使用 try/catch/finally 来处理错误对以后项目的维护很重要。

> how to use?
> 1. try 语句定义所执行的进行错误测试的代码。如果 try 里面没有抛出异常，catch 将被跳过。
> 2. catch 语句定义当 try 语句发生错误时，捕获该错误并对错误进行处理。只有当 try 抛出了错误，才会执行。
> 3. finally 语句无论前面是否有异常都会执行。
>
> 当使用的时候，try 语句是必须的；catch(err) 里面的参数是必须的； catch 和 finally 都是可选的。 也就是以下三种形式
>> 1. try...catch
>> 2. try...finally
>> 3. try...catch..finally

> throw 与 Error对象
>> throw
>>
>> 我们可以通过 throw 语句产生错误并自定义抛出的异常
>> ```js
>> throw 'error!';
>> 
>> throw false;
>> ```
>> 例如，以下语句限制了 input 的形式
```js
var input = 1314;
try {
  if(input == '') throw "请您输入！";
  if(isNaN(input)) throw "请输入数字！";
  if(input <= 0) throw "请输入大于0的数！"
} catch(err) {
  alert(err);
}
```
>> 
>> 

> throw 与 try/catch/finally
> 我们把外层的 try 块叫做"outer"块，把内层的称为"inner"块。如下
```js
// "outer块"
try {
  // "inner块"
  try {
    throw "error1";
  } catch(err) {
    console.log('inner:' + err);
    throw "error2";
  } 
} catch(err) {
  console.log("outer:" + err);
}
/* 输出
inner:error1
outer:error2
*/
```
> 最后的输出结果说明，抛出的异常只会被离它最近的 catch 捕获。而且，"inner" 层抛出的异常，"outer" 外层同样可以捕获到。

> throw 与 Error 对象
>> throw new Error("error!")


> return 与 try/catch/finally
>> 我们都知道，在一个函数中，一旦 return 出现后，后面的语句就不会再执行了。那如果在 try/catch/finally 里出现 return 会怎么样呢？
>>
>> 无论是否出现异常，又或者前面的 try/catch 里面有 return，finally 里面的语句始终会执行

```js
try {
  return "hello";
} finally {
  console.log("finally");
}
/*输出
finally
*/
```

> 若 try/catch/finally 里面提前出现了 return ，则该代码块里后面的部分都不会执行

```js
const f = () => {
  try {
    return "hello";
    console.log("try");
  } finally {
    return "hello";
    console.log("finally");
  }
}
f();
//无输出
```

> 若把 return 写入到了函数的 finally 里面，则最终函数（整个try/catch/finally）的返回值（或者抛出的异常）将是 finally 里面返回的值，即使前面 try/catch 出现了 retrun

```js
const func = () => {
  try {
    try {
      throw new Error("ERROR!");
    } catch(err) {
      console.log(err.message);
      throw new Error("error from inner")
    } finally {
      return "finally";
    } 
  } catch(err) {
   console.log(err.message); // 未捕获到异常，此处不输出
  }
};
func();
/* output
ERROR!
'finally'
*/
```

> 若把上面的 return "finally" 注释掉，则将会输出 error from inner。
>
> 这告诫我们 不要轻易在 finally 里面写 return ，否则会覆盖前面返回的函数值甚至是抛出的错误

::: tip
https://zhuanlan.zhihu.com/p/112574964
:::

``` js
const whoami = () => {
  try {
    try {
      return '  ';
    } catch(_) {
      return '  ';
    } finally {
      return '  ';
    }
    throw '  ';
  } catch (_) {
    return '  ';
  }
}
whoami();
// '  '
```