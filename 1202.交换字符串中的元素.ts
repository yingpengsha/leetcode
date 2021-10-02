/*
 * @lc app=leetcode.cn id=1202 lang=typescript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
class UnionFind {
  father: number[]
  constructor (count: number) {
    this.father = Array(count)
    for (let i = 0; i < this.father.length; i++) {
      this.father[i] = i
    }
  }

  find (index: number) {
    return this.father[index] = this.father[index] === index ? index : this.find(this.father[index])
  }

  merge (a: number, b: number) {
    this.father[this.find(a)] = this.find(b)
  }
}
class Heap<T = number> {
  public nodes: T[] = []
  public compare: (value1: T, value2: T) => boolean
  constructor (initNodes: T[] = [], compare: (value1: T, value2: T) => boolean) {
    initNodes.forEach(node => this.add(node))
    this.compare = compare
  }

  add (value: T) {
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
    while (index && !this.compare(this.nodes[parentIndex], this.nodes[index])) {
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
      if (!this.compare(this.nodes[nextIndex], this.nodes[left])) {
        nextIndex = left
      }
      if (right <= this.size - 1 && !this.compare(this.nodes[nextIndex], this.nodes[right])) {
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
function smallestStringWithSwaps (s: string, pairs: number[][]): string {
  const union = new UnionFind(s.length)
  for (const [a, b] of pairs) {
    union.merge(a, b)
  }
  const charCollections: Heap<string>[] = []
  for (let i = 0; i < union.father.length; i++) {
    if (charCollections[union.find(i)]) {
      charCollections[union.find(i)].add(s[i])
    } else {
      charCollections[union.find(i)] = new Heap<string>([s[i]], (a, b) => a <= b)
    }
  }
  let str = ''
  for (let i = 0; i < union.father.length; i++) {
    str += charCollections[union.find(i)].poll()
  }
  return str
}
// @lc code=end
