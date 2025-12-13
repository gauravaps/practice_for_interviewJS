// check if string is a  rotation substring of another
let str = "hellothere";
str = str+str
let str1 = "the";
let flag = false;
for (let i = 0; i < str.length; i++) {
  flag = true;
for (let j = 0; j < str1.length; j++) {
    if (str[i + j] !== str1[j]) {
      flag = false;
      break;
    }  }

  if (flag) {
    flag = true;
    
    break;
  }}
console.log(flag);
