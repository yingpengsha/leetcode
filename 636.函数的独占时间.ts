/*
 * @lc app=leetcode.cn id=636 lang=typescript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
function exclusiveTime (n: number, logs: string[]): number[] {
  const runtimeMap: { [id: string]: { count: number, start: number } } = {}
  const callStack: string[] = []
  for (let i = 0; i < logs.length; i++) {
    const [id, startOrEnd, tick] = logs[i].split(':')
    if (startOrEnd === 'start') {
      if (callStack.length) {
        runtimeMap[callStack[callStack.length - 1]].count += +tick - runtimeMap[callStack[callStack.length - 1]].start
      }
      if (runtimeMap[id]) {
        runtimeMap[id].start = +tick
      } else {
        runtimeMap[id] = { count: 0, start: +tick }
      }
      callStack.push(id)
    } else {
      runtimeMap[id].count += +tick - runtimeMap[id].start + 1
      callStack.pop()
      if (callStack.length) {
        runtimeMap[callStack[callStack.length - 1]].start = +tick + 1
      }
    }
  }
  return Object.values(runtimeMap).map(o => o.count)
};
// @lc code=end
