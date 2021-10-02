/*
 * @lc app=leetcode.cn id=341 lang=typescript
 *
 * [341] 扁平化嵌套列表迭代器
 */

// @lc code=start
class NestedIterator {
    private stack: NestedInteger[]
    constructor (nestedList: NestedInteger[]) {
      this.stack = nestedList
    }

    hasNext (): boolean {
      while (this.stack.length !== 0) {
        if (this.stack[0].isInteger()) {
          return true
        } else {
          const cur = this.stack[0].getList()
          this.stack.shift()
          this.stack.unshift(...cur)
        }
      }
    }

    next (): number {
      return this.stack.shift().getInteger()
    }
}
// @lc code=end
