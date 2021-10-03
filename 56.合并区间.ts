/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge (intervals: number[][]): number[][] {
  const idxOrder = new Map<number, number>()
  for (let i = 0; i < intervals.length; i++) {
    const [left, right] = intervals[i]
    idxOrder.set(left, (idxOrder.get(left) || 0) + 1)
    idxOrder.set(right, (idxOrder.get(right) || 0) - 1)
  }
  const sortIdx = [...idxOrder].sort((a, b) => a[0] - b[0])
  console.log(sortIdx)
  const result: [number, number][] = []
  let left
  let count = 0
  for (let i = 0; i < sortIdx.length; i++) {
    const [idx, order] = sortIdx[i]
    count += order
    if (left === undefined) {
      left = idx
    }
    if (count === 0) {
      result.push([left, idx])
      left = undefined
      count = 0
    }
  }
  return result
};
// @lc code=end
