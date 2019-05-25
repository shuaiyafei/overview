// Function.prototype.sBind = function (obj) {
//   var args = Array.prototype.slice.call(arguments, 1);
//   var context = this;
//   var found = function() {
//     args = args.concat(Array.prototype.slice.call(arguments));
//     context.apply(obj, args);
//   };
//   function Fn() {}
//   Fn.prototype = context.prototype;
//   found.prototype = new Fn();
//   return found;
// };

// var obj = {
//   a: 1,
//   fn() {
//     console.log(this.a);
//   }
// };
// var a = 222;
// console.log(obj.fn());
// obj.fn.sBind(this)();

// function debounce(fn, delay) {
//   if (typeof fn !== 'function') {
//     return false;
//   }
//   var timeout = null;
//   return function () {
//     clearTimeout(timeout);
//     delay = delay || 500;
//     var context = this;
//     var args = Array.prototype.slice.call(arguments);
//     timeout = setTimeout(function () {
//       fn.apply(context, args);
//     }, delay);
//   };
// }
// window.onmousemove = debounce(function () {
//   console.log(1);
// }, 500);

// function throttle(fn, delay) {
//   if (typeof fn !== 'function') {
//     return false;
//   }
//   var date = +new Date();
//   var time = 1;
//   return function () {
//     var args = Array.prototype.slice.call(arguments);
//     delay = delay || 500;
//     if (new Date() - date >= delay) {
//       date = new Date();
//       time++;
//       fn.apply(this, args);
//     } else {
//       if (time === 1) {
//         date = new Date();
//         time++;
//         fn.apply(this, args);
//       }
//     }
//   };
// }

// window.onmousemove = throttle(function() {
//   console.log(222);
// }, 2000);

// document.getElementsByTagName('ul')[0].addEventListener('click', funciton() {});

// overflow: hidden;  超出的内容隐藏
// display: -webkit-box;  设置成盒子的类型
// -webkit-line-clamp: 2; 设置为2行
// -webkit-box-orient: vertical; 居中状态
// width: 100px; 宽度

// css 实现三角形
// width: 0;
// height: 0;
// box-sizing: content-box;
// border-top: 20px solid red;
// border-left: 20px solid transparent;
// border-right: 20px solid transparent;
// border-bottom: 20px solid transparent;





/*  
 实现一个LazyMan，可以按照以下方式调用:  
 1) LazyMan(“Hank”)输出:  
 Hi! This is Hank!  
   2) LazyMan(“Hank”).sleep(10).eat(“dinner”)输出  
 Hi! This is Hank!  
 //等待10秒..  
 Wake up after 10  
 Eat dinner~  
   3) LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出  
 Hi This is Hank!  
 Eat dinner~  
 Eat supper~  
   4) LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出  
 //等待5秒  
 Wake up after 5  
 Hi This is Hank!  
 Eat supper  
 */
// 1. 同异步  
// 2. 原型  
function LazyMan(name) {
  // 由于防止递归导致的死循环，在LazyMan新创建一个函数Man;  
  function Man() {
    // 从第四个执行结果来看，Man一定是异步的；  
    setTimeout(function () {
      console.log(` Hi! This is ${name}!`);
    }, 0);
  }
  Man.prototype.sleep = function (time) {
    /*setTimeout(function () {  
    console.log(`Wake up after ${time}!`);  
    },10000)*/ // 将此处异步的定时器变成同步；  
    let curTime = new Date();
    setTimeout(function () {
      while (new Date() - curTime < time * 1000) {}
      console.log(`Wake up after ${time}!`);
    }, 0);
    return this; // 目的是实现链式调用；  
  };
  Man.prototype.eat = function (food) {
    setTimeout(function () {
      console.log(`Eat ${food}~`);
    }, 0);
    //console.log(`Eat ${food}~`);  
    return this;
  };
  Man.prototype.sleepFirst = function (time) {
    let curTime = new Date();
    while (new Date() - curTime < time * 1000) {}
    console.log(`Wake up after ${time}!`);
    return this;
  };
  return new Man();
}
// LazyMan("Hank").sleep(10).eat("dinner");  
//LazyMan("Hank").eat("dinner").eat("supper");  
LazyMan("Hank").sleepFirst(5).eat("supper");


Promise.resolve().then(() => console.log(2));
new Promise((resolve, reject) => {
  resolve();
  console.log(3);
}).then(() => console.log(4));
setTimeout(() => {
  Promise.resolve().then(() => console.log(5));
  setTimeout(() => console.log(7), 0);
}, 0);
setTimeout(() => console.log(6), 0);

// 3 2 4 5 6 7


libUA

function Koa() {
  this.middleWare = [];
}
Koa.prototype.use = function (fn) {
  var context = this;
  context.middleWare.push(fn);
  return new Promise((res, rej) => {
    context.apply(fn);
  })
}

const app = new Koa();


app.use(async function(ctx, next) {
  await next();
});

// 请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可
function sendRequest(urls: string[], max: number, callback: () => void) {
  var urlList = [];
  for(var i =0; i < urls.length / max; i++) {
    for(var j=0; j < max; j++) {

    }
  }
}


// 1. 宏任务微任务
// 2. libUA
// 3. vue-loader代码实现
// 4. express ctx 中间键代码实现
// 5. vue 发布订阅和虚拟dom代码实现
// 6. 请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可



