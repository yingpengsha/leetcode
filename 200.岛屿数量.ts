/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  const islands: string[] = []
  const xMax = grid[0].length
  const yMax = grid.length
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islands.push(`isLand${islands.length + 1}`)
        BFS(grid, j, i, xMax, yMax, islands[islands.length - 1])
      }
    }
  }
  return islands.length
};

function BFS(grid: string[][], x: number, y: number, xMax: number, yMax: number, sign: string) {
  grid[y][x] = sign.toString()
  // top
  if (y > 0) {
    if (grid[y - 1][x] === '1') {
      BFS(grid, x, y-1, xMax, yMax, sign)
    }
  }
  // right
  if (x < xMax - 1) {
    if (grid[y][x + 1] === '1') {
      BFS(grid, x + 1, y, xMax, yMax, sign)
    }
  }
  // bottom
  if (y < yMax - 1) {
    if (grid[y + 1][x] === '1') {
      BFS(grid, x, y + 1, xMax, yMax, sign)
    }
  }
  // left
  if (x > 0) {
    if (grid[y][x -1] === '1') {
      BFS(grid, x - 1, y, xMax, yMax, sign)
    }
  }
}
// @lc code=end

