/*
 * @lc app=leetcode.cn id=841 lang=typescript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
function canVisitAllRooms (rooms: number[][]): boolean {
  const visitedRooms = [0]
  const queue = [0]
  while (queue.length) {
    const currentRoom = queue.shift()
    for (let i = 0; i < rooms[currentRoom].length; i++) {
      if (!visitedRooms.includes(rooms[currentRoom][i])) {
        queue.push(rooms[currentRoom][i])
        visitedRooms.push(rooms[currentRoom][i])
      }
    }
  }
  return rooms.length === visitedRooms.length
};
// @lc code=end
