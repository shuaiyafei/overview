> 作用域包含了一系列的气泡 每一个都可以作为容器 其中包含了标识符 (变量 函数)的定义

### 函数中的作用域

JavaScript具有基于函数的作用域 意味着每声明一个函数都会为其创建一个气泡 而其他结构都不会创建作用域气泡

```
function foo(a) {
	var b = 2;
	function bar() {
		//
	}
	
	var c = 3
}
```


无论标识符声明出现在作用域中的何处 这个标识所代表的变量或者函数都会附属所处作用域的气泡

### 隐藏内部实现

对函数的传统认知就是先声明一个函数 然后再向里面添加代码

在这个代码片段周围创建一个作用域气泡 因此无法从foo的外部对它进行访问

### 隐藏内部实现

先声明一个函数 然后再向里面添加代码
可以把变量和函数包含在一个函数的作用域 然后用这个作用域来隐藏它们

```
function doSomething(a) {
	b = a + doSomethingElse(a * 2)
	console.log(b * 3)
}

function dpSomethingElse(a) {
	return a - 1;
}

var b;

doSomething(2) // 15
```


### 规避中途

隐藏作用域中的变量和函数所带来的另一个好处 是可以避免同名标识符之间的冲突 两个标识符可能具有相同名字用途却不一样 无意间可能造成命名冲突

```
function foo() {
	function bar(a) {
		i = 3;
		console.log(a + i)
	}
	for (var i=0; i< 10; i++) {
		bar(i * 2)
	}
}

foo()

//会无限循环下去
```


- 全局命名空间

	变量冲突的一个典型例子是存在于全局作用域中 当程序中加载了多个第三方库时 如果它们没有妥善地将私有函数隐藏起来 就会容易引发冲突

	```
	var MyReallyCoolLibrary = {
		anssome: 'stuff',
		dosomething: function() {},
		doAnotherThing: function() {}
	}
	```

- 模块管理

	在众多模块管理器中挑选一个来使用 使用这些工具 任何库都无需将标识符加入到全局作用域中 而是通过依赖管理器的机制将库的标识符导入到另外一个特色的作用域中
	
### 函数作用域

```
var a = 2;
function foo() {
	var a = 3;
	console.log(a)
}

foo()
console.log(a)
```

- 匿名和具名

对于函数表达式最熟悉的场景就是回调参数

```
setTimeout(function() {
	console.log('i waited 1 second')
}, 1000)
```

- 立即执行函数表达式

```
var a = 2;
(function foo() {
	var a = 3;
	console.log(a) // 3
})()

console.log(a) // 2
```

- 立即执行函数表达式

```
var a = 2;
(function foo() {
	var a = 3;
	console.log(a);
})()

console.log(a) // 2
```

函数被包含在一对括号之中 成为了一个表达式 通过在末尾加上另外一个括号可以立即执行这个函数 第一个() 将函数变成表达式 第二个执行了这个函数

IIFE 代表立即执行函数表达式

函数名对IIFE不是必须的 IIFE最常见的用法是使用一个匿名函数表达式 

```
var a = 2;
(function IIFE() {
	var a = 3;
	console.log(a)
	console.log(global.a) // 2
})()
console.log(a);
```

#### 块作用域

尽管还是作用域是最常见的作用域单元

除了JavaScript外的很多变成语言都支持块作用域 因此其他语言的开发者对于相关的思维方式


```
for (var i = 0; i< 10; i++) {
	console.log(i)
}
```

```
var foo = true;
if (foo) {
	var bar = foo * 2;
	bar = something(bar);
	console.log(bar);
}
```

#### with

#### try/catch

#### let 

let关键字可以将变量绑定到任意所在的作用域中 let为其声明的变量隐式地所在的作用域

```
var foo = true;
if (foo) {
	let bar = foo * 2;
	bar = something(bar)
	console.log(bar)
}

console.log(bar)
```


- 垃圾收集
	另一个块作用域非常有用的原因和闭包及回收内存的垃圾回收机制相关
	
	```
	function process(data) {
		var someReallyBigData = {}
		process(someReallyBigData)
		var btn = document.getElementById('my_button');
		
		btn.addEventListener('click', function click(evt) {
		}
	}
	```


