//find the longest word in a sentence
let str = "my rewamdhya name gaurav";
let splitStr = str.split(" ");
let newStrLength = "";
for (let i = 0; i < splitStr.length; i++) {
  if (splitStr[i].length > newStrLength.length) {
    newStrLength = splitStr[i];
  }
}
console.log(newStrLength);    


