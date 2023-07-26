function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
   return y;
}
var z = x();
z();