/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
class LinkNode {
    public value: number
    public next?: LinkNode
    constructor(value: number, next?: LinkNode) {
        this.value = value
        this.next = next
    }
}
class RecentCounter {
    private count = 0
    private head = new LinkNode(null)
    private tail = this.head

    ping(t: number): number {
        this.tail = this.tail.next = new LinkNode(t)
        this.count++
        while (this.head.next.value < t - 3000) {
            this.head.next = this.head.next.next
            this.count--
        }
        return this.count
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

