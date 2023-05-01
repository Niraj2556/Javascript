function palindrome(string){
    var splitstring= string.split('');
    var reversestring = splitstring.reverse( );
    var reversestring= reversestring.join('');
    if(string==reversestring){
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")
    }
 }
 palindrome("asa")