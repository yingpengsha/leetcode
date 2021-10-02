/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect (nums1: number[], nums2: number[]): number[] {
  if (nums2.length > nums1.length) {
    return intersect(nums2, nums1)
  }
  const result = []
  nums1.sort((a, b) => a - b)
  for (let i = 0; i < nums2.length; i++) {
    if (search(nums1, nums2[i])) {
      result.push(nums2[i])
    }
  }
  return result
};

function search (nums: number[], target: number) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] === target) {
      nums.splice(mid, 1)
      return true
    }
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}
// @lc code=end
