function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = generateRandomNumber(10, 20);
console.log(randomNumber);