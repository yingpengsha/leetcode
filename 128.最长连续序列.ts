/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
class UnionMap {
  father = new Map<number, number>()

  find (index: number): number {
    if (this.father.has(index)) {
      const father = this.father.get(index)
      this.father.set(index, father === index ? index : this.find(father))
    } else {
      this.father.set(index, index)
    }
    return this.father.get(index)
  }

  add (index: number) {
    this.father.set(this.find(index), this.find(index - 1))
  }
}
function longestConsecutive (nums: number[]): number {
  if (!nums.length) return 0
  const union = new UnionMap()
  for (const value of nums) {
    union.add(value)
  }
  let max = 1
  for (const value of nums) {
    max = Math.max(value - union.find(value), max)
  }
  return max
};
// @lc code=end
