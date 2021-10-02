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
function getNumberOfBacklogOrders (orders: number[][]): number {
  const buyHeap = new Heap<{ price: number, amount: number }>([], (v1, v2) => v1.price >= v2.price)
  const sellHeap = new Heap<{ price: number, amount: number }>([], (v1, v2) => v1.price <= v2.price)
  for (let [price, amount, orderType] of orders) {
    if (orderType === 0) {
      while (amount && sellHeap.peek && sellHeap.peek.price <= price) {
        if (sellHeap.peek.amount > amount) {
          sellHeap.peek.amount -= amount
          amount = 0
        } else {
          amount -= sellHeap.peek.amount
          sellHeap.poll()
        }
      }
      if (amount) {
        buyHeap.add({ price, amount })
      }
    } else {
      while (amount && buyHeap.peek && buyHeap.peek.price >= price) {
        if (buyHeap.peek.amount > amount) {
          buyHeap.peek.amount -= amount
          amount = 0
        } else {
          amount -= buyHeap.peek.amount
          buyHeap.poll()
        }
      }
      if (amount) {
        sellHeap.add({ price, amount })
      }
    }
  }
  let result = 0
  while (buyHeap.peek) {
    result += buyHeap.poll().amount
  }
  while (sellHeap.peek) {
    result += sellHeap.poll().amount
  }
  return result % (10 ** 9 + 7)
};
