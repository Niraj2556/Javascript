//Extend 
//it is using for add another class in it
class animal{
    constructor (name ,age){
        this.name =name;
        this.age =age;
    }
    about(){
        return`${this.name} age is ${this.age}`
    }
}
class dog extends animal{}
const tommy =new dog("kutta",4)
console.log(tommy)
console.log(tommy.about())