/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  let mid: number
  while (left < right) {
    mid = left + ((right - left) >> 1)
    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
};
// @lc code=end

