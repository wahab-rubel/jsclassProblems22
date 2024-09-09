function countOccurrences(numbers, find){
  let count = 0;
  for( let i = 0; i < numbers.length; i++ ){
    if(numbers[i] === find){
      count++;
    }
  }
  return count;
}

const numbers1 = [5, 6, 11, 12, 98, 5, 6,];
const find1 = 6;
const result1 = countOccurrences(numbers1, find1);
console.log(result1);



