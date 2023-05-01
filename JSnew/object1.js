//object
//it is like a dictionary of Python
// using curely braces{ }
// object doesnot have "index"
// key are the string by default

// const person= {name:"Alexa",age:20};

// console.log(person.age)
// console.log(person["name"])//another method of printing the value



                    //to add simply key-value pair in object

// //VariableName.key="value"

// person.gender="female"

// console.log(person);


// Question : Add a key-value pair in the object "person" like Email:abc@gmail.com
//and add two word key

// const key="E-mail";//declare that const Variabe
// const person={
//     name:"Alexa",
//     age:20
// };
//here i want to add two word key by using "two word":"value"

//     "person hobbies":["music","sports"];//Not working
// console.log(person.["person hobbie"])



                     //to add a Const variable we use

// person[key]="abc@gmail.com";
// console.log(person);



                      // Itterate in Object
//>>>>>> for in loop
//>>>>>> object.key

//use to print key and value at a same time

const person={
    name:"Alexa",
    age:20
};

//for in loop
// for(key in person){
    // console.log(`${key}:${person[key]}`)
                   //or
    // console.log(key,":",person[key])
// }


//object.key
// console.log(object.key(person));//not answering

                           // another method is 

// for(key of obeject.key(person)){ ////not resposing
//     console.log(person[key])
// }