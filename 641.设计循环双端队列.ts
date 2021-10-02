/*
 * @lc app=leetcode.cn id=641 lang=typescript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
class MyCircularDeque {
    private queue: number[] = []
    private size: number = 0
    private count: number = 0
    private tail: number = 0
    private head: number = 0
    constructor (k: number) {
      this.size = k ?? 0
      this.queue = new Array<number>(this.size)
    }

    insertFront (value: number): boolean {
      if (this.isFull()) return false
      if (this.count !== 0) {
        if (this.head === 0) { this.head = this.size - 1 } else this.head -= 1
      }
      this.queue[this.head] = value
      this.count += 1
      return true
    }

    insertLast (value: number): boolean {
      if (this.isFull()) return false
      if (this.count !== 0) {
        if (this.tail === this.size - 1) this.tail = 0
        else this.tail += 1
      }
      this.queue[this.tail] = value
      this.count += 1
      return true
    }

    deleteFront (): boolean {
      if (this.isEmpty()) return false
      if (this.count !== 1) {
        if (this.head === this.size - 1) this.head = 0
        else this.head += 1
      }
      this.count -= 1
      return true
    }

    deleteLast (): boolean {
      if (this.isEmpty()) return false
      if (this.count !== 1) {
        if (this.tail === 0) this.tail = this.size - 1
        else this.tail -= 1
      }
      this.count -= 1
      return true
    }

    getFront (): number {
      if (this.isEmpty()) return -1
      return this.queue[this.head]
    }

    getRear (): number {
      if (this.isEmpty()) return -1
      return this.queue[this.tail]
    }

    isEmpty (): boolean {
      return this.count === 0
    }

    isFull (): boolean {
      return this.count === this.size
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end
