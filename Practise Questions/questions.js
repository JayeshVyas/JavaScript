/**
 * 
 * Fibonnacci Series
 * 0, 1, 1, 2, 3, 5, 8, 13
 * 
 * 4 = > 0 1 1 2
 */

// const number = parseInt(prompt('Enter number for n'));//4
// let n1 = 0, n2 = 1, nextNum;

// console.log("Fibbonacci Series of ",number);
// for(let i = 1; i <= number ; i++){
//     console.log(n1);//0 1
//     nextNum = n1+n2;//2
//     n1 = n2;//n1=2
//     n2 = nextNum;//n2=1
// }


// let nums = [2, 7, 11, 15];
// let target = 9;

// function twoSum (nums, target) {
//   let m = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let temp = target - nums[i];
//     if (m.has(temp)) {
//       return i, m.get(temp);
//     }
//     m.set(nums[i], i);
//   }
// };

// console.log(twoSum(nums,target));
/**
 * write a program to find out a factorail of a number
 * 
 * 5! = 5*4*3*2*1 = 120
 * 4! = 4*3*2*1 = 24
 * 3! = 3*2*1 = 6
 * 0! = 1
 */

const num = parseInt(prompt('Enter a Positive number'));

function factorial(num){

  if(num < 0){
    console.log("Error, Number should be positive");
  }
  else if(num === 0){
    console.log("Factorial Result is",1);
  }
  else{
    let fact = 1;

    for(let i = 1; i <= num ; i++){
      fact = fact * i;
    }
    console.log("Factorial Result is",fact);

  }
}
factorial(num);
