/*
    在调用函数时，浏览器每次都会调用两个隐含参数this和arguments
    arguments是伪数组
    arguments.callee对应当前函数的对象
 */

function fun(){
    console.log(arguments);
    console.log(arguments.callee);
}
fun()