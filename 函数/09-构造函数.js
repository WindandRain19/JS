/* 
    创建一个构造函数
    构造函数就是一个普通函数，构造函数的创建与普通函数一样
    不同的是，构造函数习惯首字母大写
    构造函数与普通函数的区别就是构造函数的调用需要用new关键字

    构造函数的执行流程
        立即创建一个对象
        将新建的对象设置为函数中的this，在构造函数中可以使用this来引用新建的对象
        逐行执行函数中代码
        将新建的对象作为返回值  

    使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类
    我们通过一个构造函数创建的对象称为该类的实例

    instanceof检查一个对象是不是一个类的实例
 */

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.sayName = fun

}
// 节约内存，但是污染了全局对象的命名空间
function fun() {
    console.log(this.name);
};

var per = new Person("张三", 18, "男");
var per1 = new Person("李四", 19, "男");
var per2 = new Person("王五", 20, "男");
console.log(per);
console.log(per1);
console.log(per2);

console.log("-----");

console.log(per instanceof Person);
