/* 
    使用工厂方法创建的对象，使用的是构造函数Object
        所以创建对象都是Object这个类型
        导致我们无法区分多做不同类型的对象
 */

function createObject(name,age,sex) {
    var obj = new Object()
    obj.name = name
    obj.age = age
    obj.sex = sex
    obj.sayName = function fun() {
        console.log(this.name);
    }
    return obj
}
var obj2 = createObject("张三",18,"男")
var obj3 = createObject("李四",19,"男")
var obj4 = createObject("王五",20,"男")
console.log(obj2);
console.log(obj3);
console.log(obj4);