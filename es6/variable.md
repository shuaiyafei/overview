### variable

#### 变量提升

```
function test() {
	if (false) {
		var a = 1;
	} else {
		console.log(a)
	}
}
test()
// undefined

// 等同于
function test() {
	var a;
	if (false) {
		a = 1;
	} else {
		console.log(a)
	}
}
test()
// undefined
```


#### 块级声明
让声明的变量在指定的作用域外无法被访问

> 在一个函数内部
> 
> 在一个代码块 花括号内部

#### let声明

使用let不会将变量提升至函数顶部
不在同一级别再次创建此变量 这个变量会屏蔽全局的变量


#### const声明

使用const进行声明的会被认为是常量
所有的const变量在声明时都需要进行初始化
定义一个已经存在的变量时会抛出一个错误

```
const test = 30;
// 正确

const name;
// 错误
```

const 只针对基本数据类型 不会阻止负责数据类型

```
const person = {
	name = 'a
}

person.name = 'b'
// 正确

person = {
	name: 'c'
}
// 错误
```

#### 暂时性死区

使用let和const声明的变量 在达到声明之前都是无法访问的 试图访问会导致一个引用错误 即使是安全的操作符(typeof)

暂时性死区只是块级绑定的一个独特表现
而另一个表现是在循环中使用它


#### 循环中的块级绑定

使用var定义的变量都发生的变量提升
使用let可以形成私有作用域

#### 循环内的函数

```
var result = []
for(var i =0; i< 10; i++) {
	result.push(function(){ console.log(i) })
}

result.forEach(item => item())
```


#### for循环内的let声明


使用let可以简化这种过程 在每次遍历的时候 生成一个新的私有作用域

#### 循环内使用const声明

直接抛出错误定义的i是一个常量 不能参与循环

#### 全局块级绑定

使用let const定义的变量 不会出现在全局作用域上


#### 总结

- let和const块级绑定将词法作用域引入到了js
- 这两种声明方式都不会将变量得到提升 并且只会在声明他们的代码块内部存在
- 暂时性死区如果使用之后定义的变量会导致错误
- 在使用for-in和for-of循环中 let和const都能在每一次接待时创建一个新的绑定 循环体内部创建的函数可以迭代所绑定的循环变量值
- 默认情况使用const 在知道变量需要更改的情况下才使用let