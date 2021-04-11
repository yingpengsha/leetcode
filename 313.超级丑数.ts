/*
 * @lc app=leetcode.cn id=313 lang=typescript
 *
 * [313] 超级丑数
 */

// @lc code=start
function nthSuperUglyNumber(n: number, primes: number[]): number {
  if (n === 1) return 1
  const result = [1]
  const baseIndex = Array(primes.length).fill(0)
  const numberArr = primes.slice()
  while (result.length < n) {
    const min = Math.min.apply(Math, numberArr)
    if (result[result.length - 1] !== min) {
      result.push(min)
    }

    const index = numberArr.findIndex(n => n === min)
    baseIndex[index] = baseIndex[index] + 1
    numberArr[index] = result[baseIndex[index]] * primes[index]
  }
  return result.pop()
};
// @lc code=end

