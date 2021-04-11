/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 */

// @lc code=start
function nthUglyNumber(n: number): number {
  const result = [1]
  const resultSet = new Set<number>()
  let index2 = 0
  let index3 = 0
  let index5 = 0
  let number2 = result[index2] * 2
  let number3 = result[index3] * 3
  let number5 = result[index5] * 5
  while (result.length < n) {
    const min = Math.min(number2, number3, number5)
    if (!resultSet.has(min)) {
      result.push(min)
      resultSet.add(min)
    }
    if (min === number2) {
      index2 += 1
      number2 = result[index2] * 2
    } else if (min === number3) {
      index3 += 1
      number3 = result[index3] * 3
    } else {
      index5 += 1
      number5 = result[index5] * 5
    }
  }
  return result.pop()
};
// @lc code=end