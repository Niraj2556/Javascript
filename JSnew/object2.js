//Computed Properties in Object

// const key1="objkey1"
// const key2="objkey2"

// const value1="myvalue1"
// const value2="myvalue2"

//compute it and make a single object

// const object={
//     [key1]:value1,
//     [key2]:value2
// }
// console.log(object)

                 //Another way is

// const object={ };
// object[key1]=value1;
// object[key2]=value2;
// console.log(object)


//Spread Operator

const object={
    key1:"value1",
    key2:"value2"
};
const object1={
    key3:"value3",
    key4:"value4"
};
// you can also add key-value pair in it like hello:"answer"

const new1 ={...object,...object1, hello:"answer"}

console.log(new1);

