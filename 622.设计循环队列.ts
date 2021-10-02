/*
 * @lc app=leetcode.cn id=622 lang=typescript
 *
 * [622] 设计循环队列
 */

// @lc code=start
class MyCircularQueue {
    private queue: number[]
    private head = 0
    private tail = 0
    private count = 0
    constructor (k: number) {
      this.queue = new Array(k)
    }

    enQueue (value: number): boolean {
      if (this.isFull()) return false
      this.count++
      this.queue[this.tail] = value
      if (this.tail === this.size - 1) {
        this.tail = 0
      } else {
        this.tail++
      }
      return true
    }

    deQueue (): boolean {
      if (this.isEmpty()) return false
      this.count--
      if (this.head === this.size - 1) {
        this.head = 0
      } else {
        this.head++
      }
      return true
    }

    Front (): number {
      if (this.isEmpty()) {
        return -1
      }
      return this.queue[this.head]
    }

    Rear (): number {
      if (this.isEmpty()) {
        return -1
      }
      return this.queue[this.tail === 0 ? this.size - 1 : this.tail - 1]
    }

    isEmpty (): boolean {
      return this.count === 0
    }

    isFull (): boolean {
      return this.count === this.size
    }

    get size (): number {
      return this.queue.length
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end
