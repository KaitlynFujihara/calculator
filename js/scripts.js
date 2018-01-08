var weightPounds= prompt ("What is your weight? (pounds)");
var heightFeet= prompt ("What is your height? (feet)");
var weightKilo= weightPounds * 0.453592;
var heightMeters= heightFeet * 0.3048;

var bmi= weightKilo / heightMeters / heightMeters;
alert(bmi);

if (bmi < 18.5) {
alert("underweight");
}

else if ((18.5 < bmi) && (bmi < 24.9)) {
alert("perf");
}

else {
alert ("try losing a little weight")
}


var fahrenheit = prompt("Temperature in F");
var celsius = ((parseInt(fahrenheit)-32)*(5/9));
alert("The temperature in celsius is "+ celsius)

var gallons = prompt("Gallons");
var liters = ((parseInt(gallons)/.26417));
alert("The amount of liters in your gallon is " + liters)
