function foo(){
    var a=1
    var b=2

    {
        //词法环境里做块级作用域的文章
        let b=3;
        let c=4;
        let d=5;
        console.log(a);
        console.log(b);
    }
    console.log(b);
    console.log(c);
    console.log(d);
}
foo();