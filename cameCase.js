  // solving the string came case problem 
// we have to count the number of words




function camelcase(s) {
    // Write your code here
let count = 1;
for ( let i =0 ; i <s.length ; i++){
    if (s[i]===s[i].toUpperCase()){
        count ++ ;
}
}
return count ;
}
