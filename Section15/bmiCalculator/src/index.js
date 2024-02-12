function bmiCalculator(weight, height) {
  var calculation = weight / Math.pow(height, 2);

  if (calculation < 18.5) {
    var interpretation =  "Your BMI is " + calculation + " , so you are underweight.";
  }
    else if (calculation >= 18.5 && calculation <= 24.9) {
      var interpretation = "Your BMI is " + calculation + " , so you have a normal weight.";
    }
      else {
        var interpretation = "Your BMI is " + calculation + " , so you are overweight.";
        }   
    return interpretation
}
var bmi = bmiCalculator(82, 1.8);
console.log(bmi);
