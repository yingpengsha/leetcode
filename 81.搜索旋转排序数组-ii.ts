/*
 * @lc app=leetcode.cn id=81 lang=typescript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
function search(nums: number[], target: number): boolean {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] === target) {
      return true
    }

    if (nums[left] === nums[right]) {
      left += 1
      continue;
    }

    if (nums[mid] < target) {
      if (nums[left] > nums[right] && nums[mid] <= nums[right] && nums[right] < target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[left] > nums[right] && nums[mid] >= nums[left] && nums[left] > target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return false
};
// @lc code=end

