// 扁平列表数据
// 扁平 数据是一维度,每项不是数组
//管理后台 树状结构
// 地址三联弹 多级菜单等 常见复杂功能
// parentid 是树状的关键
// mysql 数据存储表结构是一致的
// select * from 取出来
// 列表转树 


// 先拿到第一层,选中了后,显示相应的第二层...
const flatList =[
{id:1,name:'一级菜单A',parentid:0},// parentid
{id:2,name:'一级菜单B',parentid:0},
{id:3,name:'二级菜单A-1',parentid:1},
{id:4,name:'二级菜单A-1-1',parentid:3},
{id:5,name:'二级菜单B-1',parentid:2},
]

function listToTree(list){
    const map = new Map();//es6 新增的 数据结构HashMap
    const root = [];
    list.forEach(item=>{
        map.set(item.id,{
            ...item,//展开
            Children:[] // 添加一个空数组
        });
    });
    list.forEach(item=>{
        const current = map.get(item.id);//当前项
        const parent = map.get(item.parentid);//当前项的父节点
        if (parent) {
            parent.Children.push(current);
        }else{
            root.push(current);
        }
    });
    return root;
}

// console.log(listToTree(flatList))
console.log(JSON.stringify(listToTree(flatList),null,2))