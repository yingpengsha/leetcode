/*
 * @lc app=leetcode.cn id=227 lang=typescript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
class Stack<T> {
  private stack: Array<T> = []
  push (value: T) {
    this.stack.push(value)
  }

  pop () {
    return this.stack.pop()
  }

  get top () {
    return this.stack[this.stack.length - 1]
  }

  get length () {
    return this.stack.length
  }
}
const Signs = new Set(['+', '-', '*', '/'])
function parseString (s: string): { head: string, tail: string } {
  let start = 0
  while (s[start] === ' ') {
    start++
  }
  if (Signs.has(s[start])) {
    return {
      head: s[start],
      tail: s.substring(start + 1)
    }
  }
  let end = start + 1
  while (s[end] && !Signs.has(s[end])) {
    end++
  }
  return {
    head: s.substring(start, end),
    tail: s.substring(end)
  }
}
function compute (numberStack: Stack<number>, signStack: Stack<'*' | '/' | '+' | '-'>) {
  const rightValue = numberStack.pop()
  const signValue = signStack.pop()
  const leftValue = numberStack.pop()
  switch (signValue) {
    case '+':
      numberStack.push(leftValue + rightValue)
      break
    case '-':
      numberStack.push(leftValue - rightValue)
      break
    case '*':
      numberStack.push(leftValue * rightValue)
      break
    case '/':
      numberStack.push(Math.floor(leftValue / rightValue))
      break
  }
}
function calculate (s: string): number {
  const numberStack = new Stack<number>()
  const signStack = new Stack<'*' | '/' | '+' | '-'>()
  while (s.length) {
    const { head, tail } = parseString(s)

    if (head === '+' || head === '-') {
      while (signStack.length) {
        compute(numberStack, signStack)
      }
      signStack.push(head)
    } else if (head === '*' || head === '/') {
      signStack.push(head)
    } else {
      numberStack.push(+head)
      if (signStack.top === '*' || signStack.top === '/') {
        compute(numberStack, signStack)
      }
    }

    s = tail
  }

  while (signStack.length) {
    compute(numberStack, signStack)
  }
  return numberStack.pop()
};
// @lc code=end
