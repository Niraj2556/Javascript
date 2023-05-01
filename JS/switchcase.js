function switcha(val){
    var result =  " ";
    switch(val){
        case 1:
            result = "mango";
            break;
        case 2:
            result = "APPLE";
            break;
        case 3:
            result = "grapes";
            break;
        default:
            result = "banana";
            break;
        }
    return result;
}
console.log(switcha(0));