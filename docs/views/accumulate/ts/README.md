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

``` js
var a: number = 12 
var b:number = 10  
 
a = b 
console.log("a = b: "+a)
 
a += b
console.log("a+=b: "+a)
 
a -= b 
console.log("a-=b: "+a)
 
a *= b 
console.log("a*=b: "+a)
 
a /= b 
console.log("a/=b: "+a)    
 
a %= b 
console.log("a%=b: "+a)
```

> 使用 tsc 命令编译以上代码得到如下 JavaScript 代码：

``` js
var a = 12;
var b = 10;
a = b;
console.log("a = b: " + a);
a += b;
console.log("a+=b: " + a);
a -= b;
console.log("a-=b: " + a);
a *= b;
console.log("a*=b: " + a);
a /= b;
console.log("a/=b: " + a);
a %= b;
console.log("a%=b: " + a);
```

> 执行以上 JavaScript 代码，输出结果为：

``` js
a = b: 10
a+=b: 20
a-=b: 10
a*=b: 100
a/=b: 10
a%=b: 0
```
### 三元运算符 (?)
> 三元运算有 3 个操作数，并且需要判断布尔表达式的值。该运算符的主要是决定哪个值应该赋值给变量。

``` js
Test ? expr1 : expr2
```

> 1. Test − 指定的条件语句
> 2. expr1 − 如果条件语句 Test 返回 true 则返回该值
> 3. expr2 − 如果条件语句 Test 返回 false 则返回该值

``` js
// 实例
var num:number = -2 
var result = num > 0 ? "大于 0" : "小于 0，或等于 0" 
console.log(result)
```

> 实例中用于判断变量是否大于 0。
>
> 使用 tsc 命令编译以上代码得到如下 JavaScript 代码：

``` js
var num = -2;
var result = num > 0 ? "大于 0" : "小于 0，或等于 0";
console.log(result); js
```

> 实例输出结果如下：
``` js
// 小于 0，或等于 0
```

### 类型运算符
#### typeof 运算符
> typeof 是一元运算符，返回操作数的数据类型。
>
> 查看以下实例:
``` js
var num = 12 
console.log(typeof num);   //输出结果: number
```
> 使用 tsc 命令编译以上代码得到如下 JavaScript 代码：
``` js
var num = 12;
console.log(typeof num); //输出结果: number
```
> 以上实例输出结果如下：
``` js
number
```

#### instanceof
> instanceof 运算符用于判断对象是否为指定的类型，后面章节我们会具体介绍它。

### 其他运算符
#### 负号运算符(-)
> 更改操作数的符号，查看以下实例：
``` js
var x:number = 4 
var y = -x; 
console.log("x 值为: ",x);   // 输出结果 4 
console.log("y 值为: ",y);   // 输出结果 -4
```
> 使用 tsc 命令编译以上代码得到如下 JavaScript 代码：
``` js
var x = 4;
var y = -x;
console.log("x 值为: ", x); // 输出结果 4 
console.log("y 值为: ", y); // 输出结果 -4
```
> 以上实例输出结果如下：
``` js
x 值为:  4
y 值为:  -4
```

#### 字符串运算符: 连接运算符 (+)
> + 运算符可以拼接两个字符串，查看以下实例：
``` js
var msg:string = "RUNOOB"+".COM" 
console.log(msg)
```
> 使用 tsc 命令编译以上代码得到如下 JavaScript 代码：
``` js
var msg = "RUNOOB" + ".COM";
console.log(msg);
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

### if语句
> TypeScript if 语句由一个布尔表达式后跟一个或多个语句组成。
#### 语法
> 语法格式如下所示：
``` js
if(boolean_expression){
    # 在布尔表达式 boolean_expression 为 true 执行
}
```
> 如果布尔表达式 boolean_expression为 true，则 if 语句内的代码块将被执行。如果布尔表达式为 false，则 if 语句结束后的第一组代码（闭括号后）将被执行。

### if...else 语句
> 一个 if 语句后可跟一个可选的 else 语句，else 语句在布尔表达式为 false 时执行。

### if...else if....else 语句
> if...else if....else 语句在执行多个判断条件的时候很有用。
``` js
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
> 1. 一个 if 判断语句可以有 0 或 1 个 else 语句，她必需在 else..if 语句后面。
> 2. 一个 if 判断语句可以有 0 或多个 else..if，这些语句必需在 else 之前。
> 3. 一旦执行了 else..if 内的代码，后面的 else..if 或 else 将不再执行。

### switch…case 语句
> 一个 switch 语句允许测试一个变量等于多个值时的情况。
> 每个值称为一个 case，且被测试的变量会对每个 switch case 进行检查。

``` js
switch(expression){
    case constant-expression  :
       statement(s);
       break; /* 可选的 */
    case constant-expression  :
       statement(s);
       break; /* 可选的 */
  
    /* 您可以有任意数量的 case 语句 */
    default : /* 可选的 */
       statement(s);
}
```
> switch 语句必须遵循下面的规则：
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

### for循环
> TypeScript for 循环用于多次执行一个语句序列，简化管理循环变量的代码。

``` js
for ( init; condition; increment ){
    statement(s);
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
``` js
var j:any; 
var n:any = "a b c" 
 
for(j in n) {
    console.log(n[j])  
}
```
``` js
var j;
var n = "a b c";
for (j in n) {
    console.log(n[j]);
}
```
``` js 
a

b

c
```

### for…of 、forEach、every 和 some 循环
> 此外，TypeScript 还支持 for…of 、forEach、every 和 some 循环。

> for...of 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

``` js
let someArray = [1, "string", false];
 
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
```

> forEach、every 和 some 是 JavaScript 的循环语法，TypeScript 作为 JavaScript 的语法超集，当然默认也是支持的。
>
> 因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。

``` js
// TypeScript forEach 循环
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
});
```

``` js
// TypeScript every 循环
let list = [4, 5, 6];
list.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
});
```

### while 循环
> while 语句在给定条件为 true 时，重复执行语句或语句组。循环主体执行之前会先测试条件。
``` js
while(condition)
{
   statement(s);
}
```
> 在这里，statement(s) 可以是一个单独的语句，也可以是几个语句组成的代码块。
>
> condition 可以是任意的表达式，当条件为 true 时执行循环。 当条件为 false 时，程序流将退出循环。

> while 循环的关键点是循环可能一次都不会执行。当条件为 false 时，会跳过循环主体，直接执行紧接着 while 循环的下一条语句。

``` js
// TypeScript
var num:number = 5; 
var factorial:number = 1; 
 
while(num >=1) { 
    factorial = factorial * num; 
    num--; 
} 
console.log("5 的阶乘为："+factorial);
```
> 编译以上代码得到如下 JavaScript 代码：
``` js
// JavaScript
var num = 5;
var factorial = 1;
while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("5 的阶乘为：" + factorial);
```
> 输出结果为：
>
> 5 的阶乘为：120

### do...while 循环
> 不像 for 和 while 循环，它们是在循环头部测试循环条件。do...while 循环是在循环的尾部检查它的条件。

``` js
do
{
   statement(s);
}while( condition );
```
> 请注意，条件表达式出现在循环的尾部，所以循环中的 statement(s) 会在条件被测试之前至少执行一次。
>
> 如果条件为 true，控制流会跳转回上面的 do，然后重新执行循环中的 statement(s)。这个过程会不断重复，直到给定条件变为 false 为止。

``` js
// TypeScript
var n:number = 10;
do { 
    console.log(n); 
    n--; 
} while(n>=0);
```
``` js
// JavaScript
var num = 5;
var n = 10;
do {
    console.log(n);
    n--;
} while (n >= 0);
```
``` js
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

``` js
TypeScript
var i:number = 1 
while(i<=10) { 
    if (i % 5 == 0) {   
        console.log ("在 1~10 之间第一个被 5 整除的数为 : "+i) 
        break     // 找到一个后退出循环
    } 
    i++ 
}  // 输出 5 然后程序执行结束
```
``` js
JavaScript
var i = 1;
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("在 1~10 之间第一个被 5 整除的数为 : " + i);
        break; // 找到一个后退出循环
    }
    i++;
} // 输出 5 然后程序执行结束
```
``` js
// result:
// 在 1~10 之间第一个被 5 整除的数为 : 5
```

### continue 语句
> continue 语句有点像 break 语句。但它不是强制终止，continue 会跳过当前循环中的代码，强迫开始下一次循环。

> 对于 for 循环，continue 语句执行后自增语句仍然会执行。对于 while 和 do...while 循环，continue 语句重新执行条件判断语句。

``` js
// TypeScript
var num:number = 0
var count:number = 0;
 
for(num=0;num<=20;num++) {
    if (num % 2==0) {
        continue
    }
    count++
}
console.log ("0 ~20 之间的奇数个数为: "+count)    //输出10个偶数
```
``` js
// 编译以上代码得到如下 JavaScript 代码：

// JavaScript
var num = 0;
var count = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue;
    }
    count++;
}
console.log("0 ~20 之间的奇数个数为: " + count); //输出 10
```

``` js
// result:
// 0 ~20 之间的奇数个数为: 10
```

### 无限循环
> 无限循环就是一直在运行不会停止的循环。 for 和 while 循环都可以创建无限循环。

> for 创建无限循环语法格式：
``` js
for(;;) { 
   // 语句
}
```

> 实例
``` js
for(;;) { 
   console.log("这段代码会不停的执行") 
}
```

> while 创建无限循环语法格式：
``` js
while(true) { 
   // 语句
} 
```

> 实例
``` js
while(true) { 
   console.log("这段代码会不停的执行") 
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
``` js
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

``` js
TypeScript
function test() {   // 函数定义
    console.log("调用函数") 
} 
test()             // 调用函数
```

### 函数返回值
> 有时，我们会希望函数将执行的结果返回到调用它的地方。
>
> 通过使用 return 语句就可以实现。
>
> 在使用 return 语句时，函数会停止执行，并返回指定的值。
>
> 语法格式如下所示：
``` js
function function_name():return_type { 
    // 语句
    return value; 
}
```
1. return_type 是返回值的类型。

2. return 关键词后跟着要返回的结果。

3. 一般情况下，一个函数只有一个 return 语句。

4. 返回值的类型需要与函数定义的返回类型(return_type)一致。

``` js
// TypeScript
// 函数定义
function greet():string { // 返回一个字符串
    return "Hello World" 
} 
 
function caller() { 
    var msg = greet() // 调用 greet() 函数 
    console.log(msg) 
} 
 
// 调用函数
caller()
```
1. 实例中定义了函数 greet()，返回值的类型为 string。

2. greet() 函数通过 return 语句返回给调用它的地方，即变量 msg，之后输出该返回值。。

> 编译以上代码，得到以下 JavaScript 代码：

``` js
// JavaScript
// 函数定义
function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); // 调用 greet() 函数 
    console.log(msg);
}
// 调用函数
caller();
```
### 带参数函数
> 在调用函数时，您可以向其传递值，这些值被称为参数。
>
> 这些参数可以在函数中使用。
>
> 您可以向函数发送多个参数，每个参数使用逗号 , 分隔：
>
> 语法格式如下所示：

``` js
function func_name( param1 [:datatype], param2 [:datatype]) {   
}
```
1. param1、param2 为参数名。

2. datatype 为参数类型。

``` js
// TypeScript
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(1,2))
```
1. 实例中定义了函数 add()，返回值的类型为 number。

2. add() 函数中定义了两个 number 类型的参数，函数内将两个参数相加并返回。

编译以上代码，得到以下 JavaScript 代码：
``` js
// JavaScript
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
// result:
// 3
```
### 可选参数和默认参数
#### 可选参数
> 在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？。
``` js
// 实例

// TypeScript
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
 
let result1 = buildName("Bob");                  // 错误，缺少参数
let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");         // 正确
```
> 以下实例，我们将 lastName 设置为可选参数：
``` js
// TypeScript
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
 
let result1 = buildName("Bob");  // 正确
let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");  // 正确
```
> 可选参数必须跟在必需参数后面。 如果上例我们想让 firstName 是可选的，lastName 必选，那么就要调整它们的位置，把 firstName 放在后面。

> 如果都是可选参数就没关系。
#### 默认参数
> 我们也可以设置参数的默认值，这样在调用函数的时候，如果不传入该参数的值，则使用默认参数，语法格式为：
``` js
function function_name(param1[:type],param2[:type] = default_value) { 
}
```
::: tip
注意：参数不能同时设置为可选和默认。
:::

> 实例
>
> 以下实例函数的参数 rate 设置了默认值为 0.50，调用该函数时如果未传入参数则使用该默认值：
``` js
TypeScript
function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("计算结果: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
JavaScript
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
```
> 输出结果为：
>
> 计算结果:  500
> 计算结果:  300

### 剩余参数
> 有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。

> 剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。

``` js
TypeScript
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
  
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

> 函数的最后一个命名参数 restOfName 以 ... 为前缀，它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length（不包括）。

``` js
// TypeScript
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("和为：",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
// JavaScript
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
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
``` js
var res = function( [arguments] ) { ... }
```

#### 实例
> 不带参数匿名函数：
``` js
// TypeScript
var msg = function() { 
    return "hello world";  
} 
console.log(msg())
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
// JavaScript
var msg = function () {
    return "hello world";
};
console.log(msg());
```
> 输出结果为：
``` js
hello world
```

> 带参数匿名函数：

``` js
// TypeScript
var res = function(a:number,b:number) { 
    return a*b;  
}; 
console.log(res(12,2))
```

> 编译以上代码，得到以下 JavaScript 代码：
``` js
JavaScript
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
// result:
// 24
```

#### 匿名函数自调用
> 匿名函数自调用在函数后使用 () 即可：
``` js
// TypeScript
(function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
// JavaScript
(function () { 
    var x = "Hello!!";   
    console.log(x)    
})()
// result
// Hello!!
```

### 构造函数
> TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：

> 语法格式如下：
``` js
var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
```
> 参数说明：

1. arg1, arg2, ... argN：参数列表。
2. functionBody：一个含有包括函数定义的 JavaScript 语句的字符串。

> 实例
``` js
// TypeScript
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
// JavaScript
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);
// result
// 12
```

### 递归函数
> 递归函数即在函数内调用函数本身。

> 举个例子：
>
> 从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事呢！故事是什么呢？"从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事呢！故事是什么呢？'从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事呢！故事是什么呢？……'"

#### 实例
``` js
// TypeScript
function factorial(number) {
    if (number <= 0) {         // 停止执行
        return 1; 
    } else {     
        return (number * factorial(number - 1));     // 调用自身
    } 
}; 
console.log(factorial(6));      // 输出 720
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
// JavaScript
function factorial(number) {
    if (number <= 0) { // 停止执行
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // 调用自身
    }
}
;
console.log(factorial(6)); // 输出 720
// 输出结果为：
// 720
```
### Lambda 函数
> Lambda 函数也称之为箭头函数。

> 箭头函数表达式的语法比函数表达式更短。

> 函数只有一行语句：
``` js
( [param1, parma2,…param n] )=>statement;
```

#### 实例
> 以下实例声明了 lambda 表达式函数，函数返回两个数的和：
``` js
// TypeScript
var foo = (x:number)=>10 + x 
console.log(foo(100))      //输出结果为 110
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
// JavaScript
var foo = function (x) { return 10 + x; };
console.log(foo(100)); //输出结果为 110
// 输出结果为：
// 110
```

> 函数是一个语句块：
``` js
( [param1, parma2,…param n] )=> {
 
    // 代码块
}
```

#### 实例
> 以下实例声明了 lambda 表达式函数，函数返回两个数的和：
``` js
// TypeScript
var foo = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
} 
foo(100)
```

> 编译以上代码，得到以下 JavaScript 代码：

``` js
JavaScript
var foo = function (x) {
    x = 10 + x;
    console.log(x);
};
foo(100);
// 输出结果为：
// 110
```

> 我们可以不指定函数的参数类型，通过函数内来推断参数类型:
``` js
TypeScript
var func = (x)=> { 
    if(typeof x=="number") { 
        console.log(x+" 是一个数字") 
    } else if(typeof x=="string") { 
        console.log(x+" 是一个字符串") 
    }  
} 
func(12) 
func("Tom")
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
// JavaScript
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " 是一个数字");
    }
    else if (typeof x == "string") {
        console.log(x + " 是一个字符串");
    }
};
func(12);
func("Tom");
// 输出结果为：

// 12 是一个数字
// Tom 是一个字符串
```
> 单个参数 () 是可选的：
``` js
// TypeScript
var display = x => { 
    console.log("输出为 "+x) 
} 
display(12)
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
// JavaScript
var display = function (x) {
    console.log("输出为 " + x);
};
display(12);
// 输出结果为：

// 输出为 12
```
> 无参数时可以设置空括号：
``` js
TypeScript
var disp =()=> { 
    console.log("Function invoked"); 
} 
disp();
```
> 编译以上代码，得到以下 JavaScript 代码：
``` js
JavaScript
var disp = function () {
    console.log("调用函数");
};
disp();
// 输出结果为：

// 调用函数
```
### 函数重载
> 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

> 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

> 参数类型不同：

``` js
function disp(string):void; 
function disp(number):void;
```
> 参数数量不同：
``` js
function disp(n1:number):void; 
function disp(x:number,y:number):void;
```
> 参数类型顺序不同：
``` js
function disp(n1:number,s1:string):void; 
function disp(s:string,n:number):void;
```
> 如果参数类型不同，则参数类型应设置为 any。

> 参数数量不同你可以将不同的参数设置为可选。

#### 实例
> 以下实例定义了参数类型与参数数量不同：
``` js
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
``` js
JavaScript
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
// 输出结果为：

// abc
// undefined
// 1
// xyz
```


## Number

## String

## Array（数组）

## Map 对象

## 元组

## 联合类型

## 接口

## 类

## 对象

## 命名空间

## 模块

## 声明文件

## 测验
