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
    }
  }
}

firtstNomRepeatedCharacter("aabbcddecff");
