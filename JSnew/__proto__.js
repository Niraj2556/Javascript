//__proto__ :-
//__proto__ is created because of "object.creat(obj1)" and obj1 is set in __proto__


// const obj1={
//     name1:"alexa",
//     age1:20,
// }

// //Important
// const obj2= Object.create(obj1);//Here a __proto__ is set
// //this line is create an object and also set a __proto__ 

//adding some items in empty object
// obj2.name2="Alia";
// obj2.age2=21;

// console.log(obj1.name1)

//Working

//If you want to access "name1" in "obj2" , then JS search in the obj2 first and if 
// didnot find it then move searches into onject 1 because of this code
// const obj2= Object.create(obj1);
//here by using "Object.create()" ,it create an empty object as well as a __proto__ is set.



const method={
    about(){
        return `Name is ${this.name} and age is ${this.age} years old`
    },
    age_check(){
    return this.age >=18;
}
}
function user(name,age){
    const data = Object.create(method);
    data.name= name;
    data.age= age;
    // data.address= address;

    return user;
}
const user1= user("alexa",20)
console.log(user1.about)
