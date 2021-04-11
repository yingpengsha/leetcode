/*
 * @lc app=leetcode.cn id=373 lang=typescript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  if (!k) return []
  class Heap<T = number> {
    public nodes: T[] = []
    constructor(initNodes: T[] = [], compare?: (value1: T, value2: T) => boolean) {
      initNodes.forEach(node => this.add(node))
      if (compare) {
        this.isRightOrder = compare
      }
    }
  
    add(value: T) {
      this.nodes.push(value)
      this.shiftUp(this.size - 1)
    }
  
    poll() {
      if (!this.size) return undefined
      const peekValue = this.nodes.shift()
      if (this.size) {
        this.nodes.unshift(this.nodes.pop())
        this.shiftDown(0)
      }
      return peekValue
    }
  
    private shiftUp(index: number) {
      let parentIndex = (index - 1) >> 1
      while (index && !this.isRightOrder(this.nodes[parentIndex], this.nodes[index])) {
        this.swap(parentIndex, index)
        index = parentIndex
        parentIndex = (index - 1) >> 1
      }
    }
  
    private shiftDown(index: number) {
      let left = index * 2 + 1
      let right = (index + 1) * 2
      while (left <= this.size - 1) {
        let nextIndex = index
        if (!this.isRightOrder(this.nodes[nextIndex], this.nodes[left])) {
          nextIndex = left
        }
        if (right <= this.size - 1 && !this.isRightOrder(this.nodes[nextIndex], this.nodes[right])) {
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
  
    private swap(index1: number, index2: number) {
      [this.nodes[index1], this.nodes[index2]] = [this.nodes[index2], this.nodes[index1]]
    }
  
    get peek() {
      return this.nodes[0]
    }
  
    get size() {
      return this.nodes.length
    }
  
    isRightOrder(value1: T, value2: T) {
      if (typeof value1 === 'number') {
        return value1 >= value2
      }
    }
  }
  const compare = (value1: [number, number], value2: [number, number]) => value1[0] + value1[1] >= value2[0] + value2[1]
  const biggestHeap = new Heap<[number, number]>([], compare)
  for (const value1 of nums1) {
    for (const value2 of nums2) {
      if (biggestHeap.size > k  && compare([value1, value2], biggestHeap.peek)) {
        break
      }
      biggestHeap.add([value1, value2])
      if (biggestHeap.size > k) {
        biggestHeap.poll()
      }
    }
  }
  return biggestHeap.nodes
};
// @lc code=end

