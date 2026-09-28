// Practise the debugger. Don't just run this; STEP through it.
//  1. Click left of the line marked 👉 to set a red breakpoint.
//  2. Press F5 → "Debug this file".
//  3. Use F10 (step over) and F11 (step into). Watch `i`, `word` and `longest` in the Variables panel.
//  4. Find out WHY the result is wrong before reading the answer at the bottom.

function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
  for (let i = 1; i < words.length; i++) { // 👉 set the breakpoint here
    const word = words[i];
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

console.log(longestWord('Extraordinary ideas need careful debugging'));
// Expected: 'Extraordinary'. Actual: …?

// Answer (after you've found it!): the loop starts at i = 1, skipping the first word.
// You'd see it immediately in the debugger: `i` is already 1 on the first stop.
