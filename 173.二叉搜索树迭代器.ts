/*
 * @lc app=leetcode.cn id=173 lang=typescript
 *
 * [173] 二叉搜索树迭代器
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
    private collection: number[] = []
    constructor(root: TreeNode | null) {
        const stack = [root]
        while (stack.length) {
            while (stack[stack.length - 1].left) {
                stack.push(stack[stack.length - 1].left)
            }
            while (stack[stack.length - 1] && !stack[stack.length - 1].right) {
                this.collection.push(stack.pop().val)
            }
            if (stack.length) {
                const node = stack.pop()
                this.collection.push(node.val)
                stack.push(node.right)
            }
        }
    }

    next(): number {
        return this.collection.shift()
    }

    hasNext(): boolean {
        return !!this.collection.length
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

