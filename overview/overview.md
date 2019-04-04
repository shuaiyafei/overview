## overview

#### JS 的发明者 Brendan Eich 说这门语言主要有两大特性：一等函数和对象原型。

#### 一等函数


> 函数是一等公民是说，函数被设计成了“值”
> 
> 值可以存进某个变量或者结构
> 
> 值除了可以被赋予某个变量
> 
> 值可以作为参数传入函数
> 
> 值可以作为返回值

JavaScript 的一切都是对象  
JavaScript 的一切也都是值  


- 函数做为参数  

	```
	setTimeout(function() {}, 1000);

	```
	
- 函数做为返回值

	```
	var fn = () => {
		return () => {
			return 1
		}
	}
	fn()()
	// 也可返回自执行函数
	```
	
- 匿名函数调用表达式

	```
	(() => {
		alert(1)
	})()
	```
	
- 对象

	```
	var obj = {
		fn: function() {
			return 1
		}
	}
	```
	
- this  
	this 是在函数语义下的存在

	```
	var obj = {
		a: 1,
		b: function() {
			console.log(this.a)
		}
	}
	```
	
- 对象复用机制

	> call 和 apply
	>
	> mixin
	>
	> 继承
	>
	> 委托
	
- new 操作符  
	用于生成对象实例

