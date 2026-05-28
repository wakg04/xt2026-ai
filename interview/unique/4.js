function unique(arr){
    if(!Array.isArray(arr)){
        console.log('type error');
        return [];
    }
    arr=arr.sort();
    let res=[];
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
            res.push(arr[i-1]);
        } 

    }
    return res;
}