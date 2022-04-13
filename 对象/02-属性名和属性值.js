// 创建对象
var obj = new Object();
//  向对象中添加特殊属性名，读写一直对象.['']

obj["123"] = 789;
console.log(obj["123"]);

console.log("----");

// 使用[]更加的灵活，可以在[]添加一个变量
var n = 123;
console.log(obj[n]);

console.log("----");

// 属性值可以是任意的数据类型，甚至也可以是一个对象
var obj2 = new Object();
obj2.test1 = "wind";
obj2.test2 = 123;
obj2.test3 = true;
obj2.test4 = undefined;
obj2.test5 = null;
obj2.test6 = obj;
obj2.sayName = function(){
     console.log(obj2.test1);
}
console.log(obj2);
obj2.sayName()

console.log("----");


// in 检查一个对象中是否含有指定属性 有true  没有false
console.log("test1" in obj2);
console.log("test" in obj2);