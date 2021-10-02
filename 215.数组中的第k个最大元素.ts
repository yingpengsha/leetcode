/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
class Heap {
  private nodes: number[] = []
  constructor (initNodes: number[] = []) {
    initNodes.forEach(node => this.add(node))
  }

  add (value: number) {
    this.nodes.push(value)
    this.shiftUp(this.size - 1)
  }

  poll () {
    if (!this.size) return undefined
    const peekValue = this.nodes.shift()
    if (this.size) {
      this.nodes.unshift(this.nodes.pop())
      this.shiftDown(0)
    }
    return peekValue
  }

  private shiftUp (index: number) {
    let parentIndex = (index - 1) >> 1
    while (index && this.nodes[parentIndex] < this.nodes[index]) {
      this.swap(parentIndex, index)
      index = parentIndex
      parentIndex = (index - 1) >> 1
    }
  }

  private shiftDown (index: number) {
    let left = index * 2 + 1
    let right = (index + 1) * 2
    while (left <= this.size - 1) {
      let nextIndex = index
      if (this.nodes[left] > this.nodes[nextIndex]) {
        nextIndex = left
      }
      if (right <= this.size - 1 && this.nodes[right] > this.nodes[nextIndex]) {
        nextIndex = right
      }
      if (nextIndex === index) {
        return index
      } else {
        this.swap(nextIndex, index)
        index = nextIndex
        left = index * 2 + 1
        right = (index + 1) * 2
      }
    }
    return index
  }

  private swap (index1: number, index2: number) {
    [this.nodes[index1], this.nodes[index2]] = [this.nodes[index2], this.nodes[index1]]
  }

  get peek () {
    return this.nodes[0]
  }

  get size () {
    return this.nodes.length
  }
}
function findKthLargest (nums: number[], k: number): number {
  const numberHeep = new Heap(nums)
  while (--k) {
    numberHeep.poll()
  }
  return numberHeep.peek
};
// @lc code=end
