const flatList =[
{id:1,name:'一级菜单A',parentid:0},// parentid
{id:2,name:'一级菜单B',parentid:0},
{id:3,name:'二级菜单A-1',parentid:1},
{id:4,name:'二级菜单A-1-1',parentid:3},
{id:5,name:'二级菜单B-1',parentid:2},
]

function listToTree(list){
    // reduce initial_val
    const nodeMap=list.reduce((map,item)=>{
        map[item.id]={...item,Children:[]};//展开,添加一个空数组
        return map;
    },{});
    return list.reduce((tree,item)=>{
        const cur =nodeMap[item.id];
        const parent = nodeMap[item.parentid];
        if(parent){
            parent.Children.push(cur);
        }else{
            tree.push(cur);
        }
        return tree;
    },[]);
}