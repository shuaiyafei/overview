### 词法作用域

- 词法作用域
- 动态作用域

#### 词法阶段

词法作用域就是定义在词法阶段的作用域 词法作用域是由在写代码时将变量和块级作用域写出来决定的

```
function foo(a) {
	var b = a * 2;
	function bar(c) {
		console.log(a, b, c)
	}
	bar(b*3)
}
foo(2) //2, 4, 12
```

- 包含整个全局的作用域 其中只有一个标识符: foo
- 包含着foo所创建的作用域 其中只有三个标识符: a bra b
- 包含着bar所创建的作用域 其中只有一个标识符c

作用域气泡由其对应的作用域块代码在哪决定

#### 查找

作用域气泡的结构和互相之间的位置关系给了引擎提供了足够的位置信息 引擎用这些信息来查找标识符的位置

作用域会查找到第一个匹配的标识符停止 在多层的嵌套作用域中可以定义同名的标识符 叫做遮蔽效应 作用域查找始终是从运行时所处的最内部作用域开始 逐级向上进行 知道遇见的第一个匹配标识符为止

全局变量回自动成为全局对象(比如浏览器中的window对象)的属性 因此可以不直接通过全局对象的词法名称 而是间接地通过全局对象属性的引用对其进行访问

无论函数在哪里被调用 也无论它如何被调用 它的词法作用域都是只由函数被声明时所处的位置决定

#### 欺骗词法

如果词法作用域完全由写代码期间的函数所声明的位置来定义

- eval

	eval函数可以接受一个字符串为参数 并将其中的内容视为好像在书写时就存在于程序中的这个位置的代码 可以在你写的代码中用程序生成代码并运行
	
	在执行eval之后的代码时 引擎并不知道或在意前面的代码是以动态形式插入进来 并对词法作用域的环境进行修改 引擎只会如往常进行词法作用域查找
	
	```
	function foo(str, a) {
		eval(str)
		console.log(a, b)
	}
	var b = 2
	foo('var b = 3', 1)
	
	```
	
- with

	with通常被当做重复引用的同一个对象中的多个属性的快捷方式 可以不需要重复引用对象本身
	
	```
	var obj = {
		a: 1,
		b: 2,
		c: 3
	}
	
	with(obj) {
		console.log(a) //1
		console.log(b) //2
		console.log(c) //3
	}
	```
	
	
- 性能

	eval和with会在运行时修改和创建新的作用域 以此来改变其他在书写时定义的词法作用域
	
	JavaScript中有两个机制和气欺骗词法作用域 eval和with 前者可以对一段包含一个或者多个声明的代码进行字符串进行演算 并借此来修改已经存在的词法作用域 
	
	副作用是引擎在编译时对作用域无法进行优化查找