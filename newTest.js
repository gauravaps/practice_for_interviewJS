// check first repeated character in the string ;
let str= 'gauurav';
let splitStr = str.split('');
for(let i=0; i<str.length; i++){
    if(str[i] === str[i+1]){
        // console.log(str[i]);
        }}

// check repeated character inside a string;
let str1= 'gauravau';
let repeatedVal=new Set();
for(let i=0; i<str1.length; i++){
    for(let j=i+1; j<str1.length; j++){
        if(str1[i] ===str1[j]){
       repeatedVal.add(str1[i])
        
        }
    }
}
console.log(repeatedVal);
