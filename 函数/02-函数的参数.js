/* 
两数之和
 */
// a,b为形参,相当于在函数中声明的了变量,但是没有赋值
function sum(a,b){
    console.log(a+b);
}
// 调用函数的时候()指定实参,实参可以值任意值
sum(1,1)

console.log("-------");

function fun1(obj) {
    console.log(obj.name,obj.sex,obj.age);
    
}
var obj = {
    name:'张三',
    sex:'男',
    age:18
}
fun1(obj)

console.log("-------");

function fun2(a) { 
    a(obj)
    console.log(a);
}
// 参数是xxx,相当于使用函数对象;参数是xxx(),相当于使用函数的返回值
fun2(fun1)
fun2(function(){console.log("我是匿名函数");})

/* 
调用函数解析器的时候不会检查函数的数据类型
所以要注意是否收到非法的数据类型,如果有可能则需要对参数进行类型的检查
 */
/* 
函数调用时,解析器也不会检查实参数量
    多余的参数不赋值
    少于,多出形参定义为undefined
 */

