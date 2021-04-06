/*
 * @lc app=leetcode.cn id=919 lang=typescript
 *
 * [919] 完全二叉树插入器
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

class CBTInserter {
    private lineTree: TreeNode[] = []
    constructor(root: TreeNode | null) {
        const pendingWalk = [root]
        this.lineTree = [root]
        while (pendingWalk.length) {
            const children = this.DFS(pendingWalk.shift())
            pendingWalk.push(...children)
            this.lineTree.push(...children)
        }
    }

    private DFS(root: TreeNode | null): TreeNode[] {
        return [root.left, root.right].filter(Boolean)
    }

    insert(v: number): number {
        const node = new TreeNode(v)
        const parent = this.lineTree[Math.floor((this.lineTree.length + 1) / 2) - 1]
        if (parent.left) {
            this.lineTree.push(parent.right = node)
        } else {
            this.lineTree.push(parent.left = node)
        }
        return parent.val
    }

    get_root(): TreeNode | null {
        return this.lineTree[0] || null
    }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
// @lc code=end

