// 表示空,没有
// null
// primitive 原始 内存空间固定
// 拷贝式赋值
let a = null;
let b =a;//拷贝 复印机
b=2;
console.log(a,b);

let obj = {
    name:"张三"
}
let obj2 = obj;// 引用式 
obj2.company="字节跳动";
console.log(obj,obj2);


let largeObject={
    data: new Array(10000000).fill("hgh")
}

// 手动回收内存?
largeObject = null;
