function multipleswitch(val){
    var result=" ";//pata nhi kyu lagaya hai result waise bhi milta hai
    switch (val){
        case 1:
        case 2:
        case 3:
            result ="laliga";
            break;// break is important after every case
        case 4:
        case 5:
            result= "football";
            break;//if you doesnot use brak statement compiler "direct jump in default"
        default:
            result="cricket";
    }
    return result;
}
console.log(multipleswitch(3));