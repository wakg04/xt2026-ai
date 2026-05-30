# es6

javascript 蹭了一波java的热度，弱类型的动态语言，早期设计用来给网页交互（幻灯片），DOM编程
JS 是以Escript 为语言标准的语言
ES6是JS的新版本，ES5，ES6+
2015年，企业级大型项目开发发展 
JS是KPI项目 一周就开发出来
## 申明变量并赋值
- var es5 不用了
- let es6+ 代替var

## 作用域scope
### 作用域嵌套
- 全局作用域
- 函数局部作用域
    - 局部作用域
- 块级作用域{ }
变量属于作用域，
变量声明，js弱类型的，类型由值决定
- 查找变量的规则
    - 现在当前作用域查找
        找到了，ok
    - 如果没有找到，向外层作用域查找，
    冒泡查找
    - 当在全局作用域都没有找到，停下来报错
- 函数/代码块运行后，垃圾回收了
    - 内存角度，变量的声明
    在内存中申请了一块区域
    销毁函数，回收内存
    变量的声明周期

- Assignment to constant variable
- ReferenceError:XXX is not defined
- ReferenceError: Cannot access 'pizza' before initialization
## var let const
早期的js使用var声明变量，没有常量，用代码规范约束
var CHATMODEL ='deepseek-chat'
var 不支持块级作用域
js 设计的时候比较赶工 浏览器的副产品（世界首富） 
JS 没有经过深思熟虑的，有一些瑕疵
let 变量，const 常量
支持块级作用域
const constant variable
不可变变量 金箍棒
变量类型由值决定

## for + setTimeout
var 不支持块级作用域 只有一个i
同步i 10，setTimeout 打印10
let 支持块级作用域 嵌套着n个局部作用域

const 声明时就要赋值
let 声明和赋值可以分开
const variable
简单数据类型不可以改变值
复杂数据类型值可以改变，类型不可以改变

## 变量的提升 hoisting
- 代码先有编译阶段
    准备执行上下文
    全局执行上下文
     pizza undefined

- 再有执行阶段
- 不好的东西
    和代码顺序，直觉不符合
    避免变量提升
    let 不支持变量提升
    