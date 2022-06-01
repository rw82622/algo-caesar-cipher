exports.caesarCipher = function (str, shiftAmount) {
  let result = "";
  for (let char of str) {
    if (char.toLowerCase().match(/[a-z]/)) {
      let num = char.charCodeAt(0) + shiftAmount;
      if (shiftAmount > 0 && ((num > 90 && num < 97) || num > 122)) {
        num -= 26;
      } else if (shiftAmount < 0 && (num < 65 || (num < 97 && num > 90))) {
        num += 26;
      }
      char = String.fromCharCode(num);
    }
    result += char;
  }
  return result;
};
