//splice method
// (start,delete,insert_value)
//(0,3,"hello")
//
//The main difference between fill and splice is ,,in the splice method you 
//also get the  deleted value 

const array1= [4433,546,36,5455,3,5453,5,];

const deteteditems=  array1.splice(0,3,"hello")

console.log(array1)

console.log(deteteditems)