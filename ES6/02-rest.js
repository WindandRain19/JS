// 伪数组
function fun() {
    console.log(arguments);
}
fun(1,2,3)

// 数组
function fun1(...args) {
    console.log(args);
}
fun1(1,2.3)