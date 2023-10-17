let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  let split = words.split("");
  let count = 0;
  for (let i =0; i < split.length ; i++){
    count++ 
  }
  return count;
}

const result = words.map(getWordLengths);

console.log(result); // Output: [5, 5]