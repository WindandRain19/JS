// 创建对象
var obj = new Object();
//  向对象中添加属性
obj.name = "张三";
obj.sex = "男";
obj.age = 18;

// 读取对象的属性,对象。属性名
obj.name;
console.log(obj.name, obj.sex, obj.age);


// 修改对象属性
obj.name="李四"
console.log(obj.name);

// 删除对象属性
delete obj.name
console.log(obj.name);
