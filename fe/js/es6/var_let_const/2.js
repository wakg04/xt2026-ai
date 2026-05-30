//全局作用域
{
    //代码块
    //申明了变量，属于当前块级作用域
    const name='张三';
    console.log(name);
}
//推出了循环，才是10
for(let i=0;i<10;i++){
    //同步代码 尽快执行完
    console.log(i);
    //异步代码 1秒后执行
     setTimeout(function(){
        console.log(i);
    },1000);
}