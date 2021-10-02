/*
 * @lc app=leetcode.cn id=621 lang=typescript
 *
 * [621] 任务调度器
 */

// @lc code=start
function leastInterval (tasks: string[], n: number): number {
  const obj = {}
  let max = 0
  let count = 0
  for (let i = 0; i < tasks.length; i++) {
    obj[tasks[i]] = obj[tasks[i]] ? obj[tasks[i]] + 1 : 1
  }
  for (const i in obj) {
    if (max < obj[i]) {
      max = obj[i]
      count = 1
    } else if (max == obj[i]) {
      count++
    }
  }
  return Math.max((max - 1) * (n + 1) + count, tasks.length)
};
// @lc code=end
