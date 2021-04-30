/*
 * @lc app=leetcode.cn id=990 lang=typescript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
class UnionMap {
  father = new Map<string, string>()

  find(char: string) {
    if (!this.father.has(char)) {
      this.father.set(char, char)
    } else {
      this.father.set(char, this.father.get(char) === char ? char : this.find(this.father.get(char)))
    }
    return this.father.get(char)
  }

  merge(a: string, b: string) {
    if (a !== b) {
      this.father.set(this.find(a), this.find(b))
    }
  }
}
function equationsPossible(equations: string[]): boolean {
  const union = new UnionMap()
  const notEqual: [string, string][] = []
  for (let i = 0; i < equations.length; i++) {
    const exp = equations[i]
    if (exp[1] === '=') {
      union.merge(exp[0], exp[3])
    } else {
      notEqual.push([exp[0], exp[3]])
    }
  }

  return notEqual.length 
    ? !notEqual.some(([a, b]) => union.find(a) === union.find(b))
    : true
};
// @lc code=end

