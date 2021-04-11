/*
 * @lc app=leetcode.cn id=295 lang=typescript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
class Heap<T = number> {
    public nodes: T[] = []
    public compare: (value1: T, value2: T) => boolean
    constructor(initNodes: T[] = [], compare: (value1: T, value2: T) => boolean) {
        initNodes.forEach(node => this.add(node))
        this.compare = compare
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
        while (index && !this.compare(this.nodes[parentIndex], this.nodes[index])) {
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

    private swap(index1: number, index2: number) {
        [this.nodes[index1], this.nodes[index2]] = [this.nodes[index2], this.nodes[index1]]
    }

    get peek() {
        return this.nodes[0]
    }

    get size() {
        return this.nodes.length
    }
}
class MedianFinder {
    private maxHeap = new Heap<number>([], (v1, v2) => v1 >= v2)
    private minHeap = new Heap<number>([], (v1, v2) => v1 <= v2)

    addNum(num: number): void {
        if (this.minHeap.size === 0) {
            this.minHeap.add(num)
        } else {
            if (num > this.minHeap.peek) {
                this.minHeap.add(num)
            } else {
                this.maxHeap.add(num)
            }
        }
        if (this.minHeap.size - this.maxHeap.size === 2) {
            this.maxHeap.add(this.minHeap.poll())
        } else if (this.maxHeap.size - this.minHeap.size === 1) {
            this.minHeap.add(this.maxHeap.poll())
        }
    }

    findMedian(): number {
        if (this.minHeap.size === 0) {
            return undefined
        }
        if (this.minHeap.size === this.maxHeap.size) {
            return (this.maxHeap.peek + this.minHeap.peek) / 2
        } else {
            return this.minHeap.peek
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

