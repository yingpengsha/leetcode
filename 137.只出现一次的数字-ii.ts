/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
function singleNumber (nums: number[]): number {
  let pre = 0
  let cache = 0
  for (const num of nums) {
    cache ^= num & cache | pre & num
    pre ^= num ^ num & cache
  }
  return pre
};
// @lc code=end
