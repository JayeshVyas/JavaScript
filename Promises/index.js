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

let promise = new Promise(function(resolve,reject){
    let a = 123;
    let b = "123";

    if(a === b){
        resolve();
    }
    else{
        reject();
    }
});

promise.
then(function(){
   alert("Resolved");
}).catch(function(){
    alert("Rejected")
});