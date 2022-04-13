
// 当前时间对象
var d = new Date()
console.log(d);

console.log("-----");

// 指定时间对象 
// 日期格式 月、日、年  时：分：秒
var d1 = new Date("12/03/2021 18:01:01")
console.log(d1);

console.log("------");

// 获取当前日期
var date = d.getDate()
// 获取当前周几 放回0-6 0是周日
var day = d.getDay()
// 获取月份 0 是一月，依次类推
var month = d.getMonth()
// 获取年份
var year = d.getFullYear()
console.log("date=",date);
console.log("day=",day);
console.log("month=",month+1);
console.log("year=",year);

console.log("------");

// 获取当前日期对象的时间戳，表示1790-1-1 0：0：0 到现在的毫秒数
// 1秒等于1000毫秒
var time = d.getTime()
console.log(time);

console.log("------");

// 当前代码执行的时间戳
var time1 = Date.now()
console.log(time1);
