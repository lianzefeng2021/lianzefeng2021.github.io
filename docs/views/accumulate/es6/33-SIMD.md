---
title: 33. SIMD
---

## 概述
SIMD（发音/sim-dee/）是“Single Instruction/Multiple Data”的缩写，意为“单指令，多数据”。它是 JavaScript 操作 CPU 对应指令的接口，你可以看做这是一种不同的运算执行模式。与它相对的是 SISD（“Single Instruction/Single Data”），即“单指令，单数据”。

SIMD 的含义是使用一个指令，完成多个数据的运算；SISD 的含义是使用一个指令，完成单个数据的运算，这是 JavaScript 的默认运算模式。显而易见，SIMD 的执行效率要高于 SISD，所以被广泛用于 3D 图形运算、物理模拟等运算量超大的项目之中。

为了理解 SIMD，请看下面的例子。

``` js
var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];
var c = [];

c[0] = a[0] + b[0];
c[1] = a[1] + b[1];
c[2] = a[2] + b[2];
c[3] = a[3] + b[3];
c // Array[6, 8, 10, 12]
```

上面代码中，数组 a 和 b 的对应成员相加，结果放入数组 c。它的运算模式是依次处理每个数组成员，一共有四个数组成员，所以需要运算 4 次。

如果采用 SIMD 模式，只要运算一次就够了。

``` js
var a = SIMD.Float32x4(1, 2, 3, 4);
var b = SIMD.Float32x4(5, 6, 7, 8);
var c = SIMD.Float32x4.add(a, b); // Float32x4[6, 8, 10, 12]
```

上面代码之中，数组 a 和 b 的四个成员的各自相加，只用一条指令就完成了。因此，速度比上一种写法提高了 4 倍。

一次 SIMD 运算，可以处理多个数据，这些数据被称为“通道”（lane）。上面代码中，一次运算了四个数据，因此就是四个通道。

SIMD 通常用于矢量运算。

``` js
v + w = 〈v1, …, vn〉+ 〈w1, …, wn〉
      = 〈v1+w1, …, vn+wn〉
```

上面代码中，v 和 w 是两个多元矢量。它们的加运算，在 SIMD 下是一个指令、而不是 n 个指令完成的，这就大大提高了效率。这对于 3D 动画、图像处理、信号处理、数值处理、加密等运算是非常重要的。比如，Canvas 的 getImageData() 会将图像文件读成一个二进制数组，SIMD 就很适合对于这种数组的处理。

总的来说，SIMD 是数据并行处理（parallelism）的一种手段，可以加速一些运算密集型操作的速度。将来与 WebAssembly 结合以后，可以让 JavaScript 达到二进制代码的运行速度。

## 数据类型
SIMD 提供 12 种数据类型，总长度都是 128 个二进制位。

- Float32x4：四个 32 位浮点数
- Float64x2：两个 64 位浮点数
- Int32x4：四个 32 位整数
- Int16x8：八个 16 位整数
- Int8x16：十六个 8 位整数
- Uint32x4：四个无符号的 32 位整数
- Uint16x8：八个无符号的 16 位整数
- Uint8x16：十六个无符号的 8 位整数
- Bool32x4：四个 32 位布尔值
- Bool16x8：八个 16 位布尔值
- Bool8x16：十六个 8 位布尔值
- Bool64x2：两个 64 位布尔值

每种数据类型被 x 符号分隔成两部分，后面的部分表示通道数，前面的部分表示每个通道的宽度和类型。比如，Float32x4 就表示这个值有 4 个通道，每个通道是一个 32 位浮点数。

每个通道之中，可以放置四种数据。

- 浮点数（float，比如 1.0）
- 带符号的整数（Int，比如-1）
- 无符号的整数（Uint，比如 1）
- 布尔值（Bool，包含 true 和 false 两种值）

每种 SIMD 的数据类型都是一个函数方法，可以传入参数，生成对应的值。

``` js
var a = SIMD.Float32x4(1.0, 2.0, 3.0, 4.0);
```

上面代码中，变量 a 就是一个 128 位、包含四个 32 位浮点数（即四个通道）的值。

注意，这些数据类型方法都不是构造函数，前面不能加 new，否则会报错。

``` js
var v = new SIMD.Float32x4(0, 1, 2, 3);
// TypeError: SIMD.Float32x4 is not a constructor
```

## 静态方法：数学运算
每种数据类型都有一系列运算符，支持基本的数学运算。

### SIMD.%type%.abs()，SIMD.%type%.neg()
abs 方法接受一个 SIMD 值作为参数，将它的每个通道都转成绝对值，作为一个新的 SIMD 值返回。

``` js
var a = SIMD.Float32x4(-1, -2, 0, NaN);
SIMD.Float32x4.abs(a)
// Float32x4[1, 2, 0, NaN]
```

neg 方法接受一个 SIMD 值作为参数，将它的每个通道都转成负值，作为一个新的 SIMD 值返回。

``` js
var a = SIMD.Float32x4(-1, -2, 3, 0);
SIMD.Float32x4.neg(a)
// Float32x4[1, 2, -3, -0]

var b = SIMD.Float64x2(NaN, Infinity);
SIMD.Float64x2.neg(b)
// Float64x2[NaN, -Infinity]
```

### SIMD.%type%.add()，SIMD.%type%.addSaturate()
add 方法接受两个 SIMD 值作为参数，将它们的每个通道相加，作为一个新的 SIMD 值返回。

``` js
var a = SIMD.Float32x4(1.0, 2.0, 3.0, 4.0);
var b = SIMD.Float32x4(5.0, 10.0, 15.0, 20.0);
var c = SIMD.Float32x4.add(a, b);
```

上面代码中，经过加法运算，新的 SIMD 值为(6.0, 12.0, 18.0. 24.0)。

addSaturate 方法跟 add 方法的作用相同，都是两个通道相加，但是溢出的处理不一致。对于 add 方法，如果两个值相加发生溢出，溢出的二进制位会被丢弃; addSaturate 方法则是返回该数据类型的最大值。

``` js
var a = SIMD.Uint16x8(65533, 65534, 65535, 65535, 1, 1, 1, 1);
var b = SIMD.Uint16x8(1, 1, 1, 5000, 1, 1, 1, 1);
SIMD.Uint16x8.addSaturate(a, b);
// Uint16x8[65534, 65535, 65535, 65535, 2, 2, 2, 2]

var c = SIMD.Int16x8(32765, 32766, 32767, 32767, 1, 1, 1, 1);
var d = SIMD.Int16x8(1, 1, 1, 5000, 1, 1, 1, 1);
SIMD.Int16x8.addSaturate(c, d);
// Int16x8[32766, 32767, 32767, 32767, 2, 2, 2, 2]
```

上面代码中，Uint16 的最大值是 65535，Int16 的最大值是 32767。一旦发生溢出，就返回这两个值。

注意，Uint32x4 和 Int32x4 这两种数据类型没有 addSaturate 方法。

### SIMD.%type%.sub()，SIMD.%type%.subSaturate()
sub方法接受两个 SIMD 值作为参数，将它们的每个通道相减，作为一个新的 SIMD 值返回。

``` js
var a = SIMD.Float32x4(-1, -2, 3, 4);
var b = SIMD.Float32x4(3, 3, 3, 3);
SIMD.Float32x4.sub(a, b)
// Float32x4[-4, -5, 0, 1]
```

subSaturate 方法跟 sub 方法的作用相同，都是两个通道相减，但是溢出的处理不一致。对于 sub 方法，如果两个值相减发生溢出，溢出的二进制位会被丢弃; subSaturate 方法则是返回该数据类型的最小值。

``` js
var a = SIMD.Uint16x8(5, 1, 1, 1, 1, 1, 1, 1);
var b = SIMD.Uint16x8(10, 1, 1, 1, 1, 1, 1, 1);
SIMD.Uint16x8.subSaturate(a, b)
// Uint16x8[0, 0, 0, 0, 0, 0, 0, 0]

var c = SIMD.Int16x8(-100, 0, 0, 0, 0, 0, 0, 0);
var d = SIMD.Int16x8(32767, 0, 0, 0, 0, 0, 0, 0);
SIMD.Int16x8.subSaturate(c, d)
// Int16x8[-32768, 0, 0, 0, 0, 0, 0, 0, 0]
```

上面代码中，Uint16 的最小值是 0，Int16 的最小值是 -32678。一旦运算发生溢出，就返回最小值。

### SIMD.%type%.mul()，SIMD.%type%.div()，SIMD.%type%.sqrt()
mul 方法接受两个 SIMD 值作为参数，将它们的每个通道相乘，作为一个新的 SIMD 值返回。

``` js
var a = SIMD.Float32x4(-1, -2, 3, 4);
var b = SIMD.Float32x4(3, 3, 3, 3);
SIMD.Float32x4.mul(a, b)
// Float32x4[-3, -6, 9, 12]
```

div 方法接受两个 SIMD 值作为参数，将它们的每个通道相除，作为一个新的 SIMD 值返回。

``` js
var a = SIMD.Float32x4(2, 2, 2, 2);
var b = SIMD.Float32x4(4, 4, 4, 4);
SIMD.Float32x4.div(a, b)
// Float32x4[0.5, 0.5, 0.5, 0.5]
```

sqrt 方法接受一个 SIMD 值作为参数，求出每个通道的平方根，作为一个新的 SIMD 值返回。

``` js
var b = SIMD.Float64x2(4, 8);
SIMD.Float64x2.sqrt(b)
// Float64x2[2, 2.8284271247461903]
```

### SIMD.%FloatType%.reciprocalApproximation()，SIMD.%type%.reciprocalSqrtApproximation()
reciprocalApproximation 方法接受一个 SIMD 值作为参数，求出每个通道的倒数（1 / x），作为一个新的 SIMD 值返回。

``` js
var a = SIMD.Float32x4(1, 2, 3, 4);
SIMD.Float32x4.reciprocalApproximation(a);
// Float32x4[1, 0.5, 0.3333333432674408, 0.25]
```

reciprocalSqrtApproximation 方法接受一个 SIMD 值作为参数，求出每个通道的平方根的倒数（1 / (x^0.5)），作为一个新的 SIMD 值返回。

``` js
var a = SIMD.Float32x4(1, 2, 3, 4);
SIMD.Float32x4.reciprocalSqrtApproximation(a)
// Float32x4[1, 0.7071067690849304, 0.5773502588272095, 0.5]
```

注意，只有浮点数的数据类型才有这两个方法。

### SIMD.%IntegerType%.shiftLeftByScalar()
shiftLeftByScalar 方法接受一个 SIMD 值作为参数，然后将每个通道的值左移指定的位数，作为一个新的 SIMD 值返回。

``` js
var a = SIMD.Int32x4(1, 2, 4, 8);
SIMD.Int32x4.shiftLeftByScalar(a, 1);
// Int32x4[2, 4, 8, 16]
```

如果左移后，新的值超出了当前数据类型的位数，溢出的部分会被丢弃。

``` js
var ix4 = SIMD.Int32x4(1, 2, 3, 4);
var jx4 = SIMD.Int32x4.shiftLeftByScalar(ix4, 32);
// Int32x4[0, 0, 0, 0]
```

注意，只有整数的数据类型才有这个方法。

### SIMD.%IntegerType%.shiftRightByScalar()
shiftRightByScalar 方法接受一个 SIMD 值作为参数，然后将每个通道的值右移指定的位数，返回一个新的 SIMD 值。

``` js
var a = SIMD.Int32x4(1, 2, 4, -8);
SIMD.Int32x4.shiftRightByScalar(a, 1);
// Int32x4[0, 1, 2, -4]
```

如果原来通道的值是带符号的值，则符号位保持不变，不受右移影响。如果是不带符号位的值，则右移后头部会补 0。

``` js
var a = SIMD.Uint32x4(1, 2, 4, -8);
SIMD.Uint32x4.shiftRightByScalar(a, 1);
// Uint32x4[0, 1, 2, 2147483644]
```

上面代码中，-8 右移一位变成了 2147483644，是因为对于 32 位无符号整数来说，-8 的二进制形式是 11111111111111111111111111111000，右移一位就变成了 01111111111111111111111111111100，相当于 2147483644。

注意，只有整数的数据类型才有这个方法。

## 静态方法：通道处理

## 静态方法：比较运算

## 静态方法：位运算

## 静态方法：数据类型转换

## 实例方法

## 实例：求平均值