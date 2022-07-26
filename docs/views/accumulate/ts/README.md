# typescript 简介

> https://www.runoob.com/typescript/ts-install.html

> 面向对象是一种对现实世界理解和抽象的方法。

> TypeScript 是一种面向对象的编程语言。

> 面向对象主要有两个概念：对象和类。

1. 对象：对象是类的一个实例（对象不是找个女朋友），有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。

2. 类：类是一个模板，它描述一类对象的行为和状态。

3. 方法：方法是类的操作的实现步骤。

## 基础语法

> TypeScript 面向对象编程实例：

```js
class Site {
  name (): void {
    console.log('Runoob')
  }
}
var obj = new Site()
obj.name()
```

> 以上实例定义了一个类 Site，该类有一个方法 name()，该方法在终端上输出字符串 Runoob。

> new 关键字创建类的对象，该对象调用方法 name()。

> 编译后生成的 JavaScript 代码如下：

```js
var Site = /** @class */ (function () {
  function Site () {}
  Site.prototype.name = function () {
    console.log('Runoob')
  }
  return Site
})()
var obj = new Site()
obj.name()
```

## 基础类型

## 变量声明

> 变量是一种使用方便的占位符，用于引用计算机内存地址。

> 我们可以把变量看做存储数据的容器。

> TypeScript 变量的命名规则：

1. 变量名称可以包含数字和字母。

2. 除了下划线 \_ 和美元 \$ 符号外，不能包含其他特殊字符，包括空格。

3. 变量名不能以数字开头。

> 变量使用前必须先声明，我们可以使用 var 来声明变量。

> 我们可以使用以下四种方式来声明变量：

> 1. 声明变量的类型及初始值：
>    > var [变量名] : [类型] = 值;
>    >
>    > var uname:string = "Runoob";
> 2. 声明变量的类型，但没有初始值，变量值会设置为 undefined：
>    > var [变量名] : [类型];
>    >
>    > var uname:string;
> 3. 声明变量并初始值，但不设置类型，该变量可以是任意类型：
>    > var [变量名] = 值;
>    >
>    > var uname = "Runoob";
> 4. 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
>    > var [变量名];
>    >
>    > var uname;

> 实例
>
> > 注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。
> >
> > TypeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误，如下实例：

```js
var num: number = 'hello' // 这个代码会编译错误
```

> 类型断言（Type Assertion）
>
> 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
> 语法格式：
>
> <类型>值
>
> 或
>
> 值 as 类型

> 实例

```js
var str = '1'
var str2:number = <number> <any> str   //str、str2 是 string 类型
console.log(str2)
```

> TypeScript 是怎么确定单个断言是否足够
>
> 当 S 类型是 T 类型的子集，或者 T 类型是 S 类型的子集时，S 能被成功断言成 T。这是为了在进行类型断言时提供额外的安全性，完全毫无根据的断言是危险的，如果你想这么做，你可以使用 any。
>
> 它之所以不被称为类型转换，是因为转换通常意味着某种运行时的支持。但是，类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提供关于如何分析代码的方法。

> 类型推断
> 当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。
>
> 如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。
>
> ```js
> var num = 2 // 类型推断为 number
> console.log('num 变量的值为 ' + num)
> num = '12' // 编译错误
> console.log(num)
> ```
>
> 第一行代码声明了变量 num 并=设置初始值为 2。 注意变量声明没有指定类型。因此，程序使用类型推断来确定变量的数据类型，第一次赋值为 2，num 设置为 number 类型。
> 第三行代码，当我们再次为变量设置字符串类型的值时，这时编译会错误。因为变量已经设置为了 number 类型。
>
> error TS2322: Type '"12"' is not assignable to type 'number'.

### 变量作用域

> 变量作用域指定了变量定义的位置。

> 程序中变量的可用性由变量作用域决定。

> TypeScript 有以下几种作用域：

1. 全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
2. 类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
3. 局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。

> 以下实例说明了三种作用域的使用：

```js
var global_num = 12 // 全局变量
class Numbers {
  num_val = 13 // 实例变量
  static sval = 10 // 静态变量

  storeNum (): void {
    var local_num = 14 // 局部变量
  }
}
console.log('全局变量为: ' + global_num)
console.log(Numbers.sval) // 静态变量
var obj = new Numbers()
console.log('实例变量: ' + obj.num_val)
```

> 以上代码使用 tsc 命令编译为 JavaScript 代码为：

```js
var global_num = 12 // 全局变量
var Numbers = /** @class */ (function () {
  function Numbers () {
    this.num_val = 13 // 实例变量
  }
  Numbers.prototype.storeNum = function () {
    var local_num = 14 // 局部变量
  }
  Numbers.sval = 10 // 静态变量
  return Numbers
})()
console.log('全局变量为: ' + global_num)
console.log(Numbers.sval) // 静态变量
var obj = new Numbers()
console.log('实例变量: ' + obj.num_val)
```

> 执行以上 JavaScript 代码，输出结果为：

```js
全局变量为: 12
10
实例变量: 13
```

> 如果我们在方法外部调用局部变量 local_num，会报错：

```js
error TS2322: Could not find symbol 'local_num'.
```

## 运算符

> 运算符用于执行程序代码运算，会针对一个以上操作数项目来进行运算。
> TypeScript 主要包含以下几种运算：

1. 算术运算符
2. 逻辑运算符
3. 关系运算符
4. 按位运算符
5. 赋值运算符
6. 三元/条件运算符
7. 字符串运算符
8. 类型运算符

### 算术运算符

> 假定 y=5

| 运算符 |     描述     |  例子  | x 运算结果 | y 运算结果 |
| :----: | :----------: | :----: | :--------: | :--------: |
|   +    |     加法     | x=y+2  |     7      |     5      |
|   -    |     减法     | x=y-2  |     7      |     5      |
|   \*   |     乘法     | x=y\*2 |     7      |     5      |
|   /    |     除法     | x=y/2  |     7      |     5      |
|   %    | 取模（余数） | x=y%2  |     7      |     5      |
|   ++   |     自增     | x=++y  |     7      |     5      |
|        |              | x=y++  |     5      |     6      |
|   --   |     自减     | x=--y  |     7      |     5      |
|        |              | x=y--  |     5      |     4      |

### 关系运算符

> 关系运算符用于计算结果是否为 true 或者 false。
>
> 假定 x=5

| 运算符 |    描述    | 比较  | 返回值 |
| :----: | :--------: | :---: | :----: |
|   ==   |    等于    | x==8  | false  |
|        |            | x==5  |  true  |
|   !=   |   不等于   | x!=8  |  true  |
|   >    |    大于    | x=y/2 | false  |
|   <    |    小于    | x=y%2 |  true  |
|   >=   | 大于或等于 | x>=8  | false  |
|   <=   | 小于或等于 | x<=8  |  true  |

### 逻辑运算符

> 逻辑运算符用于测定变量或值之间的逻辑。
>
> 给定 x=6 以及 y=3，

| 运算符 | 描述 |            例子            |
| :----: | :--: | :------------------------: |
|   &&   | and  | (x < 10 && y > 1) 为 true  |
| \| \|  |  or  | (x==5 \| \| y==5) 为 false |
|   !=   | not  |      !(x==y) 为 true       |

#### 短路运算符(&& 与 ||)

> && 与 || 运算符可用于组合表达式。
>
> && 运算符只有在左右两个表达式都为 true 时才返回 true。
>
> && 运算符的组合表达式，第一个表达式返回了 false，由于 && 运算需要两个表达式都为 true，所以如果第一个为 false，就不再执行后面的判断(a > 5 跳过计算)，直接返回 false。
>
> || 运算符只要其中一个表达式为 true ，则该组合表达式就会返回 true。
>
> || 组合运算只需要一个表达式为 true，所以如果第一个为 true，就不再执行后面的判断(a < 10 跳过计算)，直接返回 true。

### 位运算符

> 位操作是程序设计中对位模式按位或二进制数的一元和二元操作。

| 运算符 |                                                                描述                                                                |    例子     |    类似于    | 结果 | 十进制 |
| :----: | :--------------------------------------------------------------------------------------------------------------------------------: | :---------: | :----------: | :--: | :----: |
|   &    |                   AND，按位与处理两个长度相同的二进制数，两个相应的二进位都为 1，该位的结果值才为 1，否则为 0。                    |  x = 5 & 1  | 0101 & 0001  | 0001 |   1    |
|   \|   |                     OR，按位或处理两个长度相同的二进制数，两个相应的二进位中只要有一个为 1，该位的结果值为 1。                     | x = 5 \| 1  | 0101 \| 0001 | 0101 |   5    |
|   ~    |                     取反，取反是一元运算符，对一个二进制数的每一位执行逻辑反操作。使数字 1 成为 0，0 成为 1。                      |   x = ~ 5   |    ~0101     | 1010 |   -6   |
|   ^    | 异或，按位异或运算，对等长二进制模式按位或二进制数的每一位执行逻辑异按位或操作。操作的结果是如果某位不同则该位为 1，否则该位为 0。 |  x = 5 ^ 1  | 0101 ^ 0001  | 0100 |   4    |
|   <<   |                左移，把 << 左边的运算数的各二进位全部左移若干位，由 << 右边的数指定移动的位数，高位丢弃，低位补 0。                | x = 5 << 1  |  0101 << 1   | 1010 |   10   |
|   >>   |                           右移，把 >> 左边的运算数的各二进位全部右移若干位，>> 右边的数指定移动的位数。                            | x = 5 >> 1  |  0101 >> 1   | 0010 |   2    |
|  >>>   |                                     无符号右移，与有符号右移位类似，除了左边一律使用 0 补位。                                      | x = 2 >>> 1 |  0010 >>> 1  | 0001 |   1    |

### 赋值运算符

> 赋值运算符用于给变量赋值。
>
> 给定 x=10 和 y=5，下面的表格解释了赋值运算符：

|          运算符          |  例子   |    实例    |  x 值  |
| :----------------------: | :-----: | :--------: | :----: |
|         = (赋值)         |  x = y  |   x = y    | x = 5  |
| += (先进行加运算后赋值)  | x += y  | x = x + y  | x = 15 |
| -= (先进行减运算后赋值)  | x -= y  | x = x - y  | x = 5  |
| \*= (先进行乘运算后赋值) | x \*= y | x = x \* y | x = 50 |
| /= (先进行除运算后赋值)  | x /= y  | x = x / y  | x = 2  |

> 类似的逻辑运算符也可以与赋值运算符联合使用：<<=, >>=, >>=, &=, |= 与 ^=。

```js
var a: number = 12
var b: number = 10

a = b
console.log('a = b: ' + a)

a += b
console.log('a+=b: ' + a)

a -= b
console.log('a-=b: ' + a)

a *= b
console.log('a*=b: ' + a)

a /= b
console.log('a/=b: ' + a)

a %= b
console.log('a%=b: ' + a)
```

> 使用 tsc 命令编译以上代码得到如下 JavaScript 代码：

```js
var a = 12
var b = 10
a = b
console.log('a = b: ' + a)
a += b
console.log('a+=b: ' + a)
a -= b
console.log('a-=b: ' + a)
a *= b
console.log('a*=b: ' + a)
a /= b
console.log('a/=b: ' + a)
a %= b
console.log('a%=b: ' + a)
```

> 执行以上 JavaScript 代码，输出结果为：

```js
a = b: 10
a+=b: 20
a-=b: 10
a*=b: 100
a/=b: 10
a%=b: 0
```

### 三元运算符 (?)

> 三元运算有 3 个操作数，并且需要判断布尔表达式的值。该运算符的主要是决定哪个值应该赋值给变量。

```js
Test ? expr1 : expr2
```

> 1. Test − 指定的条件语句
> 2. expr1 − 如果条件语句 Test 返回 true 则返回该值
> 3. expr2 − 如果条件语句 Test 返回 false 则返回该值

```js
// 实例
var num: number = -2
var result = num > 0 ? '大于 0' : '小于 0，或等于 0'
console.log(result)
```

> 实例中用于判断变量是否大于 0。
>
> 使用 tsc 命令编译以上代码得到如下 JavaScript 代码：

```js
var num = -2
var result = num > 0 ? '大于 0' : '小于 0，或等于 0'
console.log(result)
js
```

> 实例输出结果如下：

```js
// 小于 0，或等于 0
```

### 类型运算符

#### typeof 运算符

> typeof 是一元运算符，返回操作数的数据类型。
>
> 查看以下实例:

```js
var num = 12
console.log(typeof num) //输出结果: number
```

> 使用 tsc 命令编译以上代码得到如下 JavaScript 代码：

```js
var num = 12
console.log(typeof num) //输出结果: number
```

> 以上实例输出结果如下：

```js
number
```

#### instanceof

> instanceof 运算符用于判断对象是否为指定的类型，后面章节我们会具体介绍它。

### 其他运算符

#### 负号运算符(-)

> 更改操作数的符号，查看以下实例：

```js
var x: number = 4
var y = -x
console.log('x 值为: ', x) // 输出结果 4
console.log('y 值为: ', y) // 输出结果 -4
```

> 使用 tsc 命令编译以上代码得到如下 JavaScript 代码：

```js
var x = 4
var y = -x
console.log('x 值为: ', x) // 输出结果 4
console.log('y 值为: ', y) // 输出结果 -4
```

> 以上实例输出结果如下：

```js
x 值为:  4
y 值为:  -4
```

#### 字符串运算符: 连接运算符 (+)

> - 运算符可以拼接两个字符串，查看以下实例：

```js
var msg: string = 'RUNOOB' + '.COM'
console.log(msg)
```

> 使用 tsc 命令编译以上代码得到如下 JavaScript 代码：

```js
var msg = 'RUNOOB' + '.COM'
console.log(msg)
```

> 以上实例输出结果如下：
> RUNOOB.COM

## 条件语句

> 条件语句用于基于不同的条件来执行不同的动作。

> TypeScript 条件语句是通过一条或多条语句的执行结果（True 或 False）来决定执行的代码块。

### 条件语句

> 通常在写代码时，您总是需要为不同的决定来执行不同的动作。您可以在代码中使用条件语句来完成该任务。

> 在 TypeScript 中，我们可使用以下条件语句：

1. if 语句 - 只有当指定条件为 true 时，使用该语句来执行代码
2. if...else 语句 - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
3. if...else if....else 语句- 使用该语句来选择多个代码块之一来执行
4. switch 语句 - 使用该语句来选择多个代码块之一来执行

### if 语句

> TypeScript if 语句由一个布尔表达式后跟一个或多个语句组成。

#### 语法

> 语法格式如下所示：

```js
if(boolean_expression){
    # 在布尔表达式 boolean_expression 为 true 执行
}
```

> 如果布尔表达式 boolean_expression 为 true，则 if 语句内的代码块将被执行。如果布尔表达式为 false，则 if 语句结束后的第一组代码（闭括号后）将被执行。

### if...else 语句

> 一个 if 语句后可跟一个可选的 else 语句，else 语句在布尔表达式为 false 时执行。

### if...else if....else 语句

> if...else if....else 语句在执行多个判断条件的时候很有用。

```js
if(boolean_expression 1) {
    # 在布尔表达式 boolean_expression 1 为 true 执行
} else if( boolean_expression 2) {
    # 在布尔表达式 boolean_expression 2 为 true 执行
} else if( boolean_expression 3) {
    # 在布尔表达式 boolean_expression 3 为 true 执行
} else {
    # 布尔表达式的条件都为 false 时执行
}
```

> 需要注意以下几点：
>
> 1. 一个 if 判断语句可以有 0 或 1 个 else 语句，她必需在 else..if 语句后面。
> 2. 一个 if 判断语句可以有 0 或多个 else..if，这些语句必需在 else 之前。
> 3. 一旦执行了 else..if 内的代码，后面的 else..if 或 else 将不再执行。

### switch…case 语句

> 一个 switch 语句允许测试一个变量等于多个值时的情况。
> 每个值称为一个 case，且被测试的变量会对每个 switch case 进行检查。

```js
switch (expression) {
  case constant - expression:
    statement(s)
    break /* 可选的 */
  case constant - expression:
    statement(s)
    break /* 可选的 */

  /* 您可以有任意数量的 case 语句 */
  default:
    /* 可选的 */
    statement(s)
}
```

> switch 语句必须遵循下面的规则：
>
> 1. switch 语句中的 expression 是一个常量表达式，必须是一个整型或枚举类型。
> 2. 在一个 switch 中可以有任意数量的 case 语句。每个 case 后跟一个要比较的值和一个冒号。
> 3. case 的 constant-expression 必须与 switch 中的变量具有相同的数据类型，且必须是一个常量或字面量。
> 4. 当被测试的变量等于 case 中的常量时，case 后跟的语句将被执行，直到遇到 break 语句为止。
> 5. 当遇到 break 语句时，switch 终止，控制流将跳转到 switch 语句后的下一行。
> 6. 不是每一个 case 都需要包含 break。如果 case 语句不包含 break，控制流将会 继续 后续的 case，直到遇到 break 为止。
> 7. 一个 switch 语句可以有一个可选的 default case，出现在 switch 的结尾。default case 可用于在上面所有 case 都不为真时执行一个任务。default case 中的 break 语句不是必需的。

## 循环

> 有的时候，我们可能需要多次执行同一块代码。一般情况下，语句是按顺序执行的：函数中的第一个语句先执行，接着是第二个语句，依此类推。

> 编程语言提供了更为复杂执行路径的多种控制结构。

### for 循环

> TypeScript for 循环用于多次执行一个语句序列，简化管理循环变量的代码。

```js
for (init; condition; increment) {
  statement(s)
}
```

> 下面是 for 循环的控制流程解析：

1. init 会首先被执行，且只会执行一次。这一步允许您声明并初始化任何循环控制变量。您也可以不在这里写任何语句，只要有一个分号出现即可。
2. 接下来，会判断 condition。如果为 true，则执行循环主体。如果为 false，则不执行循环主体，且控制流会跳转到紧接着 for 循环的下一条语句。
3. 在执行完 for 循环主体后，控制流会跳回上面的 increment 语句。该语句允许您更新循环控制变量。该语句可以留空，只要在条件后有一个分号出现即可。
4. 条件再次被判断。如果为 true，则执行循环，这个过程会不断重复（循环主体，然后增加步值，再然后重新判断条件）。在条件变为 false 时，for 循环终止。

> 在这里，statement(s) 可以是一个单独的语句，也可以是几个语句组成的代码块。

> condition 可以是任意的表达式，当条件为 true 时执行循环，当条件为 false 时，退出循环。

### for...in 循环

> for...in 语句用于一组值的集合或列表进行迭代输出。

```js
var j: any
var n: any = 'a b c'

for (j in n) {
  console.log(n[j])
}
```

```js
var j
var n = 'a b c'
for (j in n) {
  console.log(n[j])
}
```

```js
a

b

c
```

### for…of 、forEach、every 和 some 循环

> 此外，TypeScript 还支持 for…of 、forEach、every 和 some 循环。

> for...of 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

```js
let someArray = [1, 'string', false]

for (let entry of someArray) {
  console.log(entry) // 1, "string", false
}
```

> forEach、every 和 some 是 JavaScript 的循环语法，TypeScript 作为 JavaScript 的语法超集，当然默认也是支持的。
>
> 因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。

```js
// TypeScript forEach 循环
let list = [4, 5, 6]
list.forEach((val, idx, array) => {
  // val: 当前值
  // idx：当前index
  // array: Array
})
```

```js
// TypeScript every 循环
let list = [4, 5, 6]
list.every((val, idx, array) => {
  // val: 当前值
  // idx：当前index
  // array: Array
  return true // Continues
  // Return false will quit the iteration
})
```

### while 循环

> while 语句在给定条件为 true 时，重复执行语句或语句组。循环主体执行之前会先测试条件。

```js
while (condition) {
  statement(s)
}
```

> 在这里，statement(s) 可以是一个单独的语句，也可以是几个语句组成的代码块。
>
> condition 可以是任意的表达式，当条件为 true 时执行循环。 当条件为 false 时，程序流将退出循环。

> while 循环的关键点是循环可能一次都不会执行。当条件为 false 时，会跳过循环主体，直接执行紧接着 while 循环的下一条语句。

```js
// TypeScript
var num: number = 5
var factorial: number = 1

while (num >= 1) {
  factorial = factorial * num
  num--
}
console.log('5 的阶乘为：' + factorial)
```

> 编译以上代码得到如下 JavaScript 代码：

```js
// JavaScript
var num = 5
var factorial = 1
while (num >= 1) {
  factorial = factorial * num
  num--
}
console.log('5 的阶乘为：' + factorial)
```

> 输出结果为：
>
> 5 的阶乘为：120

### do...while 循环

> 不像 for 和 while 循环，它们是在循环头部测试循环条件。do...while 循环是在循环的尾部检查它的条件。

```js
do {
  statement(s)
} while (condition)
```

> 请注意，条件表达式出现在循环的尾部，所以循环中的 statement(s) 会在条件被测试之前至少执行一次。
>
> 如果条件为 true，控制流会跳转回上面的 do，然后重新执行循环中的 statement(s)。这个过程会不断重复，直到给定条件变为 false 为止。

```js
// TypeScript
var n: number = 10
do {
  console.log(n)
  n--
} while (n >= 0)
```

```js
// JavaScript
var num = 5
var n = 10
do {
  console.log(n)
  n--
} while (n >= 0)
```

```js
// result
10
9
8
7
6
5
4
3
2
1
0
```

### break 语句

> break 语句有以下两种用法：

1. 当 break 语句出现在一个循环内时，循环会立即终止，且程序流将继续执行紧接着循环的下一条语句。
2. 它可用于终止 switch 语句中的一个 case。

如果您使用的是嵌套循环（即一个循环内嵌套另一个循环），break 语句会停止执行最内层的循环，然后开始执行该块之后的下一行代码。

```js
TypeScript
var i: number = 1
while (i <= 10) {
  if (i % 5 == 0) {
    console.log('在 1~10 之间第一个被 5 整除的数为 : ' + i)
    break // 找到一个后退出循环
  }
  i++
} // 输出 5 然后程序执行结束
```

```js
JavaScript
var i = 1
while (i <= 10) {
  if (i % 5 == 0) {
    console.log('在 1~10 之间第一个被 5 整除的数为 : ' + i)
    break // 找到一个后退出循环
  }
  i++
} // 输出 5 然后程序执行结束
```

```js
// result:
// 在 1~10 之间第一个被 5 整除的数为 : 5
```

### continue 语句

> continue 语句有点像 break 语句。但它不是强制终止，continue 会跳过当前循环中的代码，强迫开始下一次循环。

> 对于 for 循环，continue 语句执行后自增语句仍然会执行。对于 while 和 do...while 循环，continue 语句  重新执行条件判断语句。

```js
// TypeScript
var num: number = 0
var count: number = 0

for (num = 0; num <= 20; num++) {
  if (num % 2 == 0) {
    continue
  }
  count++
}
console.log('0 ~20 之间的奇数个数为: ' + count) //输出10个偶数
```

```js
// 编译以上代码得到如下 JavaScript 代码：

// JavaScript
var num = 0
var count = 0
for (num = 0; num <= 20; num++) {
  if (num % 2 == 0) {
    continue
  }
  count++
}
console.log('0 ~20 之间的奇数个数为: ' + count) //输出 10
```

```js
// result:
// 0 ~20 之间的奇数个数为: 10
```

### 无限循环

> 无限循环就是一直在运行不会停止的循环。 for 和 while 循环都可以创建无限循环。

> for 创建无限循环语法格式：

```js
for (;;) {
  // 语句
}
```

> 实例

```js
for (;;) {
  console.log('这段代码会不停的执行')
}
```

> while 创建无限循环语法格式：

```js
while (true) {
  // 语句
}
```

> 实例

```js
while (true) {
  console.log('这段代码会不停的执行')
}
```

## 函数

> 函数是一组一起执行一个任务的语句。
>
> 您可以把代码划分到不同的函数中。如何划分代码到不同的函数中是由您来决定的，但在逻辑上，划分通常是根据每个函数执行一个特定的任务来进行的。
>
> 函数声明告诉编译器函数的名称、返回类型和参数。函数定义提供了函数的实际主体。

### 函数定义

> 函数就是包裹在花括号中的代码块，前面使用了关键词 function：
>
> 语法格式如下所示：

```js
function function_name()
{
    // 执行代码
}
// 实例
function () {
    // 函数定义
    console.log("调用函数")
}
```

### 调用函数

> 函数只有通过调用才可以执行函数内的代码。
>
> 语法格式如下所示：

> function_name()

```js
TypeScript
function test () {
  // 函数定义
  console.log('调用函数')
}
test() // 调用函数
```

### 函数返回值

> 有时，我们会希望函数将执行的结果返回到调用它的地方。
>
> 通过使用 return 语句就可以实现。
>
> 在使用 return 语句时，函数会停止执行，并返回指定的值。
>
> 语法格式如下所示：

```js
function function_name (): return_type {
  // 语句
  return value
}
```

1. return_type 是返回值的类型。

2. return 关键词后跟着要返回的结果。

3. 一般情况下，一个函数只有一个 return 语句。

4. 返回值的类型需要与函数定义的返回类型(return_type)一致。

```js
// TypeScript
// 函数定义
function greet (): string {
  // 返回一个字符串
  return 'Hello World'
}

function caller () {
  var msg = greet() // 调用 greet() 函数
  console.log(msg)
}

// 调用函数
caller()
```

1. 实例中定义了函数 greet()，返回值的类型为 string。

2. greet() 函数通过 return 语句返回给调用它的地方，即变量 msg，之后输出该返回值。。

> 编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
// 函数定义
function greet () {
  return 'Hello World'
}
function caller () {
  var msg = greet() // 调用 greet() 函数
  console.log(msg)
}
// 调用函数
caller()
```

### 带参数函数

> 在调用函数时，您可以向其传递值，这些值被称为参数。
>
> 这些参数可以在函数中使用。
>
> 您可以向函数发送多个参数，每个参数使用逗号 , 分隔：
>
> 语法格式如下所示：

```js
function func_name( param1 [:datatype], param2 [:datatype]) {
}
```

1. param1、param2 为参数名。

2. datatype 为参数类型。

```js
// TypeScript
function add (x: number, y: number): number {
  return x + y
}
console.log(add(1, 2))
```

1. 实例中定义了函数 add()，返回值的类型为 number。

2. add() 函数中定义了两个 number 类型的参数，函数内将两个参数相加并返回。

编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
function add (x, y) {
  return x + y
}
console.log(add(1, 2))
// result:
// 3
```

### 可选参数和默认参数

#### 可选参数

> 在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？。

```js
// 实例

// TypeScript
function buildName (firstName: string, lastName: string) {
  return firstName + ' ' + lastName
}

let result1 = buildName('Bob') // 错误，缺少参数
let result2 = buildName('Bob', 'Adams', 'Sr.') // 错误，参数太多了
let result3 = buildName('Bob', 'Adams') // 正确
```

> 以下实例，我们将 lastName 设置为可选参数：

```js
// TypeScript
function buildName (firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

let result1 = buildName('Bob') // 正确
let result2 = buildName('Bob', 'Adams', 'Sr.') // 错误，参数太多了
let result3 = buildName('Bob', 'Adams') // 正确
```

> 可选参数必须跟在必需参数后面。 如果上例我们想让 firstName 是可选的，lastName 必选，那么就要调整它们的位置，把 firstName 放在后面。

> 如果都是可选参数就没关系。

#### 默认参数

> 我们也可以设置参数的默认值，这样在调用函数的时候，如果不传入该参数的值，则使用默认参数，语法格式为：

```js
function function_name(param1[:type],param2[:type] = default_value) {
}
```

::: tip
注意：参数不能同时设置为可选和默认。
:::

> 实例
>
> 以下实例函数的参数 rate 设置了默认值为 0.50，调用该函数时如果未传入参数则使用该默认值：

```js
TypeScript
function calculate_discount (price: number, rate: number = 0.5) {
  var discount = price * rate
  console.log('计算结果: ', discount)
}
calculate_discount(1000)
calculate_discount(1000, 0.3)
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
JavaScript
function calculate_discount (price, rate) {
  if (rate === void 0) {
    rate = 0.5
  }
  var discount = price * rate
  console.log('计算结果: ', discount)
}
calculate_discount(1000)
calculate_discount(1000, 0.3)
```

> 输出结果为：
>
> 计算结果: 500
> 计算结果: 300

### 剩余参数

> 有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。

> 剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。

```js
TypeScript
function buildName (firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ')
}

let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie')
```

> 函数的最后一个命名参数 restOfName 以 ... 为前缀，它将成为一个由剩余参数组成的数组，索引值从 0（包括）到 restOfName.length（不包括）。

```js
// TypeScript
function addNumbers (...nums: number[]) {
  var i
  var sum: number = 0

  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
  }
  console.log('和为：', sum)
}
addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10)
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
function addNumbers () {
  var nums = []
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i]
  }
  var i
  var sum = 0
  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
  }
  console.log('和为：', sum)
}
addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10)
```

> 输出结果为：
>
> 和为： 6
> 和为： 50

### 匿名函数

> 匿名函数是一个没有函数名的函数。

> 匿名函数在程序运行时动态声明，除了没有函数名外，其他的与标准函数一样。

> 我们可以将匿名函数赋值给一个变量，这种表达式就成为函数表达式。

> 语法格式如下：

```js
var res = function( [arguments] ) { ... }
```

#### 实例

> 不带参数匿名函数：

```js
// TypeScript
var msg = function () {
  return 'hello world'
}
console.log(msg())
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
var msg = function () {
  return 'hello world'
}
console.log(msg())
```

> 输出结果为：

```js
hello world
```

> 带参数匿名函数：

```js
// TypeScript
var res = function (a: number, b: number) {
  return a * b
}
console.log(res(12, 2))
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
JavaScript
var res = function (a, b) {
  return a * b
}
console.log(res(12, 2))
// result:
// 24
```

#### 匿名函数自调用

> 匿名函数自调用在函数后使用 () 即可：

```js
// TypeScript
;(function () {
  var x = 'Hello!!'
  console.log(x)
})()
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
;(function () {
  var x = 'Hello!!'
  console.log(x)
})()
// result
// Hello!!
```

### 构造函数

> TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：

> 语法格式如下：

```js
var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

> 参数说明：

1. arg1, arg2, ... argN：参数列表。
2. functionBody：一个含有包括函数定义的 JavaScript 语句的字符串。

> 实例

```js
// TypeScript
var myFunction = new Function('a', 'b', 'return a * b')
var x = myFunction(4, 3)
console.log(x)
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
var myFunction = new Function('a', 'b', 'return a * b')
var x = myFunction(4, 3)
console.log(x)
// result
// 12
```

### 递归函数

> 递归函数即在函数内调用函数本身。

> 举个例子：
>
> 从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事呢！故事是什么呢？"从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事呢！故事是什么呢？'从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事呢！故事是什么呢？……'"

#### 实例

```js
// TypeScript
function factorial (number) {
  if (number <= 0) {
    // 停止执行
    return 1
  } else {
    return number * factorial(number - 1) // 调用自身
  }
}
console.log(factorial(6)) // 输出 720
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
function factorial (number) {
  if (number <= 0) {
    // 停止执行
    return 1
  } else {
    return number * factorial(number - 1) // 调用自身
  }
}
console.log(factorial(6)) // 输出 720
// 输出结果为：
// 720
```

### Lambda 函数

> Lambda 函数也称之为箭头函数。

> 箭头函数表达式的语法比函数表达式更短。

> 函数只有一行语句：

```js
( [param1, parma2,…param n] )=>statement;
```

#### 实例

> 以下实例声明了 lambda 表达式函数，函数返回两个数的和：

```js
// TypeScript
var foo = (x: number) => 10 + x
console.log(foo(100)) //输出结果为 110
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
var foo = function (x) {
  return 10 + x
}
console.log(foo(100)) //输出结果为 110
// 输出结果为：
// 110
```

> 函数是一个语句块：

```js
( [param1, parma2,…param n] )=> {

    // 代码块
}
```

#### 实例

> 以下实例声明了 lambda 表达式函数，函数返回两个数的和：

```js
// TypeScript
var foo = (x: number) => {
  x = 10 + x
  console.log(x)
}
foo(100)
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
JavaScript
var foo = function (x) {
  x = 10 + x
  console.log(x)
}
foo(100)
// 输出结果为：
// 110
```

> 我们可以不指定函数的参数类型，通过函数内来推断参数类型:

```js
TypeScript
var func = x => {
  if (typeof x == 'number') {
    console.log(x + ' 是一个数字')
  } else if (typeof x == 'string') {
    console.log(x + ' 是一个字符串')
  }
}
func(12)
func('Tom')
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
var func = function (x) {
  if (typeof x == 'number') {
    console.log(x + ' 是一个数字')
  } else if (typeof x == 'string') {
    console.log(x + ' 是一个字符串')
  }
}
func(12)
func('Tom')
// 输出结果为：

// 12 是一个数字
// Tom 是一个字符串
```

> 单个参数 () 是可选的：

```js
// TypeScript
var display = x => {
  console.log('输出为 ' + x)
}
display(12)
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
var display = function (x) {
  console.log('输出为 ' + x)
}
display(12)
// 输出结果为：

// 输出为 12
```

> 无参数时可以设置空括号：

```js
TypeScript
var disp = () => {
  console.log('Function invoked')
}
disp()
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
JavaScript
var disp = function () {
  console.log('调用函数')
}
disp()
// 输出结果为：

// 调用函数
```

### 函数重载

> 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

> 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

> 参数类型不同：

```js
function disp(string):void;
function disp(number):void;
```

> 参数数量不同：

```js
function disp(n1:number):void;
function disp(x:number,y:number):void;
```

> 参数类型顺序不同：

```js
function disp(n1:number,s1:string):void;
function disp(s:string,n:number):void;
```

> 如果参数类型不同，则参数类型应设置为 any。

> 参数数量不同你可以将不同的参数设置为可选。

#### 实例

> 以下实例定义了参数类型与参数数量不同：

```js
// TypeScript
function disp(s1:string):void;
function disp(n1:number,s1:string):void;

function disp(x:any,y?:any):void {
    console.log(x);
    console.log(y);
}
disp("abc")
disp(1,"xyz");
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
JavaScript
function disp (x, y) {
  console.log(x)
  console.log(y)
}
disp('abc')
disp(1, 'xyz')
// 输出结果为：

// abc
// undefined
// 1
// xyz
```

## Number

> TypeScript 与 JavaScript 类似，支持 Number 对象。

> Number 对象是原始数值的包装对象。

> 语法
>
> > var num = new Number(value);

> 注意： 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)。

### Number 对象属性

> 下表列出了 Number 对象支持的属性：

| 序号 |                                                                                  属性&描述                                                                                   |
| :--: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  1.  |                                      MAX_VALUE 可表示的最大的数，MAX_VALUE 属性值接近于 1.79E+308。大于 MAX_VALUE 的值代表 "Infinity"。                                      |
|  2.  | MIN_VALUE 可表示的最小的数，即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 -MIN_VALUE，MIN_VALUE 的值约为 5e-324。小于 MIN_VALUE ("underflow values") 的值将会转换为 0。 |
|  3.  |                                                                        NaN 非数字值（Not-A-Number）。                                                                        |
|  4.  |                                                       NEGATIVE_INFINITY 负无穷大，溢出时返回该值。该值小于 MIN_VALUE。                                                       |
|  5.  |                                                       POSITIVE_INFINITY 正无穷大，溢出时返回该值。该值大于 MAX_VALUE。                                                       |
|  6.  |                                                      prototype Number 对象的静态属性。使您有能力向对象添加属性和方法。                                                       |
|  7.  |                                                              constructor 返回对创建此对象的 Number 函数的引用。                                                              |

```js
// TypeScript
console.log('TypeScript Number 属性: ')
console.log('最大值为: ' + Number.MAX_VALUE)
console.log('最小值为: ' + Number.MIN_VALUE)
console.log('负无穷大: ' + Number.NEGATIVE_INFINITY)
console.log('正无穷大:' + Number.POSITIVE_INFINITY)
```

```js
// 编译以上代码，得到以下 JavaScript 代码：

// JavaScript
console.log('TypeScript Number 属性: ')
console.log('最大值为: ' + Number.MAX_VALUE)
console.log('最小值为: ' + Number.MIN_VALUE)
console.log('负无穷大: ' + Number.NEGATIVE_INFINITY)
console.log('正无穷大:' + Number.POSITIVE_INFINITY)
```

```js
输出结果为：

TypeScript Number 属性:
最大值为: 1.7976931348623157e+308
最小值为: 5e-324
负无穷大: -Infinity
正无穷大:Infinity
```

### NaN 实例

```js
// TypeScript
var month = 0
if (month <= 0 || month > 12) {
  month = Number.NaN
  console.log('月份是：' + month)
} else {
  console.log('输入月份数值正确。')
}
```

```js
// 编译以上代码，得到以下 JavaScript 代码：

// JavaScript
var month = 0
if (month <= 0 || month > 12) {
  month = Number.NaN
  console.log('月份是：' + month)
} else {
  console.log('输入月份数值正确。')
}
```

> 输出结果为：

> 月份是：NaN

### prototype 实例

```js
// TypeScript
function employee (id: number, name: string) {
  this.id = id
  this.name = name
}

var emp = new employee(123, 'admin')
employee.prototype.email = 'admin@runoob.com'

console.log('员工号: ' + emp.id)
console.log('员工姓名: ' + emp.name)
console.log('员工邮箱: ' + emp.email)
```

> 编译以上代码，得到以下 JavaScript 代码：

```js
// JavaScript
function employee (id, name) {
  this.id = id
  this.name = name
}
var emp = new employee(123, 'admin')
employee.prototype.email = 'admin@runoob.com'
console.log('员工号: ' + emp.id)
console.log('员工姓名: ' + emp.name)
console.log('员工邮箱: ' + emp.email)
```

> 输出结果为：

```js
员工号: 123
员工姓名: admin
员工邮箱: admin@runoob.com
```

### Number 对象方法

> Number 对象 支持以下方法：

> | 序号 | 方法 & 描述 | 实例 |
> | :--: | :------------------: | :------------------: |
> | 1. | toExponential() | //toExponential() |
> | | 把对象的值转换为指数计数法。 | var num1 = 1225.30 |
> | | | var val = num1.toExponential(); |
> | | | console.log(val) // 输出： 1.2253e+3 |
> | 2. | toFixed() | var num3 = 177.234  |
> |  | 把数字转换为字符串，并对小数点指定位数。 | console.log("num3.toFixed() 为 "+num3.toFixed())    // 输出：177  |
> |  |  | console.log("num3.toFixed(2) 为 "+num3.toFixed(2))  // 输出：177.23  |
> |  |  | console.log("num3.toFixed(6) 为 "+num3.toFixed(6))  // 输出：177.234000  |
> | 3. | toLocaleString() | var num = new Number(177.1234);   |
> |  | 把数字转换为字符串，使用本地数字格式顺序。 | console.log( num.toLocaleString());  // 输出：177.1234   |
> | 4. | toPrecision() | var num = new Number(7.123456);    |
> |  | 把数字格式化为指定的长度。 | console.log(num.toPrecision());  // 输出：7.123456     |
> |  |  | console.log(num.toPrecision(1)); // 输出：7    |
> |  |  | console.log(num.toPrecision(2)); // 输出：7.1    |
> | 5. | toString() | var num = new Number(10);     |
> |  | 把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。 | console.log(num.toString());  // 输出10进制：10     |
> |  |  | console.log(num.toString(2)); // 输出2进制：1010   |
> |  |  | console.log(num.toString(8)); // 输出8进制：12   |
> | 6. | valueOf() | var num = new Number(10);    |
> |  | 返回一个 Number 对象的原始数字值。 | console.log(num.valueOf()); // 输出：10   |

> toLocaleString() 与 toString() 的区别：

1. toLocaleString()，当数字是四位数及以上时，从右往左数，每三位用分号隔开，并且小数点后只保留三位；而toString()单纯将数字转换为字符串。

2. toLocaleString()，当目标是标准时间格式时，输出简洁年月日，时分秒；而toString()输出国际表述字符串。

``` js
var num = new Number(1777.123488); 
console.log(num.toLocaleString());  // 输出：1,777.123
console.log(num.toString());  // 输出：1777.123488

var dateStr = new Date();
console.log(dateStr.toLocaleString());  // 输出：2022/2/15 16:48:35
console.log(dateStr.toString());  // 输出：Tue Feb 15 2022 16:48:58 GMT+0800 (中国标准时间)
```

## String
> String 对象用于处理文本（字符串）。

> 语法
``` js
var txt = new String("string");
或者更简单方式：
var txt = "string";
```

### String 对象属性
> 下表列出了 String 对象支持的属性：

| 序号 |        属性 & 描述         |                          实例                          |
| :--: | :------------------------: | :----------------------------------------------------: |
|  1.  |        constructor         |       var str = new String( "This is string" );        |
|      | 对创建该对象的函数的引用。 |  console.log("str.constructor is:" + str.constructor)  |
|      |                            |                       输出结果：                       |
|      |                            | str.constructor is:function String() { [native code] } |
|  2.  |           length           |         var uname = new String("Hello World")          |
|      |     返回字符串的长度。     |     console.log("Length "+uname.length) // 输出 11     |
|  3.  |         prototype          |       function employee(id:number,name:string) {  this.id = id   this.name = name  } |
| | | var emp = new employee(123,"admin") |
| | | employee.prototype.email="admin@runoob.com" // 添加属性 email |
| | | console.log("员工号: "+emp.id) |
| | | console.log("员工姓名: "+emp.name) |
| | | console.log("员工邮箱: "+emp.email) |

### String 方法
> 下表列出了 String 对象支持的方法：

| 序号 | 属性 & 描述 | 实例 |
| :--: | :---------: | :--: |
| 1. | charAt() | var str = new String("RUNOOB");  |
|  | 返回在指定位置的字符。 | console.log("str.charAt(0) 为:" + str.charAt(0)); // R  |
| 2. | 	charCodeAt() | var str = new String("RUNOOB");   |
|  | 	返回在指定的位置的字符的 Unicode 编码。 | console.log("str.charCodeAt(0) 为:" + str.charCodeAt(0)); // 82   |
| 3. | 	concat() | var str1 = new String( "RUNOOB" );    |
|  | 	连接两个或更多字符串，并返回新的字符串。 | var str2 = new String( "GOOGLE" );    |
|  | 	 | var str3 = str1.concat( str2 );     |
|  | 	 | console.log("str1 + str2 : "+str3) // RUNOOBGOOGLE    |
| 4. | indexOf() | var str1 = new String( "RUNOOB" );   |
|  | 返回某个指定的字符串值在字符串中首次出现的位置。 | var index = str1.indexOf( "OO" );    |
|  |  | console.log("查找的字符串位置 :" + index );  // 3    |
| 5. | lastIndexOf() | var str1 = new String( "This is string one and again string" );    |
|  | 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。 | var index = str1.lastIndexOf( "string" );    |
|  |  | console.log("lastIndexOf 查找到的最后字符串位置 :" + index ); // 29    |
|  |  | index = str1.lastIndexOf( "one" );     |
|  |  | console.log("lastIndexOf 查找到的最后字符串位置 :" + index ); // 15    |
| 6. | localeCompare() | 	var str1 = new String( "This is beautiful string" );    |
|  | 用本地特定的顺序来比较两个字符串。 | 	var index = str1.localeCompare( "This is beautiful string");    |
|  |  | 	console.log("localeCompare first :" + index );  // 0   |
| 7. | match() | 	var str="The rain in SPAIN stays mainly in the plain";     |
|  | 查找找到一个或多个正则表达式的匹配。 | var n=str.match(/ain/g);  // ain,ain,ain    |
| 8. | 	replace() | var re = /(\w+)\s(\w+)/;    |
|  | 替换与正则表达式匹配的子串 | var str = "zara ali"; |
|  |  | var newstr = str.replace(re, "$2, $1");  |
|  |  | console.log(newstr); // ali, zara  |
| 9. | 	search() | var re = /apples/gi;   |
|  | 检索与正则表达式相匹配的值 | var str = "Apples are round, and apples are juicy.";  |
|  |  | if (str.search(re) == -1 ) {  console.log("Does not contain Apples" ); } else {  console.log("Contains Apples" ); }   |
| 10. | slice() |    |
|  | 提取字符串的片断，并在新的字符串中返回被提取的部分。 |    |
| 11. | split() | var str = "Apples are round, and apples are juicy.";  |
|  | 把字符串分割为子字符串数组。 | var splitted = str.split(" ", 3); |
|  |  | console.log(splitted)  // [ 'Apples', 'are', 'round,' ] |
| 12. | substr() |   |
|  | 从起始索引号提取字符串中指定数目的字符。 |   |
| 13. | substring() | var str = "RUNOOB GOOGLE TAOBAO FACEBOOK"; |
|  | 提取字符串中两个指定的索引号之间的字符。 | console.log("(1,2): "    + str.substring(1,2));   // U |
|  |  | console.log("(0,10): "   + str.substring(0, 10)); // RUNOOB GOO |
|  |  | console.log("(5): "      + str.substring(5));     // B GOOGLE TAOBAO FACEBOOK |
| 14. | toLocaleLowerCase() | var str = "Runoob Google";  |
|  | 根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射。 | console.log(str.toLocaleLowerCase( ));  // runoob google  |
| 15. | toLocaleUpperCase() | var str = "Runoob Google";  |
|  | 据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射。 | console.log(str.toLocaleUpperCase( ));  // RUNOOB GOOGLE  |
| 16. | toLowerCase() | var str = "Runoob Google";  |
|  | 把字符串转换为小写。 | console.log(str.toLowerCase( ));  // runoob google  |
| 17. | toString() | var str = "Runoob";   |
|  | 返回字符串。 | console.log(str.toString( )); // Runoob  |
| 18. | toUpperCase() | var str = "Runoob Google";    |
|  | 把字符串转换为大写。 | console.log(str.toUpperCase( ));  // RUNOOB GOOGLE  |
| 19. | valueOf() | var str = new String("Runoob");     |
|  | 返回指定字符串对象的原始值。 | console.log(str.valueOf( ));  // Runoob  |


## Array（数组）
> 数组对象是使用单独的变量名来存储一系列的值。

> 数组非常常用。

> 假如你有一组数据（例如：网站名字），存在单独变量如下所示：

> TypeScript 声明数组的语法格式如下所示：
``` js
var array_name[:datatype];        //声明 
array_name = [val1,val2,valn..]   //初始化
```
> 或者直接在声明时初始化：
``` js
var array_name[:datatype] = [val1,val2…valn]
```
::: tip
如果数组声明时未设置类型，则会被认为是 any 类型，在初始化时根据第一个元素的类型来推断数组的类型。
:::

### 实例
> 创建一个 number 类型的数组：

``` js
var numlist:number[] = [2,4,6,8]
```

> 索引值第一个为 0，我们可以根据索引值来访问数组元素：

``` js
// TypeScript
var sites:string[]; 
sites = ["Google","Runoob","Taobao"] 
console.log(sites[0]); 
console.log(sites[1]);
```

``` js
// 编译以上代码，得到以下 JavaScript 代码：

// JavaScript
var sites;
sites = ["Google", "Runoob", "Taobao"];
console.log(sites[0]);
console.log(sites[1]);
```

``` js
// 输出结果为：

Google
Runoob
```

### Array 对象
> 我们也可以使用 Array 对象创建数组。

> Array 对象的构造函数接受以下两种值：

1. 表示数组大小的数值。
2. 初始化的数组列表，元素使用逗号分隔值。

#### 实例
> 指定数组初始化大小：

``` js
TypeScript
var arr_names:number[] = new Array(4)  
 
for(var i = 0; i<arr_names.length; i++) { 
        arr_names[i] = i * 2 
        console.log(arr_names[i]) 
}
```

``` js
// 编译以上代码，得到以下 JavaScript 代码：

JavaScript
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
        arr_names[i] = i * 2;
        console.log(arr_names[i]);
}
```

> 输出结果为：

``` js
0
2
4
6
```

### 数组解构
> 我们也可以把数组元素赋值给变量，如下所示：

``` js
// TypeScript
var arr:number[] = [12,13] 
var[x,y] = arr // 将数组的两个元素赋值给变量 x 和 y
console.log(x) 
console.log(y)
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
// JavaScript
var arr = [12, 13];
var x = arr[0], y = arr[1]; // 将数组的两个元素赋值给变量 x 和 y
console.log(x);
console.log(y);

// 输出结果为：

12
13
```

### 数组迭代
> 我们可以使用 for 语句来循环输出数组的各个元素：

``` js
// TypeScript
var j:any; 
var nums:number[] = [1001,1002,1003,1004] 
 
for(j in nums) { 
    console.log(nums[j]) 
}
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j]);
}

// 输出结果为：

1001
1002
1003
1004
```

### 多维数组
> 一个数组的元素可以是另外一个数组，这样就构成了多维数组（Multi-dimensional Array）。

> 最简单的多维数组是二维数组，定义方式如下：

``` js
var arr_name:datatype[][]=[ [val1,val2,val3],[v1,v2,v3] ]
```

### 数组在函数中的使用
#### 作为参数传递给函数

``` js
// TypeScript
var sites:string[] = new Array("Google","Runoob","Taobao","Facebook") 
 
function disp(arr_sites:string[]) {
        for(var i = 0;i<arr_sites.length;i++) { 
                console.log(arr_sites[i]) 
        }  
}  
disp(sites);
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var sites = new Array("Google", "Runoob", "Taobao", "Facebook");
function disp(arr_sites) {
        for (var i = 0; i < arr_sites.length; i++) {
                console.log(arr_sites[i]);
        }
}
disp(sites);
```
> 输出结果为：

``` js
Google
Runoob
Taobao
Facebook
```

#### 作为函数的返回值
``` js
// TypeScript
function disp():string[] { 
        return new Array("Google", "Runoob", "Taobao", "Facebook");
} 
 
var sites:string[] = disp() 
for(var i in sites) { 
        console.log(sites[i]) 
}
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
function disp() {
        return new Array("Google", "Runoob", "Taobao", "Facebook");
}
var sites = disp();
for (var i in sites) {
        console.log(sites[i]);
}
```

``` js
// 输出结果为：

Google
Runoob
Taobao
Facebook
```

### 数组方法
> 下表列出了一些常用的数组方法：

| 序号 | 方法 & 描述 | 实例 |
| :--: | :---------: | :--: |
| 1. | concat() | var alpha = ["a", "b", "c"];  |
|  | 连接两个或更多的数组，并返回结果。 | var numeric = [1, 2, 3];  |
|  |  | var alphaNumeric = alpha.concat(numeric);  |
|  |  | console.log("alphaNumeric : " + alphaNumeric );    // a,b,c,1,2,3   |
| 2. | every() | function isBigEnough(element, index, array) {  return (element >= 10); }  |
|  | 检测数值元素的每个元素是否都符合条件。 | var passed = [12, 5, 8, 130, 44].every(isBigEnough);  |
|  |  | console.log("Test Value : " + passed ); // false  |
| 3. | filter() | function isBigEnough(element, index, array) {    return (element >= 10); }   |
|  | 检测数值元素，并返回符合条件所有元素的数组。 | var passed = [12, 5, 8, 130, 44].filter(isBigEnough);    |
|  |  | console.log("Test Value : " + passed ); // 12,130,44  |
| 4. | forEach() | let num = [7, 8, 9]; |
|  | 数组每个元素都执行一次回调函数。 | num.forEach(function (value) { console.log(value);});  |
|  |  | 编译成 JavaScript 代码：  |
|  |  | var num = [7, 8, 9];  |
|  |  | num.forEach(function (value) {  console.log(value);  // 7   8   9});  |
| 5. | indexOf() | var index = [12, 5, 8, 130, 44].indexOf(8); |
|  | 搜索数组中的元素，并返回它所在的位置。如果搜索不到，返回值 -1，代表没有此项。 | console.log("index is : " + index );  // 2 |
| 6. | join() | var arr = new Array("Google","Runoob","Taobao");  |
|  | 把数组的所有元素放入一个字符串。 | var str = arr.join(); |
|  |  | console.log("str : " + str );  // Google,Runoob,Taobao |
|  |  | var str = arr.join(", "); |
|  |  | console.log("str : " + str );  // Google, Runoob, Taobao |
|  |  | var str = arr.join(" + ");  |
|  |  | console.log("str : " + str );  // Google + Runoob + Taobao |
| 7. | lastIndexOf() | var index = [12, 5, 8, 130, 44].lastIndexOf(8); |
|  | 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。 | console.log("index is : " + index );  // 2 |
| 8. | map() | var numbers = [1, 4, 9];  |
|  | 通过指定函数处理数组的每个元素，并返回处理后的数组。 | var roots = numbers.map(Math.sqrt);  |
|  |  | console.log("roots is : " + roots );  // 1,2,3 |
| 9. | pop() | var numbers = [1, 4, 9];  |
|  | 删除数组的最后一个元素并返回删除的元素。 | var element = numbers.pop();  |
|  |  | var element = numbers.pop(); |
|  |  | console.log("element is : " + element );  // 4 |
| 10. | push() | var numbers = new Array(1, 4, 9); |
|  | 向数组的末尾添加一个或更多元素，并返回新的长度。 | var length = numbers.push(10); |
|  |  | console.log("new numbers is : " + numbers );  // 1,4,9,10 |
| 11. | reduce() | var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); |
|  | 将数组元素计算为一个值（从左到右）。 | console.log("total is : " + total );  // 6 |
| 12. | reduceRight() | var total = [0, 1, 2, 3].reduceRight(function(a, b){ return a + b; }); |
|  | 将数组元素计算为一个值（从右到左）。 | console.log("total is : " + total );  // 6 |
| 13. | reverse() | var arr = [0, 1, 2, 3].reverse();  |
|  | 反转数组的元素顺序。 | console.log("Reversed array is : " + arr );  // 3,2,1,0 |
| 14. | shift() | var arr = [10, 1, 2, 3].shift();  |
|  | 删除并返回数组的第一个元素。 | console.log("Shifted value is : " + arr );  // 10 |
| 15. | slice() | var arr = ["orange", "mango", "banana", "sugar", "tea"]; |
|  | 选取数组的的一部分，并返回一个新数组。 | console.log("arr.slice( 1, 2) : " + arr.slice( 1, 2) );  // mango |
|  |  | console.log("arr.slice( 1, 3) : " + arr.slice( 1, 3) );  // mango,banana |
| 16. | some() | function isBigEnough(element, index, array) {    return (element >= 10); }  |
|  | 检测数组元素中是否有元素符合指定条件。 | var retval = [2, 5, 8, 1, 4].some(isBigEnough); |
|  |  | console.log("Returned value is : " + retval );  // false |
|  |  | var retval = [12, 5, 8, 1, 4].some(isBigEnough); |
|  |  | console.log("Returned value is : " + retval );  // true |
| 17. | sort() | var arr = new Array("orange", "mango", "banana", "sugar"); |
|  | 对数组的元素进行排序。 | var sorted = arr.sort();  |
|  |  | console.log("Returned string is : " + sorted );  // banana,mango,orange,sugar |
| 18. | splice() | var arr = ["orange", "mango", "banana", "sugar", "tea"]; |
|  | 从数组中添加或删除元素。 | var removed = arr.splice(2, 0, "water"); |
|  |  | console.log("After adding 1: " + arr );    // orange,mango,water,banana,sugar,tea |
|  |  | console.log("removed is: " + removed);  |
|  |  | removed = arr.splice(3, 1);    |
|  |  | console.log("After removing 1: " + arr );  // orange,mango,water,sugar,tea  |
|  |  | console.log("removed is: " + removed);  // banana |
| 19. | toString() | var arr = new Array("orange", "mango", "banana", "sugar"); |
|  | 把数组转换为字符串，并返回结果。 | var str = arr.toString(); |
|  |  | console.log("Returned string is : " + str );  // orange,mango,banana,sugar |
| 20. | unshift() | var arr = new Array("orange", "mango", "banana", "sugar"); |
|  | 向数组的开头添加一个或更多元素，并返回新的长度。 | var length = arr.unshift("water"); |
|  |  | console.log("Returned array is : " + arr ); // water,orange,mango,banana,sugar |
|  |  | console.log("Length of the array is : " + length ); // 5 |

## Map 对象
> Map 对象保存键值对，并且能够记住键的原始插入顺序。

> 任何值(对象或者原始值) 都可以作为一个键或一个值。

> Map 是 ES6 中引入的一种新的数据结构，可以参考 ES6 Map 与 Set。

### 创建 Map
> TypeScript 使用 Map 类型和 new 关键字来创建 Map：
>> let myMap = new Map();

> 初始化 Map，可以以数组的格式来传入键值对：
>> let myMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"]
    ]); 

> Map 相关的函数与属性：

1. map.clear() – 移除 Map 对象的所有键/值对 。
2. map.set() – 设置键值对，返回该 Map 对象。
3. map.get() – 返回键对应的值，如果不存在，则返回 undefined。
4. map.has() – 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
5. map.delete() – 删除 Map 中的元素，删除成功返回 true，失败返回 false。
6. map.size – 返回 Map 对象键/值对的数量。
7. map.keys() - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
8. map.values() – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。

``` js
// 实例 - test.ts 文件

let nameSiteMapping = new Map();
 
// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
 
// 获取键对应的值
console.log(nameSiteMapping.get("Runoob"));     // 2
 
// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao"));       // true
console.log(nameSiteMapping.has("Zhihu"));        // false
 
// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size);                // 3
 
// 删除 Runoob
console.log(nameSiteMapping.delete("Runoob"));    // true
console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对
nameSiteMapping.clear();             // 清除 Map
console.log(nameSiteMapping);
```

> 使用 es6 编译：
>
>> tsc --target es6 test.ts

> 编译以上代码得到如下 JavaScript 代码：

``` js
// 实例 - test.js 文件
let nameSiteMapping = new Map();
// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
// 获取键对应的值
console.log(nameSiteMapping.get("Runoob")); //40
// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao")); //true
console.log(nameSiteMapping.has("Zhihu")); //false
// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size); //3
// 删除 Runoob
console.log(nameSiteMapping.delete("Runoob")); // true
console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对
nameSiteMapping.clear(); //清除 Map
console.log(nameSiteMapping);
```
> 执行以上 JavaScript 代码，输出结果为：

``` js
2
true
false
3
true
Map { 'Google' => 1, 'Taobao' => 3 }
Map {}
```

### 迭代 Map
> Map 对象中的元素是按顺序插入的，我们可以迭代 Map 对象，每一次迭代返回 [key, value] 数组。

> TypeScript使用 for...of 来实现迭代：

``` js
// 实例 -test.ts 文件
let nameSiteMapping = new Map();
 
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
 
// 迭代 Map 中的 key
for (let key of nameSiteMapping.keys()) {
    console.log(key);                  
}
 
// 迭代 Map 中的 value
for (let value of nameSiteMapping.values()) {
    console.log(value);                 
}
 
// 迭代 Map 中的 key => value
for (let entry of nameSiteMapping.entries()) {
    console.log(entry[0], entry[1]);   
}
 
// 使用对象解析
for (let [key, value] of nameSiteMapping) {
    console.log(key, value);            
}
```
> 使用 es6 编译：
>
>> tsc --target es6 test.ts

> 编译以上代码得到如下 JavaScript 代码：

``` js
// 实例
let nameSiteMapping = new Map();
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
// 迭代 Map 中的 key
for (let key of nameSiteMapping.keys()) {
    console.log(key);
}
// 迭代 Map 中的 value
for (let value of nameSiteMapping.values()) {
    console.log(value);
}
// 迭代 Map 中的 key => value
for (let entry of nameSiteMapping.entries()) {
    console.log(entry[0], entry[1]);
}
// 使用对象解析
for (let [key, value] of nameSiteMapping) {
    console.log(key, value);
}
```

``` js
// 执行以上 JavaScript 代码，输出结果为：

Google
Runoob
Taobao
1
2
3
Google 1
Runoob 2
Taobao 3
Google 1
Runoob 2
Taobao 3
```


## 元组
> 我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。

> 元组中允许存储不同类型的元素，元组可以作为参数传递给函数。

> 创建元组的语法格式如下：
>
>> var tuple_name = [value1,value2,value3,…value n]

### 实例
> 声明一个元组并初始化：
>
>> var mytuple = [10,"Runoob"];

> 或者我们可以先声明一个空元组，然后再初始化：
>> var mytuple = []; 
mytuple[0] = 120 
mytuple[1] = 234

### 访问元组
> 元组中元素使用索引来访问，第一个元素的索引值为 0，第二个为 1，以此类推第 n 个为 n-1，语法格式如下:
>
>> tuple_name[index]

### 实例
> 以下实例定义了元组，包含了数字和字符串两种类型的元素：
>
>> TypeScript
var mytuple = [10,"Runoob"]; // 创建元组
console.log(mytuple[0]) 
console.log(mytuple[1])

>编译以上代码，得到以下 JavaScript 代码：
>
>> JavaScript
var mytuple = [10, "Runoob"]; // 创建元组
console.log(mytuple[0]);
console.log(mytuple[1]);

> 输出结果为：
>>10
Runoob

### 元组运算
> 我们可以使用以下两个函数向元组添加新元素或者删除元素：

1. push() 向元组添加元素，添加在最后面。

2. pop() 从元组中移除元素（最后一个），并返回移除的元素。

``` js
// TypeScript
var mytuple = [10,"Hello","World","typeScript"]; 
console.log("添加前元素个数："+mytuple.length)    // 返回元组的大小
 
mytuple.push(12)                                    // 添加到元组中
console.log("添加后元素个数："+mytuple.length) 
console.log("删除前元素个数："+mytuple.length) 
console.log(mytuple.pop()+" 元素从元组中删除") // 删除并返回删除的元素
        
console.log("删除后元素个数："+mytuple.length)
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("添加前元素个数：" + mytuple.length); // 返回元组的大小
mytuple.push(12); // 添加到元组中
console.log("添加后元素个数：" + mytuple.length);
console.log("删除前元素个数：" + mytuple.length);
console.log(mytuple.pop() + " 元素从元组中删除"); // 删除并返回删除的元素
console.log("删除后元素个数：" + mytuple.length);
```

> 输出结果为：
>添加前元素个数：4
添加后元素个数：5
删除前元素个数：5
12 元素从元组中删除
删除后元素个数：4

### 更新元组
> 元组是可变的，这意味着我们可以对元组进行更新操作：

``` js
// TypeScript
var mytuple = [10, "Runoob", "Taobao", "Google"]; // 创建一个元组
console.log("元组的第一个元素为：" + mytuple[0]) 
 
// 更新元组元素
mytuple[0] = 121     
console.log("元组中的第一个元素更新为："+ mytuple[0])
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
JavaScript
var mytuple = [10, "Runoob", "Taobao", "Google"]; // 创建一个元组
console.log("元组的第一个元素为：" + mytuple[0]);
// 更新元组元素
mytuple[0] = 121;
console.log("元组中的第一个元素更新为：" + mytuple[0]);
```
> 输出结果为：
>> 元组的第一个元素为：10
元组中的第一个元素更新为：121

### 解构元组
> 我们也可以把元组元素赋值给变量，如下所示：

``` js
// TypeScript
var a =[10,"Runoob"] 
var [b,c] = a 
console.log( b )    
console.log( c )
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var a = [10, "Runoob"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
```

> 输出结果为：
>> 10
Runoob


## 联合类型
> 联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。

::: tip
注意：只能赋值指定的类型，如果赋值其它类型就会报错。
:::

> 创建联合类型的语法格式如下：
>> Type1|Type2|Type3 

### 实例
> 声明一个联合类型：

``` js
// TypeScript
var val:string|number 
val = 12 
console.log("数字为 "+ val) 
val = "Runoob" 
console.log("字符串为 " + val)
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var val;
val = 12;
console.log("数字为 " + val);
val = "Runoob";
console.log("字符串为 " + val);
```

> 输出结果为：
>
>>数字为 12
字符串为 Runoob

> 如果赋值其它类型就会报错：
>
>> var val:string|number 
val = true

> 也可以将联合类型作为函数参数使用：

``` js
// TypeScript
function disp(name:string|string[]) { 
        if(typeof name == "string") { 
                console.log(name) 
        } else { 
                var i; 
                for(i = 0;i<name.length;i++) { 
                console.log(name[i])
                } 
        } 
} 
disp("Runoob") 
console.log("输出数组....") 
disp(["Runoob","Google","Taobao","Facebook"])
```
``` js
// 编译以上代码，得到以下 JavaScript 代码：
JavaScript
function disp(name) {
        if (typeof name == "string") {
                console.log(name);
        }
        else {
                var i;
                for (i = 0; i < name.length; i++) {
                console.log(name[i]);
                }
        }
}
disp("Runoob");
console.log("输出数组....");
disp(["Runoob", "Google", "Taobao", "Facebook"]);
```

> 输出结果为：
>
>> Runoob
输出数组....
Runoob
Google
Taobao
Facebook

### 联合类型数组
> 我们也可以将数组声明为联合类型：

``` js
TypeScript
var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**数字数组**")  
 
for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  
 
arr = ["Runoob","Google","Taobao"] 
console.log("**字符串数组**")  
 
for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
JavaScript
var arr;
var i;
arr = [1, 2, 4];
console.log("**数字数组**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["Runoob", "Google", "Taobao"];
console.log("**字符串数组**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

> 输出结果为：

``` js
**数字数组**
1
2
4
**字符串数组**
Runoob
Google
Taobao
```

## 接口
> 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

> TypeScript 接口定义如下：
>
>> interface interface_name { 
}

### 实例
> 以下实例中，我们定义了一个接口 IPerson，接着定义了一个变量 customer，它的类型是 IPerson。

> customer 实现了接口 IPerson 的属性和方法。

``` js
// TypeScript
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
} 
 
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 
 
console.log("Customer 对象 ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  
 
var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
} 
 
console.log("Employee  对象 ") 
console.log(employee.firstName) 
console.log(employee.lastName)
```
> 需要注意接口不能转换为 JavaScript。 它只是 TypeScript 的一部分。

> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
```
> 输出结果为：
>
>> Customer 对象
Tom
Hanks
Hi there
Employee  对象
Jim
Blakes

### 联合类型和接口
> 以下实例演示了如何在接口中使用联合类型：

``` js
// TypeScript
interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
} 
 
// commandline 是字符串
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  
 
// commandline 是字符串数组
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  
 
// commandline 是一个函数表达式
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
var fn:any = options.commandline; 
console.log(fn());
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
// commandline 是字符串
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
// commandline 是字符串数组
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
// commandline 是一个函数表达式
options = { program: "test1", commandline: function () { return "**Hello World**"; } };
var fn = options.commandline;
console.log(fn());
```
> 输出结果为：
>
>> Hello
Hello
World
\*\*Hello World\*\*

### 接口和数组
> 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。

> 设置元素为字符串类型：

``` js
// 实例
interface namelist { 
   [index:number]:string 
} 
 
// 类型一致，正确
var list2:namelist = ["Google","Runoob","Taobao"]
// 错误元素 1 不是 string 类型
// var list2:namelist = ["Runoob",1,"Taobao"]
```
> 如果使用了其他类型会报错：

``` js
// 实例
interface namelist { 
   [index:number]:string 
} 
 
// 类型一致，正确
// var list2:namelist = ["Google","Runoob","Taobao"]
// 错误元素 1 不是 string 类型
var list2:namelist = ["John",1,"Bran"]
```
> 执行后报错如下，显示类型不一致：

``` js
test.ts:8:30 - error TS2322: Type 'number' is not assignable to type 'string'.

8 var list2:namelist = ["John",1,"Bran"]
                               ~

  test.ts:2:4
    2    [index:number]:string
         ~~~~~~~~~~~~~~~~~~~~~
    The expected type comes from this index signature.


Found 1 error.
```

``` js
// TypeScript
interface ages { 
   [index:string]:number 
} 
 
var agelist:ages; 
 // 类型正确 
agelist["runoob"] = 15  
 
// 类型错误，输出  error TS2322: Type '"google"' is not assignable to type 'number'.
// agelist[2] = "google"
```

### 接口继承
> 接口继承就是说接口可以通过其他接口来扩展自己。

> Typescript 允许接口继承多个接口。

> 继承使用关键字 extends。

> 单接口继承语法格式：
>
>> Child_interface_name extends super_interface_name

> 多接口继承语法格式：
>
>> Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name

> 继承的各个接口使用逗号 , 分隔。

### 单继承实例
``` js
// TypeScript
interface Person { 
   age:number 
} 
 
interface Musician extends Person { 
   instrument:string 
} 
 
var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("年龄:  "+drummer.age)
console.log("喜欢的乐器:  "+drummer.instrument)
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("年龄:  " + drummer.age);
console.log("喜欢的乐器:  " + drummer.instrument);
```

> 输出结果为：
>
>>年龄:  27
喜欢的乐器:  Drums

### 多继承实例
``` js
TypeScript
interface IParent1 { 
    v1:number 
} 
 
interface IParent2 { 
    v2:number 
} 
 
interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
JavaScript
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2);
```

> 输出结果为：
>
>> value 1: 12 value 2: 23

## 类
### TypeScript 类
> TypeScript 是面向对象的 JavaScript。

> 类描述了所创建的对象共同的属性和方法。

> TypeScript 支持面向对象的所有特性，比如 类、接口等。

> TypeScript 类定义方式如下：
>
>> class class_name { 
    // 类作用域
}

> 定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：

1. 字段 − 字段是类里面声明的变量。字段表示对象的有关数据。

2. 构造函数 − 类实例化时调用，可以为类的对象分配内存。

3. 方法 − 方法为对象要执行的操作。

#### 实例
> 创建一个 Person 类：

``` js
// TypeScript
class Person {
}
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
```

### 创建类的数据成员
> 以下实例我们声明了类 Car，包含字段为 engine，构造函数在类实例化后初始化字段 engine。

> this 关键字表示当前类实例化的对象。注意构造函数的参数名与字段名相同，this.engine 表示类的字段。

> 此外我们也在类中定义了一个方法 disp()。

``` js
// TypeScript
class Car { 
    // 字段 
    engine:string; 
 
    // 构造函数 
    constructor(engine:string) { 
        this.engine = engine 
    }  
 
    // 方法 
    disp():void { 
        console.log("发动机为 :   "+this.engine) 
    } 
}
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var Car = /** @class */ (function () {
    // 构造函数 
    function Car(engine) {
        this.engine = engine;
    }
    // 方法 
    Car.prototype.disp = function () {
        console.log("发动机为 :   " + this.engine);
    };
    return Car;
}());
```

### 创建实例化对象
> 我们使用 new 关键字来实例化类的对象，语法格式如下：
>
>> var object_name = new class_name([ arguments ])

> 类实例化时会调用构造函数，例如：
>
>> var obj = new Car("Engine 1")

> 类中的字段属性和方法可以使用 . 号来访问：

``` js
// 访问属性
obj.field_name 

// 访问方法
obj.function_name()
```

#### 完整实例
> 以下实例创建来一个 Car 类，然后通过关键字 new 来创建一个对象并访问属性和方法：

``` js
// TypeScript
class Car { 
   // 字段
   engine:string; 
   
   // 构造函数
   constructor(engine:string) { 
      this.engine = engine 
   }  
   
   // 方法
   disp():void { 
      console.log("函数中显示发动机型号  :   "+this.engine) 
   } 
} 
 
// 创建一个对象
var obj = new Car("XXSY1")
 
// 访问字段
console.log("读取发动机型号 :  "+obj.engine)  
 
// 访问方法
obj.disp()
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log("函数中显示发动机型号  :   " + this.engine);
    };
    return Car;
}());
// 创建一个对象
var obj = new Car("XXSY1");
// 访问字段
console.log("读取发动机型号 :  " + obj.engine);
// 访问方法
obj.disp();
```
> 输出结果为：
>
>>读取发动机型号 :  XXSY1
函数中显示发动机型号  :   XXSY1

### 类的继承
> TypeScript 支持继承类，即我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类。

> 类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。

> TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）。

> 语法格式如下：
>
>> class child_class_name extends parent_class_name

#### 实例
> 类的继承：实例中创建了 Shape 类，Circle 类继承了 Shape 类，Circle 类可以直接使用 Area 属性：

``` js
// TypeScript
class Shape { 
   Area:number 
   
   constructor(a:number) { 
      this.Area = a 
   } 
} 
 
class Circle extends Shape { 
   disp():void { 
      console.log("圆的面积:  "+this.Area) 
   } 
}
  
var obj = new Circle(223); 
obj.disp()
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("圆的面积:  " + this.Area);
    };
    return Circle;
}(Shape));
var obj = new Circle(223);
obj.disp();
```

> 输出结果为：
>
>> 圆的面积:  223

> 需要注意的是子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承，如下实例：

``` js
// TypeScript
class Root { 
   str:string; 
} 
 
class Child extends Root {} 
class Leaf extends Child {} // 多重继承，继承了 Child 和 Root 类
 
var obj = new Leaf(); 
obj.str ="hello" 
console.log(obj.str)
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); // 多重继承，继承了 Child 和 Root 类
var obj = new Leaf();
obj.str = "hello";
console.log(obj.str);
```

> 输出结果为：
>
>> hello

### 继承类的方法重写
> 类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。

> 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。

``` js
// TypeScript
class PrinterClass { 
   doPrint():void {
      console.log("父类的 doPrint() 方法。") 
   } 
} 
 
class StringPrinter extends PrinterClass { 
   doPrint():void { 
      super.doPrint() // 调用父类的函数
      console.log("子类的 doPrint()方法。")
   } 
}
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
JavaScript
var obj = new StringPrinter() 
obj.doPrint()
 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("父类的 doPrint() 方法。");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this); // 调用父类的函数
        console.log("子类的 doPrint()方法。");
    };
    return StringPrinter;
}(PrinterClass));
var obj = new StringPrinter();
obj.doPrint();
```

> 输出结果为：
>
>> 父类的 doPrint() 方法。
子类的 doPrint()方法。

### static 关键字
> static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。

``` js
// TypeScript
class StaticMem {  
   static num:number; 
   
   static disp():void { 
      console.log("num 值为 "+ StaticMem.num) 
   } 
} 
 
StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // 初始化静态变量
StaticMem.disp(); // 调用静态方法
```

> 输出结果为：
>
>> num 值为 12

### instanceof 运算符
> instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。

``` js
// TypeScript
class Person{ } 
var obj = new Person() 
var isPerson = obj instanceof Person; 
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
JavaScript
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj = new Person();
var isPerson = obj instanceof Person;
console.log(" obj 对象是 Person 类实例化来的吗？ " + isPerson);
```

> 输出结果为：
>
>> obj 对象是 Person 类实例化来的吗？ true

### 访问控制修饰符
> TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。

1. public（默认） : 公有，可以在任何地方被访问。
2. protected : 受保护，可以被其自身以及其子类访问。
3. private : 私有，只能被其定义所在的类访问。

> 以下实例定义了两个变量 str1 和 str2，str1 为 public，str2 为 private，实例化后可以访问 str1，如果要访问 str2 则会编译错误。

``` js
// TypeScript
class Encapsulate { 
   str1:string = "hello" 
   private str2:string = "world" 
}
 
var obj = new Encapsulate() 
console.log(obj.str1)     // 可访问 
console.log(obj.str2)   // 编译错误， str2 是私有的
```

### 类和接口
> 类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。

> 以下实例红 AgriLoan 类实现了 ILoan 接口：

``` js
// TypeScript
interface ILoan { 
   interest:number 
} 
 
class AgriLoan implements ILoan { 
   interest:number 
   rebate:number 
   
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
} 
 
var obj = new AgriLoan(10,1) 
console.log("利润为 : "+obj.interest+"，抽成为 : "+obj.rebate )
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj = new AgriLoan(10, 1);
console.log("利润为 : " + obj.interest + "，抽成为 : " + obj.rebate);
```

> 输出结果为：
>
>> 利润为 : 10，抽成为 : 1

## 对象
### TypeScript 对象
> 对象是包含一组键值对的实例。 值可以是标量、函数、数组、对象等，如下实例：

``` js
var object_name = { 
    key1: "value1", // 标量
    key2: "value",  
    key3: function() {
        // 函数
    }, 
    key4:["content1", "content2"] //集合
}
```
> 以上对象包含了标量，函数，集合(数组或元组)。

#### 对象实例
``` js
// TypeScript
var sites = { 
   site1:"Runoob", 
   site2:"Google" 
}; 
// 访问对象的值
console.log(sites.site1) 
console.log(sites.site2)
```
> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var sites = { 
   site1:"Runoob", 
   site2:"Google" 
}; 
// 访问对象的值
console.log(sites.site1) 
console.log(sites.site2)
```

> 输出结果为：
>
>> Runoob
Google

### TypeScript 类型模板
> 假如我们在 JavaScript 定义了一个对象：

``` js
var sites = { 
   site1:"Runoob", 
   site2:"Google" 
};
```

> 这时如果我们想在对象中添加方法，可以做以下修改：
>
>> sites.sayHello = function(){ return "hello";}

> 如果在 TypeScript 中使用以上方式则会出现编译错误，因为Typescript 中的对象必须是特定类型的实例。

``` js
// TypeScript
var sites = {
    site1: "Runoob",
    site2: "Google",
    sayHello: function () { } // 类型模板
};
sites.sayHello = function () {
    console.log("hello " + sites.site1);
};
sites.sayHello();
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var sites = {
    site1: "Runoob",
    site2: "Google",
    sayHello: function () { } // 类型模板
};
sites.sayHello = function () {
    console.log("hello " + sites.site1);
};
sites.sayHello();
```

> 输出结果为：
>
>> hello Runoob

> 此外对象也可以作为一个参数传递给函数，如下实例：

``` js
// TypeScript
var sites = { 
    site1:"Runoob", 
    site2:"Google",
}; 
var invokesites = function(obj: { site1:string, site2 :string }) { 
    console.log("site1 :"+obj.site1) 
    console.log("site2 :"+obj.site2) 
} 
invokesites(sites)
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
var sites = {
    site1: "Runoob",
    site2: "Google"
};
var invokesites = function (obj) {
    console.log("site1 :" + obj.site1);
    console.log("site2 :" + obj.site2);
};
invokesites(sites);
```

> 输出结果为：
>
>> site1 :Runoob
site2 :Google

### 鸭子类型(Duck Typing)
> 鸭子类型（英语：duck typing）是动态类型的一种风格，是多态(polymorphism)的一种形式。

> 在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由"当前方法和属性的集合"决定。

::: tip
可以这样表述：

"当看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子。"
:::

::: tip
在鸭子类型中，关注点在于对象的行为能做什么，而不是关注对象所属的类型。例如，在不使用鸭子类型的语言中，我们可以编写一个函数，它接受一个类型为"鸭子"的对象，并调用它的"走"和"叫"方法。在使用鸭子类型的语言中，这样的一个函数可以接受一个任意类型的对象，并调用它的"走"和"叫"方法。如果这些需要被调用的方法不存在，那么将引发一个运行时错误。任何拥有这样的正确的"走"和"叫"方法的对象都可被函数接受的这种行为引出了以上表述，这种决定类型的方式因此得名。
:::

``` js
interface IPoint { 
    x:number 
    y:number 
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
} 
 
// 正确
var newPoint = addPoints({x:3,y:4},{x:5,y:1})  
 
// 错误 
var newPoint2 = addPoints({x:1},{x:4,y:3})
```

## 命名空间
### TypeScript 命名空间
> 命名空间一个最明确的目的就是解决重名问题。

> 假设这样一种情况，当一个班上有两个名叫小明的学生时，为了明确区分它们，我们在使用名字之外，不得不使用一些额外的信息，比如他们的姓（王小明，李小明），或者他们父母的名字等等。

> 命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的。
>
> 这样，在一个新的名字空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他名字空间中。

> TypeScript 中命名空间使用 namespace 来定义，语法格式如下：

``` js
namespace SomeNameSpaceName { 
   export interface ISomeInterfaceName {      }  
   export class SomeClassName {      }  
}
```

> 以上定义了一个命名空间 SomeNameSpaceName，如果我们需要在外部可以调用 SomeNameSpaceName 中的类和接口，则需要在类和接口添加 export 关键字。

> 要在另外一个命名空间调用语法格式为：
>
>> SomeNameSpaceName.SomeClassName;

> 如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它，语法格式如下：
>
>> /// <reference path = "SomeFileName.ts" />

> 以下实例演示了命名空间的使用，定义在不同文件中：

``` js
// IShape.ts 文件代码：
namespace Drawing { 
    export interface IShape { 
        draw(); 
    }
}
```

``` js
// Circle.ts 文件代码：
/// <reference path = "IShape.ts" /> 
namespace Drawing { 
    export class Circle implements IShape { 
        public draw() { 
            console.log("Circle is drawn"); 
        }  
    }
}
```

``` js
// Triangle.ts 文件代码：
/// <reference path = "IShape.ts" /> 
namespace Drawing { 
    export class Triangle implements IShape { 
        public draw() { 
            console.log("Triangle is drawn"); 
        } 
    } 
}
```

``` js
// TestShape.ts 文件代码：
/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
/// <reference path = "Triangle.ts" />  
function drawAllShapes(shape:Drawing.IShape) { 
    shape.draw(); 
} 
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
```

> 使用 tsc 命令编译以上代码：
>
>> tsc --out app.js TestShape.ts  

> 得到以下 JavaScript 代码：

``` js
// JavaScript
/// <reference path = "IShape.ts" /> 
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
/// <reference path = "IShape.ts" /> 
var Drawing;
(function (Drawing) {
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("Triangle is drawn");
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
/// <reference path = "Triangle.ts" />  
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
```

> 使用 node 命令查看输出结果为：
>
>> $ node app.js
Circle is drawn
Triangle is drawn

### 嵌套命名空间
> 命名空间支持嵌套，即你可以将命名空间定义在另外一个命名空间里头。

``` js
namespace namespace_name1 { 
    export namespace namespace_name2 {
        export class class_name {    } 
    } 
}
```

> 成员的访问使用点号 . 来实现，如下实例：

``` js
// Invoice.ts 文件代码：
namespace Runoob { 
   export namespace invoiceApp { 
      export class Invoice { 
         public calculateDiscount(price: number) { 
            return price * .40; 
         } 
      } 
   } 
}
```

``` js
// InvoiceTest.ts 文件代码：
/// <reference path = "Invoice.ts" />
var invoice = new Runoob.invoiceApp.Invoice(); 
console.log(invoice.calculateDiscount(500));
```

> 使用 tsc 命令编译以上代码：
>
>> tsc --out app.js InvoiceTest.ts

> 得到以下 JavaScript 代码：

``` js
JavaScript
var Runoob;
(function (Runoob) {
    var invoiceApp;
    (function (invoiceApp) {
        var Invoice = /** @class */ (function () {
            function Invoice() {
            }
            Invoice.prototype.calculateDiscount = function (price) {
                return price * .40;
            };
            return Invoice;
        }());
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = Runoob.invoiceApp || (Runoob.invoiceApp = {}));
})(Runoob || (Runoob = {}));
/// <reference path = "Invoice.ts" />
var invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));
```

> 使用 node 命令查看输出结果为：
>
>> $ node app.js
200

## 模块
### TypeScript 模块
> TypeScript 模块的设计理念是可以更换的组织代码。

> 模块是在其自身的作用域里执行，并不是在全局作用域，这意味着定义在模块里面的变量、函数和类等在模块外部是不可见的，除非明确地使用 export 导出它们。类似地，我们必须通过 import 导入其他模块导出的变量、函数、类等。

> 两个模块之间的关系是通过在文件级别上使用 import 和 export 建立的。

> 模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。 大家最熟知的JavaScript模块加载器是服务于 Node.js 的 CommonJS 和服务于 Web 应用的 Require.js。

> 此外还有有 SystemJs 和 Webpack。

> 模块导出使用关键字 export 关键字，语法格式如下：

``` js
// 文件名 : SomeInterface.ts 
export interface SomeInterface { 
   // 代码部分
}
```

> 要在另外一个文件使用该模块就需要使用 import 关键字来导入:
>
>> import someInterfaceRef = require("./SomeInterface");

#### 实例
``` js
// IShape.ts 文件代码：
/// <reference path = "IShape.ts" /> 
export interface IShape { 
   draw(); 
}
```

``` js
// Circle.ts 文件代码：
import shape = require("./IShape"); 
export class Circle implements shape.IShape { 
   public draw() { 
      console.log("Cirlce is drawn (external module)"); 
   } 
}
```

``` js
// Triangle.ts 文件代码：
import shape = require("./IShape"); 
export class Triangle implements shape.IShape { 
   public draw() { 
      console.log("Triangle is drawn (external module)"); 
   } 
}
```

``` js
// TestShape.ts 文件代码：
import shape = require("./IShape"); 
import circle = require("./Circle"); 
import triangle = require("./Triangle");  
 
function drawAllShapes(shapeToDraw: shape.IShape) {
   shapeToDraw.draw(); 
} 
 
drawAllShapes(new circle.Circle()); 
drawAllShapes(new triangle.Triangle());
```

> 使用 tsc 命令编译以上代码（AMD）：
>
>> tsc --module amd TestShape.ts 

> 得到以下 JavaScript 代码：

``` js
// IShape.js 文件代码：
define(["require", "exports"], function (require, exports) {
});
```

``` js
// Circle.js 文件代码：
define(["require", "exports"], function (require, exports) {
   var Circle = (function () {
      function Circle() {
      }
      Circle.prototype.draw = function () {
         console.log("Cirlce is drawn (external module)");
      };
      return Circle;
   })();
   exports.Circle = Circle;
});
```

``` js
// Triangle.js 文件代码：
define(["require", "exports"], function (require, exports) {
   var Triangle = (function () {
      function Triangle() {
      }
      Triangle.prototype.draw = function () {
         console.log("Triangle is drawn (external module)");
      };
      return Triangle;
   })();
   exports.Triangle = Triangle;
});
```

``` js
// TestShape.js 文件代码：
define(["require", "exports", "./Circle", "./Triangle"], 
   function (require, exports, circle, triangle) {
   
   function drawAllShapes(shapeToDraw) {
      shapeToDraw.draw();
   }
   drawAllShapes(new circle.Circle());
   drawAllShapes(new triangle.Triangle());
});
```

> 使用 tsc 命令编译以上代码（Commonjs）：
>
>> tsc --module commonjs TestShape.ts

> 得到以下 JavaScript 代码：

``` js
// Circle.js 文件代码：
var Circle = (function () {
   function Circle() {
   }
   Circle.prototype.draw = function () {
      console.log("Cirlce is drawn");
   };
   return Circle;
})();
 
exports.Circle = Circle;
```

``` js
// Triangle.js 文件代码：
var Triangle = (function () {
   function Triangle() {
   }
   Triangle.prototype.draw = function () {
      console.log("Triangle is drawn (external module)");
   };
   return Triangle;
})();
exports.Triangle = Triangle;
```

``` js
// TestShape.js 文件代码：
var circle = require("./Circle");
var triangle = require("./Triangle");
 
function drawAllShapes(shapeToDraw) {
   shapeToDraw.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
```

> 输出结果为：
>
>> Cirlce is drawn (external module)
Triangle is drawn (external module)


## 声明文件
> TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。

> 假如我们想使用第三方库，比如 jQuery，我们通常这样获取一个 id 是 foo 的元素：

``` js
$('#foo');
// 或
jQuery('#foo');
```

> 但是在 TypeScript 中，我们并不知道 $ 或 jQuery 是什么东西：

``` js
jQuery('#foo');

// index.ts(1,1): error TS2304: Cannot find name 'jQuery'.
```

> 这时，我们需要使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对：

``` js
declare var jQuery: (selector: string) => any;

jQuery('#foo');
```

> declare 定义的类型只会用于编译时的检查，编译结果中会被删除。

> 上例的编译结果是：
>
>> jQuery('#foo');

### 声明文件
> 声明文件以 .d.ts 为后缀，例如：
>
>> runoob.d.ts

> 声明文件或模块的语法格式如下：
>
>> declare module Module_Name {
}

> TypeScript 引入声明文件语法格式：
>
>> /// <reference path = " runoob.d.ts" />

> 当然，很多流行的第三方库的声明文件不需要我们定义了，比如 jQuery 已经有人帮我们定义好了：[jQuery in DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jquery/index.d.ts)。

### 实例
> 以下定义一个第三方库来演示：

``` js
// CalcThirdPartyJsLib.js 文件代码：
var Runoob;  
(function(Runoob) {
    var Calc = (function () { 
        function Calc() { 
        } 
    })
    Calc.prototype.doSum = function (limit) {
        var sum = 0; 
 
        for (var i = 0; i <= limit; i++) { 
            sum = sum + i; 
        }
        return sum; 
    }
    Runoob.Calc = Calc; 
    return Calc; 
})(Runoob || (Runoob = {})); 
var test = new Runoob.Calc();
```

> 如果我们想在 TypeScript 中引用上面的代码，则需要设置声明文件 Calc.d.ts，代码如下：

``` js
// Calc.d.ts 文件代码：
declare module Runoob { 
   export class Calc { 
      doSum(limit:number) : number; 
   }
}
```

> 声明文件不包含实现，它只是类型声明，把声明文件加入到 TypeScript 中：

``` js
// CalcTest.ts 文件代码：
/// <reference path = "Calc.d.ts" /> 
var obj = new Runoob.Calc(); 
// obj.doSum("Hello"); // 编译错误
console.log(obj.doSum(10));
```

> 下面这行导致编译错误，因为我们需要传入数字参数：
>
>> obj.doSum("Hello");

> 使用 tsc 命令来编译以上代码文件：
>
>> tsc CalcTest.ts

> 生成的 JavaScript 代码如下：

``` js
// CalcTest.js 文件代码：
/// <reference path = "Calc.d.ts" /> 
var obj = new Runoob.Calc();
//obj.doSum("Hello"); // 编译错误
console.log(obj.doSum(10));
```

> 最后我们编写一个 runoob.html 文件，引入 CalcTest.js 文件及第三方库 CalcThirdPartyJsLib.js：
``` js
// 实例
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
<script src = "CalcThirdPartyJsLib.js"></script> 
<script src = "CalcTest.js"></script> 
</head>
<body>
    <h1>声明文件测试</h1>
    <p>菜鸟测试一下。</p>
</body>
</html>
```

> 浏览器打开该文件输出结果如下：

![这是图片](/images/ts_declare_file.jpg "Magic Gardens")

## 测验
