/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  if (nums1.length < nums2.length) {
    return intersection(nums2, nums1)
  }
  const result = []
  const SetOne = new Set(nums1)
  const SetTwo = new Set(nums2)
  for (const value of SetTwo) {
    if (SetOne.has(value)) {
      result.push(value)
    }
  }
  return result
};
// @lc code=end

