/*
    原型prototype
        每次创建一个函数都会想函数中添加一个属性prototype
        这个属性对应着一个对象，这个对象就是原型对象

    如果函数作为普通函数调用，prototype没有任何作用
    当函数以构造函数调用时，所创建的对象都会有一个隐含属性指向改构造函数的原型对象
    通过__proto__来访问该属性

    原型对象就相当于一个公共的区域，所有该类的实例都可以访问到
        可以将对象中共有的内容设置到原型对象中
        当我们访问对象的方法和属性时，现在自身查找，没要再去原型对象中查找
 */

function Person1() {}

var per = new Person1();
var per2 = new Person1();
console.log(per.__proto__ == Person1.prototype);
console.log(per2.__proto__ == Person1.prototype);

console.log("---");

Person1.prototype.a = 10;
console.log(per.a);

console.log("---");

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Person.prototype.fun = function () {
  console.log(this.name);
};
var per = new Person("张三", 18, "男");
var per1 = new Person("李四", 19, "男");
var per2 = new Person("王五", 20, "男");
console.log(per);
console.log(per1);
console.log(per2);

console.log("---");

// 使用 in 检查对象中是否含有某个属性，如果原型中有，也是true
console.log('fun' in per);
// 可使用hasOwnProperty()来检查对象自身是否含有某个属性
console.log(per.hasOwnProperty('fun'));
/* 原型对象也是对象，它也有原型 */
console.log(per.__proto__.__proto__.hasOwnProperty('hasOwnProperty'));