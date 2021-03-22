/*
 * @lc app=leetcode.cn id=542 lang=typescript
 *
 * [542] 01 矩阵
 */

// @lc code=start
class Stack {
  public value = new Array<number[]>()
  public visited = new Set<string>()

  constructor() {
    this.value = []
    this.visited = new Set<string>()
  }

  push(value: number[]) {
    const sign = value.join(',')
    if (this.visited.has(sign)) return
    this.visited.add(sign)
    return this.value.push(value)
  }

  pop() {
    return this.value.pop()
  }

  clear() {
    return this.value.splice(0)
  }

  get length() {
    return this.value.length
  }
}
function BFS(matrix: number[][], x: number, y: number): number[][] {
  const returnStack: number[][] = []
  if (y > 0 && matrix[y - 1][x]) returnStack.push([y - 1, x])
  if (x < matrix[0].length - 1 && matrix[y][x + 1]) returnStack.push([y, x + 1])
  if (y < matrix.length - 1 && matrix[y + 1][x]) returnStack.push([y + 1, x])
  if (x > 0 && matrix[y][x - 1]) returnStack.push([y, x - 1])
  return returnStack
}
function updateMatrix(matrix: number[][]): number[][] {
  const stack = new Stack()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j]) {
        BFS(matrix, j, i).forEach(value => stack.push(value))
      }
    }
  }
  let deep = 0
  while (stack.length) {
    deep += 1
    stack.clear().forEach(([y, x]) => {
      matrix[y][x] = deep
      BFS(matrix, x, y).forEach(value => stack.push(value))
    })
  }
  return matrix
};
updateMatrix([[1],[1],[1],[1],[1],[0]])
// @lc code=end

