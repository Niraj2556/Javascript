var a ="Tshirt";//global variable
function outfit(){
    var a = "sweater";//local variable
    return a;
}
console.log(outfit())  //It gives the local variable as output

console.log(a)//It gives the global variable as output
