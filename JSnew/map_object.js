//Map Object
//by using it you can us any datatype to store "keys" in the object,,
// basically it is only store in "string"



const person = new Map()

person.set('age','22');

person.set(1,"one");

person.set([333],"abcd");

// console.log(person.key())
//use ".get"() to acces any value
for(let key of person.keys()){
    console.log(key,typeof key)
}