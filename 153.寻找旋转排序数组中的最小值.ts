/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin (nums: number[]): number {
  const min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) return nums[i]
  }
  return min
};
// @lc code=end
