const sumAll = function(min, max) {
  let total = 0;
  if(min > max){
    let temp = min;
    min = max;
    max = temp;
  }
  if ((typeof min) === 'number' && (typeof max) === 'number' && min >= 0 && max >= 0){
    for(let i=min; i<=max; i++){
      total += i;
    }
  }
  else{
    return 'ERROR';
  }
  return total;
};
// Do not edit below this line
module.exports = sumAll;
