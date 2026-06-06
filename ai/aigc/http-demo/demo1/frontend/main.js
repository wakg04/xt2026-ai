let friends=[];

async function loadData(){
    // console.log('loadData');
    //endpoint 
    const endpoint ='http://localhost:3000/friends'
    //异步变同步
    const res =await fetch(endpoint);
    const data =await res.json();
    return data;
}
function renderData(friends){
    console.log('renderData');
    const oBody=document.querySelector('table tbody');
    if(friends.length>0){
            oBody.innerHTML = friends.map(function(friend){
                console.log(friend);
                return `
                <tr>
                <td>${friends.id}</td>
                <td>${friends.name}</td>
                <td>${friends.age}</td>
                </tr>
                `
            }).join('')
    }

}
async function init(){
    console.log('init start');
    const friends=await loadData();
    console.log(friends);
    renderData(friends);
    
}
init();
// console.log('init end');