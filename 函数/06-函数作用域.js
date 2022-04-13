/*
函数作用域
    调用函数时创建，执行完毕后销毁
    没调用一次就会创建一个新的函数作用域，之间时独立的
    在函数作用域中可以访问到全局作用域变量,在全局中无法访问全局的变量
    当函数作用域操作一个变量时，它会先在自身作用域寻找，有就直接使用，没有向上一级寻找
    直到找到全局作用域，全局中也没有则会报错
    在函数中访问全局的变量可以window.
 */

var a = "我是全局的a";
function fun() {
  // var b = 20
  var a = "我是函数中的a";
  console.log(a);
  function fun2() {
    console.log(a);
  }
  fun2();
}

fun();
// console.log(b);
console.log(a);

console.log("-------");

// 函数作用域也有声明提前的特性
function fun3() {
  console.log(a);
  var a = 10;
}
fun3();

console.log("-------");

// 在函数中不用var声明的变量都会成为全局变量
var c = 33;
function fun4() {
  console.log(c);
  c = 10;
  d = 100  
//   相当于window.d
}
fun4();
console.log(c);
console.log(d);
