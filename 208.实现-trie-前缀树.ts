/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class Trie {
    private trie: {[p: string]: Trie['trie'] | boolean} = {}

    insert(word: string): void {
        let currentTree = this.trie
        for (const char of word) {
            if (!currentTree[char]) {
                currentTree[char] = {}
            }
            currentTree = currentTree[char] as Trie['trie']
        }
        currentTree.isEnd = true
    }

    search(word: string): boolean {
        let currentTree = this.trie
        for (const char of word) {
            if (!currentTree[char]) {
                return false
            }
            currentTree = currentTree[char] as Trie['trie']
        }
        return !!currentTree.isEnd
    }

    startsWith(prefix: string): boolean {
        let currentTree = this.trie
        for (const char of prefix) {
            if (!currentTree[char]) {
                return false
            }
            currentTree = currentTree[char] as Trie['trie']
        }
        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

