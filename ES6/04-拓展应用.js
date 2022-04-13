// 合并
const arry1 = [1,2]
const arry2= [3,4]
// ES5
// const arry3 = arry1.concat(arry2)
// Es6
const arry3 = [...arry1,...arry2]
console.log(arry3);

// 复制
const arry4=[...arry3]
console.log(arry4);

// 伪数组转真
