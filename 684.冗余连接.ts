/*
 * @lc app=leetcode.cn id=684 lang=typescript
 *
 * [684] 冗余连接
 */

// @lc code=start
function findRedundantConnection (edges: number[][]): number[] {
  class UnionMap {
    father = new Map<number, number>()

    find (index: number): number {
      if (this.father.has(index)) {
        this.father.set(index, this.father.get(index) === index ? index : this.find(this.father.get(index)))
      } else {
        this.father.set(index, index)
      }
      return this.father.get(index)
    }

    merge (a: number, b: number) {
      this.father.set(this.find(a), this.find(b))
    }
  }
  const union = new UnionMap()
  const result: number[][] = []
  for (const [a, b] of edges) {
    if (union.find(a) === union.find(b)) {
      result.push([a, b])
    } else {
      union.merge(a, b)
    }
  }
  return result.pop()
};
// @lc code=end
