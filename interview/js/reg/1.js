let str='13888888888'
// 描述一个匹配的规则
// 一个字符一个字符的匹配
// []匹配字符的范围
// let reg=/1[3-9][0-9]{9}/;
let reg=/^1[3-9]\d{9}$/;
console.log(typeof {});
console.log(
    Object.prototype.toString.call(reg)
);
console.log(reg.test(str));
console.log(typeof reg);