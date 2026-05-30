// 常量一开始就要赋值
const item = 1; // SyntaxError: Missing initializer in const declaration
let a;//undefined
//简单数据类型
const key='abc';
points=51;
//let不只是值可以改变，类型也可以改变
//不要这么干
points="52"//不好的
let winner=false;
winner='张三';
//复杂数据类型 对象
//值可以改变，但是类型不变
const person={
    name:'张三',
    age:20
}

person.age++;//可以改变对象的属性值
console.log(person.age);//21