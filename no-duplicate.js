/**
 * array has some duplicate elements
 * []
 */

const biryaniKhor = ['abul', 'babul', 'abul', 'babul', 'dabul', 'dabul'];

const number = [1, 2, 3, 4, 5, 6, 7, 1, 2, 8, 12, ];

function noDuplicate(array){
  const unique = [];
  for (const item of array){
    if (unique.includes(item) === false){
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(number);
console.log(uniqueArray);


// for (var i = 0; i < 5; i++) {
//   setTimeout(function(){
//     console.log(i);
//   }, 100);
// }