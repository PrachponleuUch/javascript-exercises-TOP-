const convertToCelsius = function(temp) {
  let result = (temp - 32) * 5/9;
  if (Number.isInteger(result) && Number.isInteger(temp)){
    return (temp - 32) * 5/9;
  }
  return Number(parseFloat(result).toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let result = (temp * 9/5) + 32;
  if (Number.isInteger(result) && Number.isInteger(temp)){
    return result;
  }
  return Number(parseFloat(result).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
