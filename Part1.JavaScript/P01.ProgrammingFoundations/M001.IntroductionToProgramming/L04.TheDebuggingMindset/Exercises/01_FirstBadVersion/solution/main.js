export function firstBadVersion(n, isBad) {
  let low = 1; // the first version that could still be the answer
  let high = n; // a version we know is bad

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (isBad(mid)) {
      high = mid; // mid is bad, so the answer is mid or earlier
    } else {
      low = mid + 1; // mid is fine, so the answer is strictly after mid
    }
  }
  return low; // low === high: the first bad version
}
