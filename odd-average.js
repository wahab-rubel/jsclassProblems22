/**
 * function takes an array of as parameters 
 * give me the average of the odd numbers in the array
 */


function oddAverage(numbers){
  const odds = [];
  for (const number of numbers){
    if (number % 2 === 1){
      // console.log(number);
      odds.push(number);
    }
  }
  // odds is the array that contains the odd numbers
  // console.log(odds);
  let sum = 0;
  for (const number of odds){
    sum = sum + number;
  }
  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  console.log(sum);
  return avg;
}

const numbers = [42, 50, 43, 76, 15, 17, 30]
const avg  = oddAverage(numbers);
console.log('average of the odd numbers is', avg);