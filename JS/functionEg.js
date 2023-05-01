function myown(val){
    if(val<5){
        return "hello";
    }
    else if (val>10){
        return "Goodmorning";
    
    }
    else if (val>15){
        return "goodnight";
    }
    else {
        return "go back";
    }
}
console.log(myown(0))