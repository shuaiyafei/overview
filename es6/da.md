### 更方便的数据访问

### 解构为何有用

```
let options = {
	repeat: true,
	save: false
}

let repeat = options.repeat,
	 save = options.save;
```

会使用大量的定义变量

### 对象解构

对象解构语法在左侧使用了对象字面量

```
let node = {
	type: 'Identifier',
	name: 'foo'
}

let { type, name } = node;

type // 'Identiffier'
name // 'foo'
```


### 选择性赋值默认值

```
let node = {
	type: 'Identifier',
	name: 'foo'
}

let { type, name, value = true } = node;

console.log(type) // 'Identifier'
console.log(name) // 'foo'
console.log(value) // true
```


```
let node = {
	type: 'Identifier',
	name: 'foo'
}


let {type: localType, name: localName} = node;

console.log(localType) //'Identifier'
console.log(localName) //'foo'
```



### 数组解构



数组结构的语法看起来与对象的结构非常相似 只是将对象字面量替换成了数组字面量

```
let colors = ['red', 'green', 'blue']
let [firstColor, secondColor ] = colors

console.log(firstColor) // red
console.log(secondColor) //green
```

js中交换值

```
// es5
let a = 1;
let b = 2;

let tmp = a;
a = b;
b = tmp;


// es6
let a = 1;
let b = 2;
[a, b] = [b, a]
```

### 数组解构的默认值

```
let colors = ['red']
let [firstColor, secondColor = 'green' ] = colors

// firstColor red
// secondColor green
```


### 数组克隆

```
// es5
let colors = ['red', 'green', 'blue']
let cloneColors = colors.concat();
// es6
let colors = ['red', 'green', 'blue']
let [...cloneColors] = colors;

console.log(cloneColors)
// ['red', 'green', 'blue']
```

剩余项必须是解构模式的最后部分 之后不能再有逗号 否则就是语法错误

### 混合解构

```
let node = {
	type: 'Identifier',
	name: 'foo',
	loc: {
		start: {
			line: 1,
			column: 1
		},
		end: {
			line: 1
		}
	},
	range: [0, 3]
}

let {
	loc: { start },
	range: [startIndex]
} = node;

console.log(start.line) //1
console.log(start.column) //1
console.log(startIndex) //0
```


### 解构的参数是必须的

### 参数解构的默认值












