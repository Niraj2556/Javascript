//Object Distructing
//remember dictionary in python

// const band={
//     bandname : "sanam",
//     leadSinger : "puri",
//     songs: "mai hoon"
// };

// for accessing the elements you have to store them in a variable like
// variable name= objectname.keyYouWant 

// const bandname  = band.bandname;
// const leadSinger = band.leadSinger;

// console.log(leadSinger,bandname)

// OR
// without storing the value you can just use 
// variable{key name }
//restprop is use to print the other elements which is not typed
//restprops is print both key-value pair 

// const{songs,bandname,...restprops}=band;
// console.log(songs,restprops)





                        //  Object inside the Array
// const band=[
//     {bandname : "sanam",
//     leadSinger : "puri",
//     songs: "mai hoon",
//     instrument: "guitar"
// }
// ]
// for(i of band){
//     console.log(i.songs)
// }

//Example of the students userId, Name , Gender;

const school=[
    {userId:1, name:alia , Gender:female},
    {userId:2, name:falak , Gender:female},
    {userId:3, name:rahul , Gender:male},
    {userId:4, name:aliaana , Gender:female},
]
// for(let student of school){
//     console.log(student.name)
// }


          // for NESTES distructuring
const[user1,user2]=school;
console.log(user2)