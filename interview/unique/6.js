function unique(arr){
    if(!Array.isArray(arr)){
        console.log('type error');
        return [];
    }
    let res = [],
    obj = new Map();
    for(let i = 0; i < arr.length; i++){
            if(!obj.get(arr[i])){
                obj.set(arr[i], 1);
                res.push(arr[i]);
            }else{
                obj.set(arr[i], obj.get(arr[i]) + 1);
            }

    }
    return res;
}