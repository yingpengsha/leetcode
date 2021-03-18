/*
 * @lc app=leetcode.cn id=133 lang=typescript
 *
 * [133] 克隆图
 */

// @lc code=start
// class Node {
//     val: number
//     neighbors: Node[]
//     constructor(val?: number, neighbors?: Node[]) {
//         this.val = (val===undefined ? 0 : val)
//         this.neighbors = (neighbors===undefined ? [] : neighbors)
//     }
// }

function cloneGraph(node: Node | null, clonedNodes = new WeakMap<Node, Node>()): Node | null {
  if (!node) return node 
  const newNode = new Node(node.val)
  clonedNodes.set(node, newNode)
  for (let i = 0; i < node.neighbors.length; i++) {
    const neighbor = node.neighbors[i];
    if (clonedNodes.has(neighbor)) {
      newNode.neighbors.push(clonedNodes.get(neighbor))
    } else {
      newNode.neighbors.push(cloneGraph(neighbor, clonedNodes))
    }
  }
  return newNode
};
// @lc code=end

