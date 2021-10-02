/*
 * @lc app=leetcode.cn id=1006 lang=typescript
 *
 * [1006] 笨阶乘
 */

// @lc code=start
function clumsy (N: number): number {
  const signs = ['*', '/', '+', '-']
  const numberStack = [N]
  const signStack = []
  for (let i = 0; i < N - 1; i++) {
    const sign = signs[i % 4]
    const number = N - 1 - i
    switch (sign) {
      case '*':
        numberStack.push(numberStack.pop() * number)
        break
      case '/':
        numberStack.push(Math.floor(numberStack.pop() / number))
        break
      default:
        if (signStack.length) {
          const lastSign = signStack.pop()
          const topNumber = numberStack.pop()
          if (lastSign === '-') {
            numberStack.push(numberStack.pop() - topNumber)
          } else {
            numberStack.push(numberStack.pop() + topNumber)
          }
        }
        numberStack.push(number)
        signStack.push(sign)
        break
    }
  }
  if (signStack.length) {
    const lastSign = signStack.pop()
    const topNumber = numberStack.pop()
    if (lastSign === '-') {
      numberStack.push(numberStack.pop() - topNumber)
    } else {
      numberStack.push(numberStack.pop() + topNumber)
    }
  }
  return numberStack[0]
};
// @lc code=end
