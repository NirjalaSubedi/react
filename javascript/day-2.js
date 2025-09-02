// Modulus Operator
let a=6;
let b=4;
console.log(a%b);

//comparison operator
const data1="hello";
const data2="hello";
console.log(data1===data2);
console.log("====================");

const num1=8;
const num2=9;
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1!=num2);

console.log("====================");
//logical operator
let age=20;
let value1=age>18 && age<60;
console.log(`can vote:${value1}`);

let value2=age<18||age>60;
console.log(`can not vote:${value2}`);

let value3=!value2;
console.log(`can vote:${value3}`);
console.log("====================");

let firstName="Nirjala";
console.log(firstName.length);

//conditional statement
if(firstName.length>5){
    console.log("name is too long");
}else{
    console.log("name is short");
}
let investment=10000;
let profit=5000;
let loss=2000;
if(profit>loss){
    console.log("you are in profit");
}else{
    console.log("you are in loss");
}

if(age<18&&age>80){
    console.log("you are not eligible for vote");
}else{
    console.log("you are eligible for vote");
}
//traditional function
function sumdata(){
    console.log(`your age is ${age}`);
    if(age<=18&&age>=80){
        console.log("you are not eligible for vote");
    }else{
        console.log("you are eligible for vote");
    }   

}
sumdata();
console.log("====================");