/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen (target: number, nums: number[]): number {
  if (nums[0] >= target) return 1
  let start = 0
  let end = 0
  let sum = nums[0]
  let max = Infinity
  while (end < nums.length) {
    if (sum >= target) {
      if (end === start) return 1
      if (end - start + 1 < max) {
        max = end - start + 1
      }
      sum -= nums[start]
      start++
    } else {
      end++
      sum += nums[end]
    }
  }
  return max === Infinity ? 0 : max
};
// @lc code=end
