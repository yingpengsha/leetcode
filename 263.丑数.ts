/*
 * @lc app=leetcode.cn id=263 lang=typescript
 *
 * [263] 丑数
 */

// @lc code=start
function isUgly (n: number): boolean {
  if (!n) return false
  while (n !== 1) {
    if (n / 2 === Math.ceil(n / 2)) {
      n /= 2
    } else if (n / 3 === Math.ceil(n / 3)) {
      n /= 3
    } else if (n / 5 === Math.ceil(n / 5)) {
      n /= 5
    } else {
      return false
    }
  }
  return true
};
// @lc code=end
