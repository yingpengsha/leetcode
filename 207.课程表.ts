/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start
function canFinish (numCourses: number, prerequisites: number[][]): boolean {
  const inDegreeCounts = new Array(numCourses).fill(0)
  const outDegreeCollection: number[][] = inDegreeCounts.map(() => [])
  const queue: number[] = []

  for (let i = 0; i < prerequisites.length; i++) {
    const [one, two] = prerequisites[i]
    inDegreeCounts[one] += 1
    outDegreeCollection[two].push(one)
  }

  for (let i = 0; i < inDegreeCounts.length; i++) {
    const inDegreeCount = inDegreeCounts[i]
    if (inDegreeCount === 0) {
      queue.push(i)
    }
  }

  let count = 0
  while (queue.length) {
    const idx = queue.shift()
    count += 1
    for (let i = 0; i < outDegreeCollection[idx].length; i++) {
      const outDegreeIdx = outDegreeCollection[idx][i]
      inDegreeCounts[outDegreeIdx] -= 1
      if (inDegreeCounts[outDegreeIdx] === 0) {
        queue.push(outDegreeIdx)
      }
    }
  }
  return count === numCourses
};
// @lc code=end
