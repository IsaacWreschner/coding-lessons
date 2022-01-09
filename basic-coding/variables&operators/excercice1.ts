import { Console } from "console";

/** NUMBERS */
let total:number;
console.log(total);//undefined
const price1 = 5;
const price2 = 6;
total = price1 + price2;
console.log(total);//11
total += 5;
total -= 2;
total ++;
console.log(total);//15
total*=3;
console.log(total);//45
total += 'd';//NaN in javascript,does not compile in typescript
/** STRINGS */
let fullName:string;
const firstname = 'Menachem';
const lastname = 'Kohen';
fullName = firstname + lastname;
console.log(fullName); //Menachem Kohen
let ABC = 'abc';
ABC += 'd';
console.log(ABC);//'abcd'
/**
 * BOOLEAN & LOGICAL OPERATORS
 */
let areBothTrue:boolean;
let isOneTrue:boolean;
let isNoneTrue:boolean;
const isTrue = true;
const isFalse = !isTrue; // NOT
console.log(isTrue,isFalse);//true,false
areBothTrue = (isTrue && isFalse); //AND
isOneTrue = (isTrue || isFalse);//OR
isNoneTrue = (!isTrue && !isFalse); //
console.log(areBothTrue,isOneTrue,isNoneTrue);//false,true,false
/**
 * LITTERAL STRING
 */
let message:string;
const message1 = `the total price is ${total}`;
const message2 = `the fullName is ${fullName}`;
message = `both messages are "${message1}" and "${message2}"`;
console.log(message);
/**
 * OBJECTS
 */
type Person = {
    fullname:string,
    age:number,
    hasGlasses:boolean,
    gender?:'male'|'female';
}
const person1:Person = {
    fullname:'Menachen Kohen',
    age:null,
    hasGlasses:true
}
console.log(person1.fullname);//Menachen Kohen
console.log(person1.age);//null
person1.hasGlasses = false;
console.log(person1.hasGlasses);//false
const person2 = person1;
person2.fullname = 'Isaac';
console.log(person1.fullname,person2.fullname);//Isaac,Isaac
/**
 * ARRAYS
 */
const mixedArray = [];
mixedArray[0] = 5;
mixedArray[3] = 'Hi';
console.log(mixedArray[0]);//5
type numberArray = number[];
const array:numberArray = [];
array[5] = 'Hi';//does not compile in typescript
/**
 * SIMPLE CONDITIONS + 
 */
if(mixedArray[0] === 5){
    mixedArray[0]++;
}
const numberAsString = '5'
if (numberAsString == 5) {
    numberAsString = '7';
}
if (numberAsString === 5) {
   numberAsString = '6';
}
console.log(numberAsString,mixedArray[0])//'6',6
let a = 5;
let b = 6;
if(b > a){
    b = 5;
}
if(b >= a){
    b--;
}
console.log(b)//4
let someVariable:any;
if(someVariable){
    b = 0
}
console.log(b);//4
someVariable = null;
if(!someVariable){
    b = 0
}
console.log(b);//0
if(b){
    b = 100;
}
console.log(b);//
const c = '';
if(c || b){
    b = 100;
}
console.log(b);//0
if(b || a){
    b = 100;
}
console.log(b);//100
if(b & a) {
    b = 200;
}
console.log(b);//200
/**
  FOR LOOPS
 */
let accumulative = 0;
for (let i = 0;i < 100 ; i++){
  accumulative += 1;
}
console.log(accumulative)//100
for (let i = 0;i < 100 ; i--){
    accumulative -= 2;
  }
console.log(accumulative)//-100
/**
 * FUNCTIONS
 */
const add = (a,b):number => {
    return a+b;
}
const getMax = (a,b,c):number =>{
    let max = a;
    if(b > max){
        max = b;
    }
    if(c > max){
        max = c;
    }
    return max;
}
/**
 * SCOPE
 */
const myMax = getMax(1,5,6);
const max = 10;
console.log(myMax,max);//6 10
if(max === 10){
    let myMax2 = 20;
}
console.log(myMax2);//undefined

/** EXCERCICE */
//1 write my min function
//2 write my max function with an array as input (use a loop)
//3 write a sum function with a string output like "your sum is N"
//4 write a boolean function that return if two numbers are equal to 100
//5 write a boolean function than return if a number is odd (use modulo % search google)
//6 write a boolean function that return if 2 numbers are both odd (use functions inside function)

//7  https://exercism.org/tracks/typescript/exercises/two-fer
//8  https://exercism.org/tracks/typescript/exercises/resistor-color-duo
//9  https://exercism.org/tracks/typescript/exercises/resistor-color-trio
//10 https://exercism.org/tracks/typescript/exercises/leap
//11 https://exercism.org/tracks/typescript/exercises/rna-transcription
//12 https://exercism.org/tracks/typescript/exercises/pangram
//13 https://app.codility.com/c/run/trainingXVFS83-VSG/