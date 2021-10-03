/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 递增子序列
 */

// @lc code=start
function findSubsequences (nums: number[]): number[][] {
  const result: number[][] = []

  function getResult (startIdx: number, parent: number[]) {
    if (parent.length > 1) {
      result.push(parent)
    }
    const uniqueNext = new Set<number>()
    for (let i = startIdx; i < nums.length; i++) {
      const num = nums[i]
      if ((!parent.length || num >= parent[parent.length - 1]) && !uniqueNext.has(num)) {
        uniqueNext.add(num)
        getResult(i + 1, parent.concat(num))
      }
    }
  }

  getResult(0, [])

  return result
};
// @lc code=end
