/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start
class LinkNode {
    public value: number
    public next: LinkNode
    constructor (value: number, next?: LinkNode) {
      this.value = value
      this.next = next
    }
}
class MyLinkedList {
    private head: LinkNode | null = null

    get (index: number): number {
      let current = this.head
      while (index-- && current) {
        current = current.next
      }
      return current ? current.value : -1
    }

    addAtHead (val: number): void {
      this.head = new LinkNode(val, this.head)
    }

    addAtTail (val: number): void {
      if (!this.head) this.head = new LinkNode(val)
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = new LinkNode(val)
    }

    addAtIndex (index: number, val: number): void {
      if (!index) return this.addAtHead(val)
      let current = this.head
      while (--index && current) {
        current = current.next
      }
      if (index) {

      } else {
        current.next = new LinkNode(val, current.next)
      }
    }

    deleteAtIndex (index: number): void {
      if (!index) {
        this.head = this.head.next
        return
      }
      let current = this.head
      while (--index && current) {
        current = current.next
      }
      if (index) {

      } else if (current.next) {
        current.next = current.next.next
      }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
