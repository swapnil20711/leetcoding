// https://leetcode.com/problems/reverse-string-ii/description/
var reverseStr = function (s, k) {
  s = s.split("");

  for (let x = 0; x < s.length; x = x + 2 * k) {
    let n = k;
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
      let temp = s[i+x];
      s[i+x] = s[x+n - i - 1];
      s[x+n - i - 1] = temp;
    }
  }
  return s.join("");
};

console.log(reverseStr("abcdefg", 2));
