// find reverse revese number withou using slit or string method reverse number nikalne ke liye
let num = 1234;
let reverseNum = "";

for (let i = 0; num > 0; i++) {
  reverseNum += num % 10;
  let remainNum = Math.floor(num / 10);
  num = remainNum;
}
console.log(Number(reverseNum));

//// 👉 Fibonacci Series: 0, 1, 1, 2, 3, 5, ...
let num = 5;
let prev = 0;
let next = 1;

for (let i = 1; i <= num; i++) {
  let fibbo = prev + next; // pehle dono ka sum nikalte hain
  console.log(fibbo);
  prev = next; // update previous
  next = fibbo; // update next
}

// reverse the number by using inbuild method /sort method
let num = 1234;
console.log(num.toString().split("").reverse().join(""));

//  Remove decimal
let RemoveDecimal = function (num) {
  while (num !== Math.floor(num)) {
    num = num * 10;
  }
  return num;
};
console.log(RemoveDecimal(12.35));

// seperate the whole number and franction
let num = 12.54;
let fractions = Number((num % 1).toFixed(10));
let wholeNumber = Number((num - fractions).toFixed(10));
console.log(wholeNumber, fractions);

// change into whole number with decimal number..
function changeWhileAndDecimal(whole, decimal) {
  let wholeAndDecimal = "";
  for (let i = 0; i < whole.length; i++) {
    wholeAndDecimal += whole[i];
  }
  wholeAndDecimal += ".";

  for (let j = 0; j < decimal.length; j++) {
    wholeAndDecimal += decimal[j];
  }
  return Number(wholeAndDecimal);
}
console.log(changeWhileAndDecimal([1, 2], [3, 7, 6, 5]));

// isNumber is pelindrom or not..
let num = 121;
let reverseNum = Number(num.toString().split("").reverse().join(""));
console.log(reverseNum);
if (num === reverseNum) {
  console.log("number is pelindrom", num);
} else {
  console.log("number is not pelindrom ", num);
}


//check if number is Armstrong or Not..
const Armstrong =(num) =>{
  let copyNum =num;
  let spitNum= num.toString().split('');
let numpow=0;
  for(let i=0; i<spitNum.length; i++){
  numpow +=Number(Math.pow(spitNum[i],spitNum.length))  
    }
  if(copyNum ==numpow) console.log('this is Armstrong number ' , num);
  else console.log('this is not a armstrong number ' , num);
  
}
Armstrong(153) 

//this is one other method to revese the digit without using inbuild method like tostring ,split,join..
let num = 1234;
let reverseNum = 0;
while (num > 0) {
  reverseNum = reverseNum * 10 + (num % 10); 
  console.log(reverseNum);
    num = Math.floor(num / 10);
}
console.log(reverseNum); 

// find the sum of the digit..
let num = 1234;
let reverseNum = 0;
while (num > 0) {
  reverseNum += (num % 10); 
    num = Math.floor(num / 10);
}
console.log(reverseNum); 

// find the average of the digit..
//ans 5.5, num 4567 total sum =22 and count =4 average=22/4 =5.5
let num = 4567;
let average = 0;
let count = 0;
while(num>0){
  average += num%10;
  count++;
  num = Math.floor(num/10)
}
average = average /count;
console.log(average);

// find the m min digit
let num = 9410527;
let maxNum = 0;
let minNum = Infinity;
// minNum = num%10; we can set initial value with minNum variable
while (num > 0) {
  if (maxNum <= num % 10) {
    maxNum = num % 10;
  } else if (minNum > num % 10) {
    minNum = num % 10;
  }

  num = Math.floor(num / 10);
}
console.log(maxNum, minNum);

//factoril of all digits..
let num = 145;
let fact = 1;
let factLength = 0;
let totoFactorial = 0;

for (; num > 0; ) {
  factLength = num % 10;
  for (let i = 1; i <= factLength; i++) {
    fact *= i;
  }
  totoFactorial += fact;
  fact = 1;
  num = Math.floor(num / 10);
}
console.log(totoFactorial);

//check if number is automorphic number mens 5 square =25 last digit is 5 so it is authomophis.

let num=5
let lastDigit=0
let power=Math.pow(num,2)
console.log(power.toString().lastIndexOf(5) ===1)

//check two digit number is authomophic number
let num1=25
let lastDigit1=0
let power1=Math.pow(num1,2)

let strPower=power1.toString()
let strNum=num1.toString()
let len=strNum.length
let lastDigits=strPower.slice(-len)

if(lastDigits===strNum){  
  console.log(num1 + " is an automorphic number.");
} else {
  console.log(num1 + " is not an automorphic number.");
}


// find the frequency of each characters..

let str ='gauravg';
let obj ={}
for(let i=0; i<str.length; i++){
  if(!obj[str[i]]){
    obj[str[i]] =0
  }
  obj[str[i]] +=1 
}
console.log(obj);

//also cheching for digit frequecy
let num =123243;
let obj1={};

while(num>0){
  if(!obj1[num%10]){
    obj1[num%10]=0
  }
  obj1[num%10] +=1
num =Math.floor(num/10);
}
console.log(obj1);

// check if sum of digit is can divede the whole digit..
let num = 18;
let sum = 0;
let originalNum = num;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
if (originalNum % sum == 0) {
  console.log("true");
} else {
  console.log("false");
}


// check if given number is even or not..
let num = 5;
if (num <= 1) {
  console.log("Not prime");
  return;
}
let i;
for (i = 2; i < num; i++) {
  if (num % i === 0) {
    console.log("Not even");
    break;
  }
}
if (i === num) {
  console.log("number is even");
}

//check all the even numbers
let num = 6;
if (num <= 1) {
  console.log("Not prime");
  return;
}
for (let i = 2; i <= num; i++) {
  let j;
  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      console.log("NOT PRIME =", i);
      break;
    }
  }

  if (j === i) {
    console.log("PRIME =", i);
  }
}

  
//get 1st max or 2nd max or 3rd max  whichever max value you want to print
let arr =[11,20,34,51,24,29];
let sortVlue=arr.sort((a,b)=>b-a);
console.log(sortVlue.slice(1,2));

//print the factor's of the number..
let num=50;
let factor =[];
for(let i=1; i<=num/2; i++){
    if(num%i ===0){
        factor.push(i)
    }
    }
factor.push(num)
console.log(factor);

//find the  HCF (highest common factor)
let num1=12;
let num2=16;
let val=[];

function findHCF(){
    for(let i=1; i<=num1; i++){
    if(num1%i ===0){
        val.unshift(i);
    }
    }

for(let i=0; i<val.length; i++){
    if(num2%val[i] ===0){
        // console.log('highest common factor is ', val[i]);
        // break;
        return val[i]
    }
}
}
console.log(findHCF());

// find the LCM
let num1 = 12;
let num2 = 16;
let val = [];
let lcm = 0;

for (let i = 1; i <= num1; i++) {
  if (num1 % i === 0) {
    val.unshift(i);
  }
}

for (let i = 0; i < val.length; i++) {
  if (num2 % val[i] === 0) {
    lcm = (num1 * num2) / val[i];
    break;
  }
}
console.log(lcm);

//// count the total number of factore of 24;
let num = 24;
let count = 0;
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    count++;
  }
}
console.log(count);

//// sum of all the  number of factore of 12;
let num = 12;
let count = 0;
for (let i = 1; i <= num/2; i++) {
  if (num % i === 0) {
    count +=i
  }
}
count +=num;
console.log(count);

// find the greatest second common factor of the number.
let num = 36;
let greatest = [];
for (let i = 1; i <= num/2; i++) {
  if (num % i === 0) {
    greatest.push(i)
  }
}
console.log(Math.max(...greatest));

// check if the number is perfect number or not it means if sum of all proper divisorexcluding the itself = number.
let num = 28;
let allDivisor = [];
for (let i = 1; i <= num/2; i++) {
  if (num % i === 0) {
    allDivisor.push(i)
  }
}
let sumOfAllDivisor = allDivisor.reduce((acc,curr) => acc + curr);
console.log(sumOfAllDivisor === num);


//⭐ Agar aap ORIGINAL Fibonacci (0, 1 se start) chahte ho:
let num = 5;
let prev = 0;
let next = 1;

console.log(prev); // 0
console.log(next); // 1

for (let i = 2; i <= num; i++) {
    let fib = prev + next;
    console.log(fib);
    prev = next;
    next = fib;
}

// find co-prime number means HCF will be 1;
let num1 = 8;
let num2 = 7;
let val = [];
let count =0;
for (let i = 1; i <= num1; i++) {
  if (num1 % i === 0) {
    val.push(i);
  }
}
for (let i = 0; i < val.length; i++) {
  if (num2 % val[i] === 0) {
    count ++
  }
}
console.log(count ===1);

// find nth fibbonacci number when we want to print from 0,1 and inside array;
let num1 = 8;
let fibbo = [0,1];
let prev=0;
let next =1;
for (let i=2; i<num1; i++) {
    let fibboVal = prev + next;
    fibbo.push(fibboVal);
    prev =next;
    next =fibboVal;
}
console.log(fibbo);

// check the given is belong to fibbonacci series or not;
function belongsToFibboncci(num) {
  return (
    Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
  );
}
console.log(belongsToFibboncci(21));
console.log(belongsToFibboncci(11));

// print all prime number upto N th
function printPrimeNumberUptoNth(num) {
  for (let i = 2; i <= num; i++) {
    let j;
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      }}

    if (j === i) {
      console.log(j);
    }
  }
}
printPrimeNumberUptoNth(20);

// find the sum of  all prime number upto N th
function sumOfPrimeNumberUptoNth(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    let j;
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      }}

    if (j === i) {
      sum += j;
    }
  }

  return sum;
}
console.log(sumOfPrimeNumberUptoNth(10));


// check if two numbers are twin prime or not /
function checkTwinPrime(num1, num2) {
  let i;
  let j;
  let flag = false;
  for (i = 2; i < num1; i++) {
    if (num1 % i === 0) {
      break;
    }
  }
  for (j = 2; j < num2; j++) {
    if (num2 % j === 0) {
      break;
    }
  }
if (i === num1 && j === num2) {
    if (Math.abs(num1 - num2) === 2) {
      return (flag = true);
    }
  } else {
    return (flag = false);
  }
}
console.log(checkTwinPrime(3,5));

// print all fibonacci number given length;
function printFibboNumber(num){
  let allNumbers =[0,1];
  let prev=0;
  let next=1;
  for(let i=2; i<num; i++){
    let fibbo = prev + next;
    if(fibbo > 100) break; 
    allNumbers.push(fibbo)
    prev =next;
    next =fibbo
  }
return allNumbers;
}
console.log(printFibboNumber(15));

// print all fibonacci numbers within the giver starting and ending ranges;
function printFibboNumber(start ,end){
  let allNumbers =[];
  let prev=0;
  let next=1;
  for(let i=2; i<20; i++){
    let fibbo = prev + next;
    if(fibbo >= start && fibbo <= end) allNumbers.push(fibbo)
    prev =next;
    next =fibbo
  }
return allNumbers;
}
console.log(printFibboNumber(10,100));

// find the sum of even fibbonacci numbers upto N;
function printFibboNumber(num){
  let allNumbers =[];
  let prev=0;
  let next=1;
  for(let i=2; i<num; i++){
    let fibbo = prev + next;
   if(fibbo%2 ===0) allNumbers.push(fibbo)
    prev =next;
    next =fibbo
  }
 let sumOfAllFibboNumbers = allNumbers.reduce((acc , curr) => acc+curr)
 return sumOfAllFibboNumbers
}
console.log(printFibboNumber(10));

// check if the sum of two consecutive fibonacci number is prime;
function printFibboNumber(num) {
  let allNumbers = [0, 1];
let prev = 0;
  let next = 1;
  for (let i = 2; i < num; i++) {
    let fibbo = prev + next;
    allNumbers.push(fibbo);
    prev = next;
    next = fibbo;
  }

  for (let i = 2; i < allNumbers.length; i++) {
    let prev = allNumbers[i - 1];
    let next = allNumbers[i];
    let sum = prev + next;
    let isPrime = true;
    if (sum < 2) break;
      for (let j = 2; j < sum; j++) {
      if (sum % j === 0) { 
        isPrime = false;
        break;
      }
    }
if (isPrime) {
      console.log(`Prime Sum Found: ${sum} (prev = ${prev}, next = ${next})`);
    }
  }
}
printFibboNumber(10);

//👉 Print First 5 Prime Fibonacci Numbers
function printFirstNPrimeFibboNumber(num) {
  let prev = 0;
  let next = 1;
  let primeFibo = [];
  for (let i = 1; true; i++) {
    let fib = prev + next;
    // Stop condition
    if (primeFibo.length === 5) break;
    // Check if Fibonacci number is prime
    if (fib > 1) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(fib); j++) {
        if (fib % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeFibo.push(fib);
      }
    }
    // Move Fibonacci forward
    prev = next;
    next = fib;
  }
  return primeFibo;
}
console.log(printFirstNPrimeFibboNumber(12));


//factorization in exponent form..
let num = 120;
let factor = 2;
let output = "";
let primeFactor = {};
while (num > 1) {
  while (num % factor === 0) {
    if (!primeFactor[factor]) {
      primeFactor[factor] = 0;
    }
    primeFactor[factor] += 1;
    num = num / factor;
  }
factor++;
}
Object.keys(primeFactor).forEach((key, i) => {
  output +=
    `${key} ^ ${primeFactor[key]}` +
    (i !== Object.keys(primeFactor).length - 1 ? " * " : " ");
});
console.log(output);
console.log(primeFactor);

//distinct prime factore count// like if 2:3 ,3:4 ,5:2 total keys length =3 
let num = 120;
let factor = 2;
let output = "";
let primeFactor = {};
while (num > 1) {
  while (num % factor === 0) {
    if (!primeFactor[factor]) {
      primeFactor[factor] = 0;
    }
    primeFactor[factor] += 1;
    num = num / factor;
  }
factor++;
}
output= Object.keys(primeFactor).length

console.log(output);
console.log(primeFactor);

//check if the number is powerfull number or not means all keys value must be 2 or greater than 2.
let num = 35;
let factor = 2;
let output = "";
let primeFactor = {};
while (num > 1) {
  while (num % factor === 0) {
    if (!primeFactor[factor]) {
      primeFactor[factor] = 0;
    }
    primeFactor[factor] += 1;
    num = num / factor;
  }
factor++;
}
output=Math.min(...Object.values(primeFactor)) >=2

console.log(output);
console.log(primeFactor);

//withoutu using third variable wsap the two numbers each other
let a=5;
let b=6;

 [b,a] =[a,b];
 console.log(b);

 // find the  product of all distinct prime number as 150 = 2 * 3 * 5 .
let num = 150;
let factor = 2;
let primeFactor = new Set();
while (num > 1) {
  while (num % factor === 0) {
    primeFactor.add(factor)
    num = num / factor;
  }
factor++;
}
console.log([...primeFactor].reduce((acc,curr) => acc*curr));

// check if the number is square free number.
//a number is square free if none of its prime factor repeat.
let num =30;
let factor=2;
let squareFreeNumber =[];
while(num>1){
    while(num%factor ===0){
        squareFreeNumber.push(factor);
        num = num/factor;
    }
    factor++;
}
console.log(squareFreeNumber);
for(let i=0; i<squareFreeNumber.length; i++){
    for(let j=i+1; j<squareFreeNumber.length; j++){
        if(squareFreeNumber[i] === squareFreeNumber[j]){
            console.log(`${num} is not a free square prime number`);
            break;
                    }    }}


// check if the number is smith number number means as 666 individual digit sum =6+6+6=18 ans factor 2+3+3+3+7
let num =666;
let factor=2;
let squareFreeNumber ='';
let numSum =String(num).split('')

//we also can sum the umber of digit.
// let addDigit=0
// while(num>0){
//     addDigit +=num%10;
//     num= Math.floor(num/10)
// }
// console.log(addDigit);

while(num>1){
    while(num%factor ===0){
        squareFreeNumber +=factor;
        num = num/factor;
    }
    factor++;
}

let totalSum =squareFreeNumber.split('').reduce((acc,curr) =>acc+ Number(curr),0);
let totalNumSum = numSum.reduce((acc,curr) => acc + Number(curr),0)

console.log(totalSum === totalNumSum);

// check if the number is a ugly number as factor must be onle 2,3 and 5 and not  any other
let num = 18;
let ugly = [];
let factor = 2;
let uglyNumber = [2, 3, 5];
while (num > 1) {
  while (num % factor === 0) {
    ugly.push(factor);
    num = num / factor;
  }
  factor++;
}
for (let j = 0; j < ugly.length; j++) {
  if (!uglyNumber.includes(ugly[j])) {
    console.log("this is not a ugly number");
    break;
  } else {
    console.log("this is a ugly number");
  }
}

// check if the number is a kaprekar  number as suqare of 45 =2025 and sum of two digit 20+25= again 45;
let num = 45;
let power = Math.pow(num, 2);
let str = power.toString();
let len = str.length;
let rightPart = Number(str.substring(len - 2));
let leftPart = Number(str.substring(0, 2));
let sum = rightPart + leftPart;
if (sum === num) {
  console.log(num + " is a Kaprekar number.");
} else {
  console.log(num + " is not a Kaprekar number.");
}

// check if the number is a happy number as example 19 = 1^2 + 9^2 = 82 = 8^2 + 2^2 = 68 = 6^2 + 8^2 = 100 = 1^2 + 0^2 + 0^2 = 1.
let num = 18;
function isHappyNumber(num) {
  let seen = new Set(); // to track seen numbers
  while (num !== 1) {
    let sum = 0;  // to store sum of squares of digits      
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    if (seen.has(sum)) {
      return false; // cycle detected
    }
    seen.add(sum);
    num = sum;
  }
  return true;
}
console.log(isHappyNumber(num));

// function currying ..
function outerFun(a){
  return function (b){
    return a*b;
  }
}
let currying = outerFun(8)(5);
console.log(currying);

//deep copy of the object..
let obje ={name:"John", age:30, city:"New York"};
let deepCopy = JSON.parse(JSON.stringify(obje));
console.log(deepCopy);
//shallow copy of the object..
let obj ={name:"John", age:30, city:"New York"};
let shallowCopy = Object.assign({}, obj);
console.log(shallowCopy);
//deep copy of the array..
let arr = [1, 2, 3, 4, 5];
let deepArrayCopy = JSON.parse(JSON.stringify(arr));
console.log(deepArrayCopy);
//shallow copy of the array..
let shallowArrayCopy = arr.slice();
console.log(shallowArrayCopy);
//deep copy of the nested object..
let nestedObj = {name:"John", address:{city:"New York", zip:"10001"}};
let deepNestedCopy = JSON.parse(JSON.stringify(nestedObj));
console.log(deepNestedCopy);
//shallow copy of the nested object..
let shallowNestedCopy = Object.assign({}, nestedObj);
console.log(shallowNestedCopy);
// example of the some method and every method in JavaScript
const numbers = [1, 2, 3, 4, 5];  
const mixedNumbers = [1, -2, 3, -4, 5];  
// Using the some method to check if there is at least one even number in the array
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(`Array has at least one even number: ${hasEvenNumber}`); // Output: true
// Using the every method to check if all numbers in the array are positive
const everyMethod = numbers.every((num) => num>0);
console.log(`Array has all numbers is more than 0: ${everyMethod}`);

//checking palendrom number or string
let str = "mam";
function checkPlendrom(val) {
  let reverseStr = "";
  for (let i = val.length - 1; i >= 0; i--) {
    reverseStr += val[i];
  }
  return reverseStr === val;
}
console.log(checkPlendrom(str));

// count frequeny..
function countFrequency(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 0;
    }
    obj[str[i]] += 1;
  }
  return obj;
}
console.log(countFrequency("rgaurav"));

// check if the given string is snsgrsm and check key and value should be same length frequency..
function isAnagram(str1, str2) {
  let obj = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (!obj[str1[i]]) {
      obj[str1[i]] = 0;
    }
    obj[str1[i]] += 1;
  }
  for (let j = 0; j < str2.length; j++) {
    if (!obj[str2[j]]) {
      return false;
    }
  }
  let obj1 = {};
  for (let k = 0; k < str2.length; k++) {
    if (!obj1[str2[k]]) {
      obj1[str2[k]] = 0;
    }
    obj1[str2[k]] += 1;
  }
  for (let key in obj) {
    if (obj[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("gaurav", "ravgu"));


// find first non repeated character..
function firtstNomRepeatedCharacter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 0;
    }
    obj[str[i]] += 1;
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      console.log(key);
      break;
    }}}
firtstNomRepeatedCharacter("aabbcddecff");

// Remove duplicate sring..
function removeDuplicateChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (newStr.indexOf(str[i]) === -1) {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(removeDuplicateChar("programming"));

// check if a string contains only alphabets..
function checkAlfabet(str) {
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    console.log( str[i],'=' ,charCode);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
      return false;
    }   }
  return true;
}
console.log(checkAlfabet("gaurav123")); 

// check if a string contains only alphabets..
let val ='gaurav123';
for(let i=0; i<val.length; i++){
  if(val[i] >=0){
    console.log(val[i]);
    }}

//Reverse only the world in a sentance
let str = "i evol aidni";
let splitStr = str.split(" ");
let reverseorder = "";
for (let i = 0; i < splitStr.length; i++) {
  for (let j = splitStr[i].length - 1; j >= 0; j--) {
    reverseorder += splitStr[i][j];
  }
  reverseorder += " ";
}
console.log(reverseorder.trim());
//output: i love india

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

//count the number of the words in a sentence without using split method..
let str = "my rewamdhya name gaurav";
let newStrLength = 0;
for (let i = 0; i <str.length; i++) {
    if (str[i] === " ") {
        newStrLength++;
    }
}console.log(newStrLength + 1); 

//find all substring of a string output= a,ab,abc,b,bc ,c
let str = "abc";
for (let i = 0; i < str.length; i++) {
  for (j = i; j < str.length; j++) {
    let substring = str.slice(i, j+1 );
    console.log(substring);
  }
}

//find max two value and calculate the product..
let arr =[1,2,3,4,5,6];
let sorted=arr.sort((a,b) => b-a).slice(0,2).reduce((acc,curr) => acc*curr);
console.log(sorted);

//merge the object
let obj1 ={name:"gaurav",age:30};
let obj2={name:"saurav",age:35}
let mergingObj ={...obj1,...obj2};
console.log(mergingObj);
//output : { name: 'saurav', age: 35 }
//In the above code, the properties of obj2 will overwrite the properties of obj1 because they have the same keys. Hence, the final merged object will have the values from obj2.
//if we want to keep both the objects then we can do like this
let mergingObj2 ={...obj1,...obj2,originalName:obj1.name,originalAge:obj1.age};
console.log(mergingObj2);
//output : { name: 'saurav', age: 35, originalName: 'gaurav', originalAge: 30 }

//print the object's name included with vowels.
let obj =[
    {name:'gaurav',roll:25,},
    {name:"saurav",roll:27,},
    {name:'th',roll:15},]

for(let i=0; i<obj.length; i++){
if(obj[i].name.includes('a' || 'e' || 'o' || 'i' || 'u')){
    console.log(obj[i]);
    }}

// check if string is a substring of another
let str = "hellothere";
let str1 = "there";
let flag = true;
console.log(str.includes(str1));

for (let i = 0; i < str1.length; i++) {
  if (str.indexOf(str1[i]) === -1) {
    flag = false;
    break;
  }}
console.log(flag);

// check if string is a substring of another
let str = "hthellothere";
let str1 = "there";
let newstr = "";
let flag = true;
for (let i = 0; i < str.length; i++) {
  if (str[i] === str1[0]) {
    for (let j = 0; j < str1.length; j++) {
      newstr += str[i + j];
      console.log(newstr);
    }
    if (newstr === str1) {
      console.log("substring found at index ", newstr);
      break;
    } else {
      newstr = "";
    }
  }
}

// check if string is a substring of another
let str = "hthellotherefgjdc";
let str1 = "there";
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

//longest without repeating string in a sentence,
let str='abcabcdbca'
let newStr='';
let longestStr='';
for(let i=0; i< str.length; i++){
  let char =i
  if(!newStr.includes(str[i])){
    newStr +=str[i]
  }else {
    if(newStr.length > longestStr.length){
      longestStr = newStr
    }
    newStr =str[i];
  }
  if(newStr.length > longestStr.length){
    longestStr = newStr;
  }
} 
console.log('longest string without repeating..', longestStr);

//find first unique character..
function firstUniqueChar(s) {
  for (let i = 0; i < s.length; i++) {
    let count = 0;
for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) {
        count++;
      }    }
   if (count ===1) {
      
      return i; 
    }
  }
  return -1;
}
 console.log(firstUniqueChar('abcabdd'));

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



















 