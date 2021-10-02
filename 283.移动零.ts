/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes (nums: number[]): void {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] === 0 && nums[j + 1] !== 0) {
        nums[j] ^= nums[j + 1]
        nums[j + 1] ^= nums[j]
        nums[j] ^= nums[j + 1]
      }
    }
  }
};
// @lc code=end
