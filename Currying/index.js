function addition(arg1,arg2,arg3){
return arg1+arg2+arg3;
}

console.log(addition(3,4,5));


function additionCurrying(arg1){
    console.log("arg1",arg1);
    return function (arg2){
        console.log("arg2",arg2);
        return function(arg3){
            console.log("arg3",arg3);

            return arg1+arg2+arg3;
        }
    }
}

console.log("Using Currying addition is",additionCurrying(3)(4)(5));