/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    const midValue = nums[mid]
    const lastValue = nums[mid === 0 ? nums.length - 1 : mid - 1]
    if (midValue < lastValue) {
      return midValue
    }
    if (nums[left] === nums[right] && nums[left] === midValue) {
      left++
      right--
      continue
    }
    if (midValue > nums[right]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return nums[left]
};
// @lc code=end

