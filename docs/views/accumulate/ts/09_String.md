## 09. String
> String 对象用于处理文本（字符串）。

> 语法
``` js
var txt = new String("string");
或者更简单方式：
var txt = "string";
```

## String 对象属性
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

## String 方法
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

