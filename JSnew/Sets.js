//SETS
//Syntax

//-------> const number = new Set( )


//In Sets the duplicates are not Avaiable
// But two different array with same element can be added because the 
// their memory location is not same

// No index based access

// const number = new Set([4,4,21,57,98]);

// //to add item in set
// number.add(433)
// // console.log(number)

// //To check if any item is present in Set or Not
// if (number.has(4)){
//     console.log("present");
// }else{
//     console.log("not present");
// }

// For loop in Set\

// const number = new Set([4,4,21,57,98]);
// for (let data of number){
//     console.log(data)
// }
   
  // Set is usable when repeated ites is present and you want to remove it
const number =[34,4554,3,455,453,3,3,33,33]

const uniqueitems = new Set (number);
console.log (uniqueitems);

// to find the length
let i = 0;
for(items of uniqueitems){
    i++;
}
console.log(i)
