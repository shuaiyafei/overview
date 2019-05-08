### Set和Map

Set是不包含重复值的列表 在Set中检查某个值是否存在
Map则是键值对硬的集合 因此Map中的每个项都存储了两块数据 通过制定所需的键可以检索对应的值 Map常被用作缓存 存储数据以便伺候快速检索

ES5中的Set和Map

在ES5中 开发者使用对象属性来模拟Set和Map

```
let set = Object.create(null);

set.foo = true;
if (set.foo) {}
```


### 变通方法的问题

```
let map = Object.create(null);
map[5] = 'foo';

console.log(map['5']) //'foo'
```


### ES6的Set

ES6新增了Set类型 这是一种无重复值的有序列表 Set允许对包含的数据进行快速访问 从而增加了一个追踪离散值的更有效方式

### 创建Set并添加项目

Set使用 new Set创建 而调用 add方法 就能向Set中添加项目 检查size属性可以查看包括了多少项

```
let set = new Set()
set.add(5)
set.add('5')

console.log(set.size)
```


Set不会使用强制类型转换判断是否重复 意味着可以同时包含数字和字符串 他们都是独立的项 还可以像其中添加多个对象

```
let set = new Set([1,2,3,4,5,5,5,5])
console.log(set.size) //5
```

### 移除值

```
let set = new Set()
set.add(5)
set.add('5')

console.log(set.has(5)) // true

set.delete(5)

console.log(set.has(5)) // false
console.log(set.size) // 1

set.clear()

console.log(set.has('5')) // false
console.log(set.size) // 0
```


### Set上的forEach()方法



```
let set = new Set([1, 2])

set.forEach((v, k, o) => {
	console.log(k, v)
	console.log(o === set)
});
```


使用传个this值作为参数

```
let set = new Set([1, 2])

let processor = {
	output(value) {
		console.log(value);
	},
	process(dataSet) {
		dataSet.forEach(item => {
			this.output(value);
		}, this)
	}
}

processor.process(set);
```


```
let set = new Set([1, 2])

let processor = {
	output(value) {
		console.log(value)
	},
	process(dataSet) {
		dataSet.forEach((value) => this.output(value));
	}
}


processor.process(set)
```


### 将Set转化为数组


```
let set = new Set([1, 2, 3, 4, 3, 4, 3,4])
let arr = [...set]

console.log(arr) // [1,2,3,4]
```


### weak Set

### Map
