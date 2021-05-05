/*
 * @lc app=leetcode.cn id=1319 lang=typescript
 *
 * [1319] 连通网络的操作次数
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
    return this.father[this.find(a)] = this.find(b)
  }
}
function makeConnected(n: number, connections: number[][]): number {
  if (n > connections.length + 1) return -1
  const union = new UnionFind(n)
  for (const [a, b] of connections) {
    union.merge(a, b)
  }
  return union.father.filter((value, index) => value === index).length - 1
};
// @lc code=end

