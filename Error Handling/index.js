/**
 * Try block - we will write the code that we want to run.
 * Catch - if in any code thay should be handled (errors).
 * finally - it will run the code anyhow.
 * throw - if I want to design my custom error then we can use throw
 */
function myDemo(){
    const msg = document.getElementById("para");
    msg.innerHTML = "";
    let x = document.getElementById("demo").value;
    try{
        if(x.trim()==""){
            throw "is Empty";
        }
        if(isNaN(x)){
            throw "is not a number";
        }
        if(x > 10){
            throw "is too high";
        }
        if(x < 5){
            throw "is too low";
        }
    }
    catch(err){
        msg.innerHTML = "Input "+err;
    }
    finally{
        document.getElementById("demo").value = "";
    }
}