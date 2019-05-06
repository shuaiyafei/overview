### 扩展的对象功能

### 对象类别

- 普通对象 拥有js对象所有默认的内部行为
- 奇异对象 其内部行为在某些方面有别于默认行为
- 标准对象 在es6中被定义的对象
- 内置对象 在脚本开始运行时有JS运行环境提供的对象 所有的标准对象都是内置对象

### 对象字面量语法扩展

### 属性初始化器的速记法

```
function createPerson(name,age) {
	return {
		name: name,
		age: age
	}
}


function createPerson(name, age) {
	return {
		name,
		age
	}
}
```


### 方法简写

```
var person = {
	name: 'Nichlas',
	sayName: function() {}
}


var person = {
	name: 'Nichlas',
	sayName () {}
}
```

### 需计算属性名

使用方括号代替小数点表示法


### Object.is()方法

用于弥补严格相等运算符残留的怪异点
接受两个参数 并会在二者的值相等时返回true

### Object.assign()方法

混入是在JS中组合对象时最流行的模式 在一次混入中 一个对象会从另一个对象中接受属性和方法

```
const assign = (n, o) => {
	Object.keys(o).forEach(item => {
		n[item] = o[item]
	})
}
```

### 重复的对象字面量属性

es5严格模式为重复的对象字面量属性引入了一个检查 若找到重复的属性名 就会抛出错误

```
'use strict'

var peroson = {
	name: 'Nicholas',
	name: 'Grey'
} 

// es5严格模式下报错
```


### 自由属性的枚举顺序

- 所有的数字类型键按升序排列
- 所有的字符串类型键 按被添加的对象的顺序排列
- 所有的符号类型 也按照顺序添加

```
var obj = {
	a: 1,
	0: 1,
	c: 1,
	2: 1,
	b: 1,
	1: 1
}

obj.d = 1;

console.log(Object.getOwnPropertyNames(obj).join('');

// 012acbd
```

### 更强大的原型

原型是在JS中进行继承的基础 es6则在继续让原型更加强大 早起的js版本对原型使用有严重限制

### 修改对象的原型

对象的原型会在通过构造器或者object.create方法创建对象时被指定 缺少初始化之后修改原型的标准方法



### 使用super引用的简单原型访问

### 正式的方法定义


















