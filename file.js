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
};
const a = 5;
const b = inc(a);
console.dir({a,b});
//
const obj = {b:5}
function INC (num){
    num.b = num.b*num.b;
}
INC(obj);

console.dir(obj);

//3

const array = [1,'g',2,true,true,true,true,true,true,true,true,true,'g',1,5,6,2,'h',3,true,false,false,false,false,false,false,false,false];
let object = {number:0, string:0, boolean:0};
for (let art of array){

if(typeof(art)===typeof(1)){
   object.number++;
}
if(typeof(art)===typeof("s")){
    object.string++;
}
if(typeof(art)===typeof(true)){
    object.boolean++;
}

}
console.log(object)
