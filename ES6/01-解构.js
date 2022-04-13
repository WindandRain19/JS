// 数组解构
const F4 = ["小沈阳", "刘能", "赵四", "宋小宝"];
let [xiao, liu, zhao, song] = F4;
console.log(xiao);
console.log(liu);
console.log(zhao);
console.log(song);

console.log("---");

// 对象解构
const Zhao = {
  name: "赵本山",
  age: "不详",
  xiaopin() {
    console.log("我是小品");
  },
};

let { name, age } = Zhao;
console.log(name);
console.log(age);

let { xiaopin } = Zhao;
xiaopin1();
