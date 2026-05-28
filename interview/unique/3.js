function unique(arr){
    if(!Array.isArray(arr)){
        console.log('type error');
        return [];
    }
    const res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) === i){
            res.push(arr[i]);
        }
    }
    return res;
}