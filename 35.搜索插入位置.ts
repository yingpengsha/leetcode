/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  let mid
  if (target > nums[right]) return nums.length
  if (target< nums[left]) return 0
  while (left < right - 1) {
    mid = (left + right) >> 1
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid
    } else {
      left = mid
    }
  }
  return nums[left] < target ? left + 1 : left
};
// @lc code=end

