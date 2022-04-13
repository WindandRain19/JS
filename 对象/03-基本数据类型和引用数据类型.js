/* 
    基本数据类型
    Stirng  Number Boolean undefined null
    引用数据类型
    Object 
    */

var a = 123;
var b = a;
a++;
console.log("a=", a);
console.log("b=", b);

console.log("----------");

var obj = new Object();
obj.name = "张三";
var obj2 = obj;
obj.name = "李四";
console.log(obj.name);
console.log(obj2.name);

/* 
    js中的变量都是保存在栈内存中，基本数据类型的值在栈内存中存储，值与值之间独立存在
    引用数据是保存在堆内存中，每创建一个新的对象，就会在堆内存中开辟一个新的空间，变量保存的是对象的内存地址（对象的引用）
    如果两个对象保存的是同一个地址，那么一个对象的属性改变也会影响另一个
 */
console.log("----------");

obj2 = null;
console.log(obj);
console.log(obj2);

console.log("----------");

var obj3 = new Object();
var obj4 = new Object();
obj3.name = "王五";
obj4.name = "王五";
console.log(obj3 == obj4);
