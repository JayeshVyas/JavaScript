//loops in JavaScript
// 4 Types of loops in JS

//JavaScript for loop

/*
    for(intialization;condition;increment/decrement)
*/ 

function demo(){
    let p = document.getElementById("para");
    for(let i = 0 ; i < 5 ; i++){
        p.innerHTML += i;
    }
}

//While Loop in JS
 /**
  * while(condition){
  *     code for execution
  * }
  * 
  */

 var a = 1;
 while(a<=5){
    console.log("Value of a ==> ",a);
    a++;
 }

 /**
  * Do While Loop
  * do{
  *     code for execution
  * 
  * } while(condition)
  */
 var b=1;
 do{
    console.log("Value of b==> ",b);
    b++;
 }while(b<=5)

 /**
  * for in loop in JS
  * 
  */
 const obj = {firstName:"Jayesh",lastName:"Vyas",Age:30};
 for(let prop in obj){
    console.log(prop + ':' +obj[prop]);
 }

/**
 * for of loop in JS
 * 
 */

const names = ["Jayesh","Sanjay","Vijay"];
for(let v1 of names){
    console.log("Values in names", v1);
}

for(let i = 0; i<names.length ; i++){
    console.log("Values in names",names[i]);
}

/**
 * for each loop in JS
 */
const arr =[100,200,300,400];
arr.forEach(val =>console.log(val));

function foreachloop(){
    const demo = [100,300,500];
    const tempArr = [];//10000,
    demo.forEach(function(demo){
        tempArr.push(demo*demo);
    })//iteration 1 = 100*100
    console.log("demo",demo);
    console.log("tempArr",tempArr);
}

foreachloop();
//array.forEach(callback(element, index, arr), thisValue)

/**
 * Map Loop in JS
 */

const arr1 = [2,4,6];
const temparr = arr1.map(v => v*2);
console.log("temparr",temparr)