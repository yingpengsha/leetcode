
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  const pFlag = 1
  const qFlag = 1 << 1
  const flags = pFlag | qFlag
  let result

  /**
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  function deepSearch (node) {
    if (!node) return 0
    let state = 0
    state |= deepSearch(node.left)
    state |= deepSearch(node.right)
    if (node.val == p.val) {
      state |= pFlag
    } else if (node.val == q.val) {
      state |= qFlag
    }
    if (state == flags && !result) {
      result = node
    }
    return state
  }
  deepSearch(root)
  return result
}
