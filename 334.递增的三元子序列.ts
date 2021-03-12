/*
 * @lc app=leetcode.cn id=334 lang=typescript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) return false
  let small = nums[0]
  let mid: number
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < small) {
      small = nums[i]
    } else if (nums[i] > small && (nums[i] < mid || mid === undefined)) {
      mid = nums[i]
    } else if (nums[i] > mid && mid !== undefined) {
      return true
    }
  }
  return false
};
// @lc code=end

