prompt = require('prompt-sync');


function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [1];
  }
  else if (n === 2) {
    output = [1, 1];
  }
  else {
    output = [1, 1];
    for (i = 2; i < n; i++) {
      output.push(output[output.length - 1] + output[output.length - 2]);
    }
  }
  return output;
}

console.log(fibonacciGenerator(99999999))
