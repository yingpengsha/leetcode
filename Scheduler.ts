// JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
// 完善代码中Scheduler类，使得以下程序能正确输出。
interface Task {
  fn: () => Promise<unknown>,
  resolve: (value: unknown) => void,
  reject: (reason?: any) => void
  finally: () => void
}
class Scheduler {
  private maxCount: number
  private runningQueue: Task[] = []
  private pendingQueue: Task[] = []

  constructor(count = 2) {
    this.maxCount = count
  }

  add(promiseCreator: () => Promise<unknown>): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.pendingQueue.push({
        fn: promiseCreator,
        resolve: (value: unknown) => {
          resolve(value)
        },
        reject: (reason?: any) => {
          reject(reason)
        },
        finally: () => {
          this.runningQueue.splice(this.runningQueue.findIndex(task => task.fn === promiseCreator), 1)
          this.invoke()
        }
      })
      this.invoke()
    })
  }

  invoke() {
    if (this.hasWaitingTasks && this.invokeQueueNotFull) {
      const currentTask = this.pendingQueue.shift() 
      this.runningQueue.push(currentTask)
      currentTask.fn()
        .then(currentTask.resolve, currentTask.reject)
        .finally(currentTask.finally)
    }
  }

  get invokeQueueNotFull(): boolean {
    return this.runningQueue.length < this.maxCount
  }
  get hasWaitingTasks(): boolean {
    return !!this.pendingQueue.length
  }
}

const timeout = (time: number) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time: number, order: string) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4