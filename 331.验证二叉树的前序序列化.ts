/*
 * @lc app=leetcode.cn id=331 lang=typescript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
function isValidSerialization(preorder: string): boolean {
  if (preorder === '#') return true
  const preArr = preorder.split(',')
  if (preArr.length % 2 === 0) return false
  const stack = [preArr[0]]
  let index = 1
  while (stack.length && preArr[index]) {
    if (preArr[index] === '#' &&  stack[stack.length - 1] === '#') {
      stack.splice(-2, 2)
    } else {
      stack.push(preArr[index])
      index +=1
    }
  }
  return !stack.length && index === preArr.length - 1
};
// @lc code=end

