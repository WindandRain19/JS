/*
解析器在调用函数每次都会传递一个隐含的参数 this
    this指向的是一个对象，称为函数执行的上下文对象，
    根据函数的调用方式不同，this会指向不同的对象
        以函数形式调用时，this永远时window
        以方法形式调用，this就是调用方法的对象
 */

function fun() {
    console.log(this);
}
fun()

console.log("-------");

var obj = {
    name:"张三",
    sayName:fun
}
obj.sayName()