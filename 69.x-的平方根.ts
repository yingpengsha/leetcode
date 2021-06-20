/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x < 2) return x
  let left = 1
  let right = x - 1
  let mid: number
  while (left < right - 1) {
    mid = (left + right) >> 1
    const temp = mid * mid
    if (temp === x) {
      return mid
    } else if (temp > x) {
      right = mid
    } else {
      left = mid
    }
  }
  return left
};
// @lc code=end

