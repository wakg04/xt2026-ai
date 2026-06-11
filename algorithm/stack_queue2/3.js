const queue =[];//空的队列
queue.push('许');
queue.push('多');
queue.push('冰');
while(queue.length){
    const top =queue[0];
    console.log(`取出来的是`,top);
    queue.shift();
}
console.log(queue);