function fibb(num){
    if (num<2){
        return num;
    }
    else{
        return fibb(num-1)+fibb(num-2);
    }
    var n=prompt("enter the number");
    if (n<=0){
        console.log("enter the positive number");
    }
    else(i=0;i<n;i++) {
        console.log(i)
    }
}
