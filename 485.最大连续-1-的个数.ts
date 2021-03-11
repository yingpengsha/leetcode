/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let start = 0
  let end = 0
  let max = 0
  while (start < nums.length) {
    while (nums[start] && nums[start] === 0) start++
    end = start
    while (nums[end] && nums[end] === 1) end++
    if (end - start > max) {
      max = end - start
    }
    start = end + 1
  }
  return max
};
// @lc code=end

