//Callback function:-

// function func1(){
//     console.log("Function 1");
// }

// function func2(call){ //
//     console.log("Function 2");
//     call()//callback function
// }

// func2(func1); 
// here func2 is calling their function but the argument is "func1"
// If argument is "func1" then the Parameter "Call" gets "Func1"
// If you call that parameter it print the "Func1"
// .
// .
// .
// .
// .
// Important Array Method(callback function)

//forEach
//map
//filter
//reduce


//forEach

// const users =[
//     {name:"Alia" , age:20},
//     {name:"Mohit" , age:22},
//     {name:"Aliana" , age:201}
// ]                                 // Simple method
// for(data of users){ //using for loop all the elements of "users" is copy in "data" 
//     console.log(data.age,data.name)
// };

//                                 // OR using forEach method
// //name.forEach(function(data)){ console.log(data.keysname)}
// users.forEach(function(data){ 
//     console.log(data.name)
//     console.log(data.age); 
// });


//map method
// in map method always use return 

// const number=[3,4,2,6,8];
// const square=function(number){
//     return number*number;
// }
// const squarenumber = number.map(square)
// console.log(squarenumber)


//example


// const users =[
//     {name:"Alia" , age:20},
//     {name:"Mohit" , age:22},
//     {name:"Aliana" , age:201}
// ]         
// const usersdata = users.map((data)=>{
//     return data.name
// })
// console.log(usersdata)
//OR 

// const usersdata = users.map(function(data){
//     return data.name;
// });
// console.log(usersdata)


                                   //filter method

// const numbers=[3,4,2,6,8];
// const even=function(number){
//     return number%2===0;
// }
// const evenno=numbers.filter(even);
// console.log(evenno)

//                        //Arrow function
// const even1 = numbers.filter((number)=>{
//     return number%2==0;
// })
// console.log(even1)


                               // reduce method 
const numbers=[3,4,2,6,8,44];
//sum of all the number in array

const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;

},233) //any number is written here is also adden in total number

console.log(sum)
//first index value is assign to accumulator and the second value is assign to currentValue 
//accumutator                 currentValue                Return
// 3                const totalpricee =Usercart.map(priceof)              4                        7
// 7                              2                        9
// 9                              6                        15
// 15                             8                        23



//Example:-
// const Usercart=[
//     {productId:1 , productName:"mobile" , price:10000},
//     {productId:2 , productName:"laptop" , price:48000},
//     {productId:3 , productName:"TV" ,     price:30000},
// ]
// const priceof = function(Usercart){
//     return Usercart.price;
// }
// const totalpricee =Usercart.map(priceof)
//     const amount= totalpricee.reduce((totalprice,currentprice)=>{
//     return totalprice + currentprice;
// },0);           //here 0 is the initial value

// console.log(amount);



