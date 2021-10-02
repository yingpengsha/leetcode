/*
 * @lc app=leetcode.cn id=210 lang=typescript
 *
 * [210] 课程表 II
 */

// @lc code=start
function findOrder (numCourses: number, prerequisites: number[][]): number[] {
  const inDegreeCounts = Array(numCourses).fill(0)
  const outDegreeCollections: number[][] = inDegreeCounts.map(() => [])
  for (let i = 0; i < prerequisites.length; i++) {
    const [one, two] = prerequisites[i]
    inDegreeCounts[one] += 1
    outDegreeCollections[two].push(one)
  }

  const queue: number[] = []
  for (let i = 0; i < inDegreeCounts.length; i++) {
    const inDegreeCount = inDegreeCounts[i]
    if (inDegreeCount === 0) {
      queue.push(i)
    }
  }

  const result: number[] = []
  while (queue.length) {
    const idx = queue.shift()
    result.push(idx)
    for (let i = 0; i < outDegreeCollections[idx].length; i++) {
      const outDegreeIdx = outDegreeCollections[idx][i]
      inDegreeCounts[outDegreeIdx] -= 1
      if (inDegreeCounts[outDegreeIdx] === 0) {
        queue.push(outDegreeIdx)
      }
    }
  }
  return result.length === numCourses
    ? result
    : []
}
// @lc code=end
