//Call
//Apply
//Bind

function about (hobby ,fav_music){
    console.log("name is " ,this.name,"hobby is" ,hobby,"fav song is",fav_music ,this.age)
}
const person1={
    name:"Alia",
    age:20,
    info:about
}
const person2={
    name:"Alexa",
    age:21,
    info:about
}
//call
about.call(person1,"singing","sanam")

//apply
about.apply(person1,["hello","how are you"])

//bind it return the value thats why you have to store the values i any variable and then call the variable
const hrlo=about.bind(person1,"sleep","sanam")
const hello=about.bind(person2,"football","tum hi ho")
hrlo()
hello()