# Prompt 做NLP任务开发

- 有哪些东西可以模块化？
    import from
    export default
    - 维护性和可读性
    - 好复用 引入
- 项目的模块化搭建
    - main.mjs 单点入口(鉴权、路由)
    - client.mjs client 对象
    - completion.mjs
## es6 语法特性
es6 是javascript 在2015年推出的新版本，变化比较大，目标是让js成为一个企业及大型项目开发语言
- let const 声明提升bug 支持块级作用域
    let const 不能重复声明，const 简单数据类型不能重新赋值，复杂数据类型可以重新赋值，但不可以改变其指向的内存地址(类型)
- ...rest 运算符 收|spread 展开运算符
- 解构赋值 简洁且性能好
    - 对象
    - 数组 
- 模块化 esm 模块
    - import from
    - export dufault
    - export
    