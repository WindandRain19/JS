// 函数也是一个对象
// 函数可以封装一些功能，在需要的时候可以执行

// 创建函数第一种方法

var fun = new Function();
console.log(fun);

console.log("---------");

// 创建函数第二种方法
function fun2() {
  console.log("我是fun2");
}
fun2();

console.log("---------");

// 创建函数第三种方法

/* function(){
  我是匿名函数
} */

var fun3 = function () {
  console.log("我是fun3");
};
fun3();
