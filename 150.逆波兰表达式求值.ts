/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN (tokens: string[]): number {
  const stack: number[] = []
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    let rightValue
    switch (token) {
      case '+':
        stack.push(stack.pop() + stack.pop())
        break
      case '-':
        rightValue = stack.pop()
        stack.push(stack.pop() - rightValue)
        break
      case '*':
        stack.push(stack.pop() * stack.pop())
        break
      case '/':
        rightValue = stack.pop()
        stack.push(~~(stack.pop() / rightValue))
        break
      default:
        stack.push(+token)
        break
    }
  }
  return stack.pop()
};
// @lc code=end
