//1
function one (number){
    return number*number;
}
function two (number) {
    return number.toString();
}
let number = 111;
console.log(number);
console.log(one(number));
console.log(two(number));
//2
function inc (n) {
return n*n;
}

const a = 5;
const b = inc(a);
console.dir({a,b});

const obj = {b:5}
function INC (num){
    num.b = num.b*num.b;
}
INC(obj);

console.dir(obj);

