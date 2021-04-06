/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let one = NaN
  let two = NaN
  for (let i = 0; i < nums.length; i++) {
    if (one !== nums[i]) {
      one = nums[i]
    } else if (two !== nums[i]) {
      two = nums[i]
    } else {
      nums.splice(i, 1)
      i-=1
    }
  }
  return nums.length
};
// @lc code=end

