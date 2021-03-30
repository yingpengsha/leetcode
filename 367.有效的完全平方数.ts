/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  let left = 1
  let right = Math.ceil(num / 2)
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    const value = mid * mid
    if (value === num) {
      return true
    }
    if (value > num) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
};
// @lc code=end

