let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  let split = words.split("");
  let count = 0;
  for (let i = 0; i < split.length; i++) {
    count++
  }
  if (count >= 5) {
    return words;
  }
}

const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]
