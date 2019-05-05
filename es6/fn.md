### 带参数默认值的函数

```
function makeRequest(url, timeout, callback) {
	timeout = timeout || 2000;
	callback = callback || function() {}
}
```

```
function makeRequest(url, timeout, callback) {
	timeout = (typeof timeout !== 'undefined') ? timeout : 2000;
	callback = (typeof callback !== 'undefined') ? callback : function(){};
```

### es6中的参数默认值

```
function makeRequest(url, timeout = 2000, callback = function(){}) {}
```

如果其余两个参数都用来传递 那么默认值不会被使用

只有其他参数值使用undefined时 才会使用默认值

### 参数默认值如何影响arguments对象

arguments对象会在使用参数默认值时有不同的表现在es5非严格模式下 arguments对象会反应出具名参数的变化

```
function minArgs(first, second) {
	console.log(first === arguments[0])
	console.log(second === arguments[1])
	first === 'c';
	second === 'd';
	console.log(first === arguments[0])
	console.log(second === arguments[1])
}
```

在非严格模式下 arguments对象总是会被更新反应出具名参数的变化 当参数值发生改变时 arguments对应的值也相应的更新了

### 参数默认值表达式

### 参数默认值的暂时性死区

### 使用不具名参数

### es5中的不具名参数

### 剩余参数

### 函数构造器的增强能力

### 扩展运算符

与剩余参数关联密切的就是扩展运算符

```
var arr = [1, 3, 5, 7]
Math.max.apply(Math, arr);
Math.max(...arr);
```

### es6属性名称

### 名称属性特殊情况

### 箭头函数

### 没有this绑定

```
箭头函数sort排列
[1, '25', '5', 8].sort((a, b) => a - b)
从小到大排列
```

### 没有arguments绑定










