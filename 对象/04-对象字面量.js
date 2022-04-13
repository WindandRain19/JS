// 使用对象字面量创建对象
var obj = {}
obj.name = "张三"
console.log(obj.name);

console.log("-------");

// 使用对象字面量，可以在创建对象时，指定对象的属性
// 对象字面量的属性可以不加引号，如果使用一些特殊的名字，必须要加
var obj2 = {
    name:'张三',
    age:18,
    "@@@":12
}
console.log(obj2);