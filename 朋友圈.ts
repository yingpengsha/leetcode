type PeopleCount = number
type ActionCount = number
type ActionType = 1 | 2
type PeopleIndex = number
type Action = [ActionType, PeopleIndex, PeopleIndex]

class UnionSet {
  private father: number[]
  private sum: number[]
  constructor(count: number) {
    this.father = Array(count + 1).fill('').map((_, i) => i)
    this.sum = Array(count + 1).fill(1)
  }

  find(index: number): number {
    if (index === this.father[index]) return index
    return this.find(this.father[index])
  }

  merge(a: number, b: number) {
    const fa = this.find(a)
    const fb = this.find(b)
    if (this.sum[fa] >= this.sum[fb]) {
      this.father[fb] = fa
      this.sum[fa] += this.sum[fb]
    } else {
      this.father[fa] = fb
      this.sum[fb] += this.sum[fa]
    }
  }
}

/**
 * {@link http://oj.haizeix.com/problem/71}
 * ## 题目描述
 *  ​所谓一个朋友圈子，不一定其中的人都互相直接认识。
 * 
 *  ​例如：小张的朋友是小李，小李的朋友是小王，那么他们三个人属于一个朋友圈。
 * 
 *  ​现在给出一些人的朋友关系，人按照从 1 到 n 编号在这中间会进行询问某两个人是否属于一个朋友圈，请你编写程序，实现这个过程。
 * 
 * ## 输入
 *  第一行输入两个整数 n,m(1≤n≤10000，3≤m≤100000)，分别代表人数和操作数。
 * 
 *  接下来 m 行，每行三个整 a,b,c（a∈[1,2], 1≤b,c≤n）
 *  当 a=1 时，代表新增一条已知信息，b,c 是朋友
 *  当 a=2 时，代表根据以上信息，询问 b,c 是否是朋友
 * 
 * ## 输出
 *  对于每个 a=2 的操作，输出『Yes』或『No』代表询问的两个人是否是朋友关系。
 */
function main(params: [[PeopleCount, ActionCount], ...Action[]]) {
  const [peopleCount, actionCount] = params[0]
  const unionSet = new UnionSet(peopleCount)
  const actions = params.slice(1) as Action[]
  for (let i = 0; i < actions.length; i++) {
    const [type, a, b] = actions[i];
    if (type === 1) {
      unionSet.merge(a, b)
    } else {
      console.log(unionSet.find(a) === unionSet.find(b) ? 'Yes' : 'No')
    }
  }
}
