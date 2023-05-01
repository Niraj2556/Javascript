//Method

// "function inside the object" is known as method
// const person ={
//     name:"Alia",
//     age:20,
//     about(){ //here the function is created
//         console.log(`person name is ${this.name} and age is ${this.age}`)
// // here "this" is important because " age is not defined at Object.about"
//     }
// }
// person.about()//here the function is called
// console.log(person.name)//here the indivi
function about(){
    console.log(`Person name is ${this.name} and age is ${this.age}`)
}
const person={
    name:"alia",
    age:20,
    // about: console.log("hello"),
    info:about
}
// person.info()
// console.log(person.age)
// person.info()
