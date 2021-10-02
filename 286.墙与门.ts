function wallsAndGates (rooms: number[][]): void {
  const doors: number[][] = []
  const yMax = rooms.length
  const xMax = rooms[0].length
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      const room = rooms[i][j]
      if (room === 0) {
        doors.push([i, j, 1])
      }
    }
  }
  for (let i = 0; i < doors.length; i++) {
    const [y, x, deep] = doors[i]
    doors.push(...BFS(rooms, x, y, xMax, yMax, deep))
  }
};
function BFS (rooms: number[][], x: number, y: number, xMax: number, yMax: number, deep: number) {
  const next: number[][] = []
  if (y > 0) {
    if (rooms[y - 1][x] > deep) {
      rooms[y - 1][x] = deep
      next.push([y - 1, x, deep + 1])
    }
  }
  if (x < xMax - 1) {
    if (rooms[y][x + 1] > deep) {
      rooms[y][x + 1] = deep
      next.push([y, x + 1, deep + 1])
    }
  }
  if (y < yMax - 1) {
    if (rooms[y + 1][x] > deep) {
      rooms[y + 1][x] = deep
      next.push([y + 1, x, deep + 1])
    }
  }
  if (x > 0) {
    if (rooms[y][x - 1] > deep) {
      rooms[y][x - 1] = deep
      next.push([y, x - 1, deep + 1])
    }
  }
  return next
}
