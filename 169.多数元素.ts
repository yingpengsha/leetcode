/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  nums.sort()
  if (nums.length % 2 === 0) {
    return nums[(nums.length >> 1) - 1]
  } else {
    return nums[nums.length >> 1]
  }
};
// @lc code=end

