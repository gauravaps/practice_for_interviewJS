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

