//                          1. Assign value to variable
let a: number;
a = 2;

let b: number = 2;  // 必须指定数据类型

// b = 'hello'  // 不能将类型"string"分配给类型"number"
b = 7  // ok

//                          2. 关于对象类型
interface User {
    name: string;
    age: number;
}

let user: User = {
    name: 'Jack',
    age: 20
};

console.log(user.name);  
// console.log(user.address);  // 会报错, 只能访问已有成员变量


//                          3. 函数
function sum(n1: number, n2: number): number {  // 指定了参数必须是数字, 返回值也是数字
    return n1 + n2;
    // return 'hello';  只能返回数字
    
}
console.log(sum(2, 3));  
// console.log(sum('2', 3));  // 报错

function greeting(fname, lname){
    console.log(`Hi ${fname} ${lname}`);
}

greeting('KBTU', 'SITE');  // Hi KBTU SITE


function greeting2(fname, lname = 'asd'){
    console.log(`Hi ${fname} ${lname}`);
}

greeting2('KBTU');  // Hi KBTU asd
greeting('KBTU', 'SITE');  // Hi KBTU SITE


function greeting3(user: User){
    console.log(`HI ${user.name}`);
}

greeting3(user)  // 这里参数我们给了上面已经写好的对象user: HI Jack
greeting3({name: 'Ikris', age: 20});  // 手写了对象: HI Ikris


