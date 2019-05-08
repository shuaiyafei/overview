### 符号与符号属性

在JS已有的基本类型(字符串 数值 布尔类型 null undefined)之后 es6引入了一种新的基本数据类型:
符号(symbol)

符号起初被设计用于创建对象的私有成员 而这也是js开发者期待已久的特性 在符号诞生之前 将字符串作为属性名称导致属性可以被轻易访问

而私有名称意味着开发者可以创建非字符串类型的属性名称 由此可以访问使用常规的手段探查这些名称


### 创建符号值

```
let firstName = Symbol();
let person = {};
person[firstName] = 'Nicholas';
console.log(person[firstName]) //Nicholas
```

### 使用符号值

可以在Object.defineProperty() 或者 Object.defineProperties() 中使用它

### 共享符号值

### 符号值的转换

### 检索符号属性

### 使用知名符号暴露内部方法

### Symbol.hasInstance属性

