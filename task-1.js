// write a function to convert temperature from Celsius to Fahrenheit.

function CelsiusToFahrenheit(celsius){
  return (celsius * 9/5) + 30;
}
const celsius = 40;
const fahrenheit = CelsiusToFahrenheit(celsius);
console.log(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees fahrenheit ");
