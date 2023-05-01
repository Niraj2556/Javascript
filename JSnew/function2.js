// Function Inside Function

// function app(){
//     const myfunc(){//some problem occur here,, otherwise program is right
//         console.log("hell everyone")
//     }
//     let add=(num1,num2){
//         return num1+num2;
//     }
//     //using ARROW function
    // let multi=(num1,num2)=>{num1*num2};
    
//     //calling {myfunc}
//     myfunc();
//     console.log(add(3,4))
//     console.log(multi(44,2))
// }
// app();


//using ARROW function
// suntax is
// variable name=(parameters)=>{ return value,, or return computation}
//example
// let multi=(num1,num2)=>{num1*num2};



// Block scope and Function scope
//let and const are "Block scope" . it work only is the block region
// example
// {
//     let name0 = "Alexa";
//     const name1= "Alia";
//     var name2= "Rohit"
//     console.log(name0,name1)
    // if this code is written outside of the block it shows an error like
    //function2.js:40 Uncaught ReferenceError: name0 is not defined
    // at function2.js:40:13


    // but "var" variable can be written outside of the block easily
// }

// console.log(name2)

