/*
 * @lc app=leetcode.cn id=1753 lang=typescript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
function maximumScore (a: number, b: number, c: number): number {
  let count = 0
  const numbers = [a, b, c]
  numbers.sort((a, b) => b - a)
  while (numbers[1] || numbers[2]) {
    count += 1
    numbers[0] = numbers[0] - 1
    numbers[1] = numbers[1] - 1
    if (numbers[2] > numbers[0]) {
      numbers.unshift(numbers.pop())
    } else if (numbers[2] > numbers[1]) {
      [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
    }
  }
  return count
};
// @lc code=end
