/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  if (image[sr][sc] === newColor) return image
  const stack: number[][] = [[sr, sc]]
  const oldColor = image[sr][sc]
  const yMax = image.length
  const xMax = image[0].length
  while (stack.length) {
    const [y, x] = stack.pop()
    image[y][x] = newColor
    if (y > 0 && image[y - 1][x] === oldColor) stack.push([y - 1, x])
    if (x < xMax - 1 && image[y][x + 1] === oldColor) stack.push([y, x + 1])
    if (y < yMax - 1 && image[y + 1][x] === oldColor) stack.push([y + 1, x])
    if (x > 0 && image[y][x - 1] === oldColor) stack.push([y, x - 1])
  }
  return image
};
// @lc code=end

