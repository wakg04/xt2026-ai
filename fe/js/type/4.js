//symbol 唯一的标识符
// 轻松表达独一无二
console.log(Symbol("id")===Symbol("id"));
// false
console.log(typeof Symbol("id"));
console.log(Symbol());//绝对唯一,可以传一个标签 lable
let obj = {
    [Symbol()]:'value',
    prop:"2"
}
console.log(obj.id);
