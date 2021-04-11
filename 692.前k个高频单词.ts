/*
 * @lc app=leetcode.cn id=692 lang=typescript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
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
function topKFrequent(words: string[], k: number): string[] {
  if (!k || !words.length) return []
  const cacheMap = new Map<string, number>()
  const compare = (value1: string, value2: string) => {
    const count1 = cacheMap.get(value1)
    const count2 = cacheMap.get(value2)
    if (count1 > count2) {
      return true
    } else if (count1 === count2) {
      for (let i = 0; i < Math.min(value1.length, value2.length) + 1; i++) {
        if (!value2[i] || !value1[i]) {
          return !value1[i]
        }
        if (value1[i] !== value2[i]) {
          return value1[i] < value2[i]
        }
      }
    } else {
      return false
    }
  }
  for (const str of words) {
    if (cacheMap.has(str)) {
      cacheMap.set(str, cacheMap.get(str) + 1)
    } else {
      cacheMap.set(str, 1)
    }
  }
  const heep = new Heap<string>([], compare)
  for (const [str] of cacheMap) {
    heep.add(str)
  }
  const result: string[] = []
  for (let i = 0; i < k; i++) {
    result.push(heep.poll())
  }
  return result
};
// @lc code=end

