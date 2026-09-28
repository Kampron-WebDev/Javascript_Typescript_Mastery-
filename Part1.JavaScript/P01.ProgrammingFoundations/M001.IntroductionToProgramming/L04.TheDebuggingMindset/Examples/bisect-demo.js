// How `git bisect` finds the commit that introduced a bug.   Run me:  node bisect-demo.js
// 1,000 commits. Commits 0..636 are fine, 637..999 are broken. We don't know that. Find it!

const COMMITS = 1000;
const FIRST_BAD = 637; // secret, known only to the "test"

let tests = 0;
function isBroken(commit) {
  tests++;
  return commit >= FIRST_BAD; // imagine: check out this commit, run the app, see if it's broken
}

let good = 0;             // known good
let bad = COMMITS - 1;    // known bad (today's version)
while (bad - good > 1) {
  const middle = Math.floor((good + bad) / 2);
  const broken = isBroken(middle);
  console.log(`test #${tests}: commit ${String(middle).padStart(3)} is ${broken ? '❌ broken' : '✅ fine'}   → search ${broken ? good : middle}..${broken ? middle : bad}`);
  if (broken) bad = middle;
  else good = middle;
}

console.log(`\nThe bug was introduced in commit ${bad}, found with only ${tests} tests out of ${COMMITS} commits.`);
