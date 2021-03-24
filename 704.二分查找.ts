/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  if (target > nums[right] || target < nums[left]) return -1
  let center: number
  while (nums[center = left + Math.floor((right - left + 1) / 2)] !== target && left < right) {
    if (nums[center] > target) {
      right = center - 1
    } else {
      left = center + 1
    }
  }
  if (left === right && nums[center] !== target) {
    return -1
  }
  return center
};
// @lc code=end

