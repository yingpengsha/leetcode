/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  let mid: number
  while (nums[mid = left + ((right - left) >> 1)] !== target && left < right) {
    const current = nums[mid]
    if (target > nums[mid]) {
      if (current > nums[right] || (current < nums[right] && nums[right] >= target)) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (current < nums[left] || (current > nums[left] && nums[left] <= target)) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  if (nums[mid] === target) {
    return mid
  } else {
    return -1
  }
};
// @lc code=end

