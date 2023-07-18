/**
 * let promise = new Promise(function(resolve,reject){
 *      do something
 * })
 * 
 * states of the promise in JS
 * 1. fullfileed - successfully completed promise.
 * 2. rejected - promise not completed it is failed.
 * 3. pending - pending (neigher successful nor rejected )
 * 4. settled - promise is either fullfilled or rejected
 * 
 * syntax of the then
 * 
 * .then(function(result){
        //handle success
}, function(error){
        //handle error
})
 */

// let promise = new Promise(function(resolve,reject){
//     let a = 123;
//     let b = "123";

//     if(a === b){
//         resolve();
//     }
//     else{
//         reject();
//     }
// });

// promise.
// then(function(){
//    alert("Resolved");
// }).catch(function(){
//     alert("Rejected")
// });

// let promise = new Promise(function(resolve,reject){
//     //resolve('Hey! I am in Resolve State()');
//     var err = "Error in Rest API, check internet connection";
//     reject(err);
// })

// promise.then(
//     function(msg){
//         alert("Promise is Successful",msg);
//     },function(errMsg){
//         console.log("Promise is Failed",errMsg);
//     }
// );


// let promise_first = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let  msg = "Hey Success";
//         if (msg == "Hey Success")
//          resolve(msg);
//          else
//          reject("Error Occurred");
//     },3000);

//     var a = 10
//     var b = 20
//     console.log("Sum is",a+b);
// })
// .then((msg)=>{
//     console.log(msg);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(msg + " Are You there?");
//         },5000);
//         console.log("Hi I am Jayesh Vyas in promise second")

//     })
//     .then((msg)=>{
//         console.log(msg);
//     });
// });

/**
 * write 1,2,3,4,5 with gape of 1 seconds
 */

function demo(){
    for(let i = 1 ; i <= 5 ; i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
demo();