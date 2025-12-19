// Count frequency of each words.
let str = 'i love codind and i love javascript';
let splitStr = str.split(' ')
let obj={};
for(let i=0; i<splitStr.length; i++){
  if(!obj[splitStr[i]]){
    obj[splitStr[i]] = 0;
  }
  obj[splitStr[i]] +=1;
  }
console.log(obj);

