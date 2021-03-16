/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(T: number[]): number[] {
  const stack: number[] = []
  const result = new Array<number>(T.length)
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      result[stack[stack.length - 1]] = i - stack[stack.length - 1]
      stack.pop()
    }
    stack.push(i)
  }
  stack.forEach(index => result[index] = 0)
  return result
};
// @lc code=end

