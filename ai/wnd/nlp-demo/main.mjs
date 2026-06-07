// // 主程序文件
// // 多个默认的输出a,b...{对象 key:value}
// // 解构语法
// // import client ,{a,b}from "./client.mjs";
// // console.log(client);
// // let {name,age}={"name":"詹姆斯","age":20}
// // console.log(name,age);
// // let obj={"name":"姚明","city":上海};
// // let name=obj.name;
// // let city=obj.city;
// // es6 让js 大型项目企业级开发语言
// // 解构赋值 从对象中提取属性值，成为变量，代码优雅简介而且性能好
// // let{name,city}=obj;
// // console.log(name,city);
// // name obj.name 性能差异
// // 数组的解构 按顺序解构， rest 余下的全部解构
// let [coach,...players]=['范甘迪','姚明','麦迪','穆托姆博','弗朗西斯'];//rest运算符
// // console.log(coach,players);
// let [hrCoach,...hrplayers]=['杰克逊','科比','加索尔'];
// let allPlayers=[...players,...hrplayers];//spread 展开
// console.log(allPlayers);

// 入口文件 简介
import { getCompletion } from "./completion.mjs";

async function main() {
    const prompt = '请用一句话解释什么是模块化编程'
    const response = await getCompletion(prompt);
    console.log(response);
}
main();