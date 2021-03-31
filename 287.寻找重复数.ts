/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  const visited = new Set<number>()
  for (let i = 0; i < nums.length; i++) {
    if (visited.has(nums[i])) {
      return nums[i]
    }
    visited.add(nums[i])
  }
};
// @lc code=end

