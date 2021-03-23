/*
 * @lc app=leetcode.cn id=1124 lang=typescript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
function longestWPI(hours: number[]): number {
  let max = 0
  hours.unshift(0)
  const stack: number[] = [0]
  for (let i = 1; i < hours.length; i++) {
    if (hours[i] > 8) {
      hours[i] = hours[i - 1] + 1
    } else {
      hours[i] = hours[i - 1] - 1
    }
    if (hours[stack[stack.length - 1]] > hours[i]) {
      stack.push(i)
    }
  }
  for (let i = hours.length; i > max; i--) {
    while (stack.length > 0 && hours[stack[stack.length - 1]] < hours[i]) {
      max = Math.max(max, i - stack.pop())
    }
  }
  return max
};
// @lc code=end

