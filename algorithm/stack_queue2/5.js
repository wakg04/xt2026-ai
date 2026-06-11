// js数组内存一定连续吗? 不一定
const arr =[1,2,3,4];// js当数组来打理
// 每个元素的类型不一样, 不连续,连续也没有意义
// arr[2] 仍然可以通过下标访问 hashTable
const arr2 =['haha',1,{a:1}];// 不那么数组了
console.log(arr2[2]);
console.log(arr2[2].a);