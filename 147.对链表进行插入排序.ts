/*
 * @lc app=leetcode.cn id=147 lang=typescript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function insertionSortList (head: ListNode | null): ListNode | null {
  const VHead = new ListNode(null, head)
  let selectNode = VHead
  let index = 0
  while (selectNode.next) {
    let compareNode = VHead
    let isInsert = false
    let tempIndex = index
    while (tempIndex--) {
      if (compareNode.next.val >= selectNode.next.val) {
        const temp = selectNode.next
        selectNode.next = temp.next
        temp.next = compareNode.next
        compareNode.next = temp
        isInsert = true
        break
      }
      compareNode = compareNode.next
    }
    if (!isInsert) {
      selectNode = selectNode.next
    }
    index++
  }
  return VHead.next
};
// @lc code=end
