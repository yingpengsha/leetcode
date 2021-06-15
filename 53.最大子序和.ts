/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let sum = nums[0], max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const temp  = sum + nums[i]
    if (temp < nums[i]) {
      sum = nums[i]
    } else {
      sum = temp
    }
    if (sum > max) {
      max = sum
    }
  }
  return max
};
// @lc code=end

