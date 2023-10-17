let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  const result = words.filter(word => word.length >= 5);
  return result;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
