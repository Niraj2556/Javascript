// array clonning
// it means all the elements if a array is copied in to another array

// let array1=["hello","bananana","salsa","cricket","hockey"];

// let array2=[...array1];
// console.log(array2)

//it work on more than one arrays also and you can add some more array element in it
let array1=["hello","bananana","salsa",];
let array2=["cricket","hockey"];

let array3=[...array1,...array2,"Added element","namaste"]
console.log(array3)