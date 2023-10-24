//                          1. Assign value to variable
let a;  // undefined
a = 2;
let b = 2; 

b = 'hello'  // can be changed


let user = {
    name: 'Jack',
    age: 20
};

console.log(user.name);  // Jack
console.log(user.address);  // undefined

//##########################################################################################
//                          2. 函数
function mult(a, b) {
    console.log(a * b);
}
mult(2, 3)  // 6
mult('3', 4)  // 12: 会自动转换为 数字
mult('hello', 4)  // NaN


function sum(a, b) {
    console.log(a + b);
}
sum(2, 3)  // 5
sum('3', 4)  // 34 : 字符串相加数字, 会拼接
sum('hello', 4)  // hello4 : 字符串相加数字, 会拼接
 
