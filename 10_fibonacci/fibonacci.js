const fibonacci = function(a) {
  a = parseInt(a);
  if(a < 0){
    return 'OOPS';
  }
  if(a < 2)
  {
    return a;
  }
  return fibonacci(a-1) + fibonacci(a-2);
};

// Do not edit below this line
module.exports = fibonacci;
