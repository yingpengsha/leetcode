/*
 * @lc app=leetcode.cn id=561 lang=typescript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  nums = nums.sort((a, b) => a - b)
  let sum = 0
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]
  }
  return sum
};
// @lc code=end

