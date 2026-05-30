// 局部作用域 global scope 全局作用域
function setWidth() {
    var width = 100;
    console.log(width);
}

setWidth();
 // ReferenceError: width is not defined
var age=100;
if(age>12){
    var dog=age*7;
    console.log(dog);
    dog++;

}
    console.log(dog);