/*
 * @lc app=leetcode.cn id=547 lang=typescript
 *
 * [547] 省份数量
 */

// @lc code=start
class UnionFind {
  father: number[]
  constructor (count: number) {
    this.father = Array(count)
    for (let i = 0; i < this.father.length; i++) {
      this.father[i] = i
    }
  }

  find (index: number): number {
    return this.father[index] = this.father[index] === index ? index : this.find(this.father[index])
  }

  merge (a: number, b: number) {
    this.father[a] = b
  }
}
function findCircleNum (isConnected: number[][]): number {
  if (!isConnected.length) return 0
  const unionFind = new UnionFind(isConnected.length)
  for (let i = 1; i < isConnected.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isConnected[i][j]) {
        unionFind.merge(i, j)
      }
    }
  }

  return unionFind.father.filter((value, index) => value === index).length
};
// @lc code=end
