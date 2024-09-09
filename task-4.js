function findLongestWord(str) {
  const words = str.split(" "); // Split the string into words
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

// Example usage:
const sentence = "I am learning Programming to become a programmer";
const longest = findLongestWord(sentence);
console.log("Longest word:", longest); // Output: Longest word: Programming