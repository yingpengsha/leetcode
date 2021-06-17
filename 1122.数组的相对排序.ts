/*
 * @lc app=leetcode.cn id=1122 lang=typescript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const counts: number[] = []
  for (let i = 0; i < arr1.length; i++) {
    counts[arr1[i]] = (counts[arr1[i]] || 0) + 1
  }
  let result: number[] = []
  for (let i = 0; i < arr2.length; i++) {
    result = result.concat(Array(counts[arr2[i]]).fill(arr2[i]))
    delete counts[arr2[i]]
  }
  counts.forEach((count, index) => {
    result = result.concat(Array(count).fill(index))
  })
  return result
};
// @lc code=end

