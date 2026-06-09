# js 同步和异步
## js有哪些异步任务
cpu执行时间,不能霸占,几十毫秒的轮询分配给进程的执行时间
进程 董事长  PID process
线程 经理  thread
主线程 还可以启动子线程

- c++,java等系统级别的语言有多简称多线程架构,执行效率高,但复杂
- js简单,天生设计为单线程
    setTimeout
    事件
    怎么办?


## JS 的执行机制
- 前端script 或后端 node/bun 代码执行
- 进程启动一个主线程
    js足够简单,单线程
- 先把同步任务快速执行掉,可以快速地把同步代码执行,用户需要先看到的页面
- 还是有定时器 fetch请求 事件等等耗时性的异步任务 Async task
- js会把他们放入到event loop中,跳过,先执行后面的同步代码,等同步代码执行完后,再执行event loop中的任务

## 如果要控制执行流程呢?
A fetch users api 所有的用户 
B fetch 每一个用户

## 理解promise
- 实例化promise
- 需要传递一个函数,executor
    会立即实行,是耗时性任务的容器
    同步,里面可以容纳异步任务
    会得到resolve和reject两个函数能力
- resolve 表示异步任务成功解决了
    then 被调用
- reject 表示异步任务失败了
    catch 被调用
- 在executor里面的异步任务成功解决或异常时,手动调用
- resolve(result) 传给then 
- reject(err)失败的原因

