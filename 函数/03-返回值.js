// return后的返回值作为执行结果返回
// 如果return后不跟任何值相当于放回undefined,不写return也会返回undefined
// return在函数中,执行了,一下的代码就不会执行,直接结束整个函数
// 返回值可以是任意的数据类型
function fun(a,b,c){
    return a+b+c
} 
var d = fun(1,2,3)
console.log(d);