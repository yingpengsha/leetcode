/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const result: number[][] = [[]]
  for (let i = 0; i < nums.length; i++) {
    const length = result.length
    for (let j = 0; j < length; j++) {
      const newN = result[j].slice()
      newN.push(nums[i])
      result.push(newN)
    };
  }
  return result
};
// @lc code=end

