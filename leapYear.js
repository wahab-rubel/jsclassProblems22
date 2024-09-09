/**
 * year will be a leap year if the year is divided by 4
 * simple logic 
 *
 */

// function isLeapYear (year) {
//   if(year % 4 === 0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// const isLipi = isLeapYear(2045);
// console.log(isLipi);

//  Every year that is exactly divisible by four is a leap year, except for
//   years that are exactly divisible by 100

function isLeapYear2(year) {
  if (year % 4 !== 0 && year % 4 === 0){
    return true;
  }
  if (year % 400 === 0){
    return true;
  }
  else{
    return false;
  }
}
const isLeap = isLeapYear2(2100);
const isLeap2 = isLeapYear2(2400);
const isLeap3 = isLeapYear2(1900);
const isLeap4 = isLeapYear2(2052);
console.log(isLeap, isLeap2, isLeap3, isLeap4);