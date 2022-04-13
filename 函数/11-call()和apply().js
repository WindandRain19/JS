/*
    call()和apply()可以将一个对象指定为一个参数
        此时这个对象将会成为我们函数执行时的this
        call()可以将实参带入对象之后，依次传递
        apply()需要将实参封装到一个数组中统一传参
 */

function fun() {
  console.log(this);
}
var obj = {
  name: "obj",
  sayName: function () {
    console.log(this.name);
  },
};
var obj2 = { name: "obj2" };
fun.call(obj);
fun.apply(obj);
obj.sayName.apply(obj2);

console.log("---");

function fun2(a,b) {
    console.log("a="+a);
    console.log("b="+b);
}
fun2.call(obj,1,2)
fun2.apply(obj,[1,2])
