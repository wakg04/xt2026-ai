const str='价格:100元,进价80,赚了20元';
const reg=/\d+/g;
// console.log(reg.test(str));
const result = str.match(reg);
console.log(result);