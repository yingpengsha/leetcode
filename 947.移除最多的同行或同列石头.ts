/*
 * @lc app=leetcode.cn id=947 lang=typescript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
class UnionFind {
  father: number[]
  constructor(count: number) {
    this.father = Array(count)
    for (let i = 0; i < this.father.length; i++) {
      this.father[i] = i
    }
  }

  find(index: number) {
    return this.father[index] = this.father[index] === index ? index : this.find(this.father[index])
  }

  merge(a: number, b: number) {
    this.father[this.find(a)] = this.find(b)
  }
}
function removeStones(stones: number[][]): number {
  if (stones.length < 2) return 0
  const union = new UnionFind(stones.length)
  const yMap = new Map<number, number>()
  const xMap = new Map<number, number>()
  for (let i = 0; i < stones.length; i++) {
    const [y, x] = stones[i];
    if (yMap.has(y)) {
      union.merge(i, yMap.get(y))
    } else {
      yMap.set(y, i)
    }

    if (xMap.has(x)) {
      union.merge(i, xMap.get(x))
    } else {
      xMap.set(x, i)
    }
  }
  return stones.length - union.father.filter((value, index) => value === index).length
};
// @lc code=end

