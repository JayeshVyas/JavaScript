/** Hoisting in JS 
 * default behavior  of the JS of moving declarations to the top.
*/
demo();

function demo(){
    console.log("I am in Function Demo()");
}

console.log("Value of x", x);
var x = 10;


x=10;
console.log("XYZ=",x);
var xyz;

c="Nano";
console.log(c);
let c;


console.log(b);
const b = "10";
b="20";
