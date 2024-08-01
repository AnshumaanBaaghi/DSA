var palindromePairs = function (words) {
  const arr = [];
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      console.log(words[i], "+", words[j]);
      console.log(words[j], "+", words[i]);
    }
  }
};
const words = ["abcd", "dcba", "lls", "s", "sssll"];
palindromePairs(words);
