/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class LRUCache {
    private size: number
    private map: Map<number, number>
    constructor(capacity: number) {
        this.size = capacity
        this.map = new Map()
    }

    get(key: number): number {
        if (!this.map.has(key)) return -1
        const value = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, value)
        return value
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) this.map.delete(key)
        this.map.set(key, value)

        if (this.map.size > this.size) {
            this.map.delete(this.map.keys().next().value)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

