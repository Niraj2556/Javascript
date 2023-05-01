//fill method
// it fill the value you wanted to fill by using the index
// the index is work like
// (value,start_index,last_index) 
// (2,1,5) 
// here "2" is the filling value 
// here "1" is the starting index 
// here "5" is the last index were to fill the value
const array1 = [1,7,8,9,755,7]
array1.fill(0,2,5)
console.log(array1)
// this is the output where "0" is fill in between index "2" to "5" 
// O/P:- [1, 7, 0, 0, 0, 7]