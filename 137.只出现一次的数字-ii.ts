/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let pre = 0
  let cache = 0
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] ^ (nums[i] & cache)
    cache ^= nums[i] & cache
    cache |= (pre & num)
    pre ^= num
  }
  return pre
};
// @lc code=end

