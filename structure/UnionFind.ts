class UnionFind {
  father: number[]
  constructor(count: number) {
    this.father = Array(count)
    for (let i = 0; i < this.father.length; i++) {
      this.father[i] = i
    }
  }

  find(index: number) {
    return this.father[index] = this.father[index] === index ? index : this.find(this.father[index])
  }

  merge(a: number, b: number) {
    return this.father[this.find(a)] = this.find(b)
  }
}
