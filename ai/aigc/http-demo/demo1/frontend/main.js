let friends=[];

function loadData(){
    // console.log('loadData');
    //endpoint 
    const endpoint ='http://localhost:3000/friends'
    fetch(endpoint)//发送请求 异步
        //等待响应返回
        //响应体是json二进制字符串 转换问json对象
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
}
function renderData(){
    console.log('renderData');
}
function init(){
    console.log('init start');
    loadData();
    renderData();
}
init();
console.log('init end');