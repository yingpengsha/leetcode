/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  if (!nums.length || target < nums[0] || target > nums[nums.length - 1]) return [-1, -1]
  let left  = 0
  let right = nums.length - 1
  let result = [-1, -1]
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if(nums[mid] === target && nums[mid - 1] !== target) {
      result[0] = mid
      break
    }
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  if (result[0] === -1) {
    return [-1, -1]
  }
  left = result[0]
  right = nums.length - 1
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if(nums[mid] === target && nums[mid + 1] !== target) {
      result[1] = mid
      break
    }
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return result
};
// @lc code=end

