//Some method
//Example :- does any numbers is Even

// const num =[33,455,73,6,6677245,645,25];
// const ans =num.some(function(hello){
//     return hello%2===0;
// })
// console.log(ans)
// Output :-True 
// because 6 is even

// Example

const Usercart=[
    {productId:1 , productName:"mobile" , price:10000},
    {productId:2 , productName:"laptop" , price:48000},
    {productId:3 , productName:"TV" ,     price:29000},
]
const ans = Usercart.some(function(user){
    return user.price>30000;
})
console.log(ans)
// output :- true 
// because laptop price is more the 30000