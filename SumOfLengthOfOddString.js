const array=["A", "Good", "Problem"];
//taking a variable count to count the strings.
let count=0;
//iteration over array of string till length of the array.
for(let i=0;i<array.length;i++){
    //checking wether length of every string is odd or not.
    if(array[i].length%2!=0){
        //incresing the count value as found the odd string.
        count+=array[i].length;
    }
}
//printing the count value of odd string.
console.log(count);