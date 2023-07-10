const palindromes = function (arr) {
  let array = arr.replace(/[^a-z0-9]/gi, '');
  return array.toLowerCase() == [...array].reverse().join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
