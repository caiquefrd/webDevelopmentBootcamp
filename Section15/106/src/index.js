var output = [];
var number = 1;

function fizzBuzz() {
  
  if (number % 3 === 0 && number % 5 === 0 ) {
    output.push('FizzBuzz');
  } else if ( number % 5 === 0){
    output.push('Buzz');
  } 
  else if ( number % 3 === 0 ){
    output.push('Fizz');
  }
  else {
    output.push(number);
  }
  number++;
  console.log(output)
}
