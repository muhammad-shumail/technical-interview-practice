function delayEvent(task, delayTime) {
   setTimeout(() => {
    console.log(`task status : ${task}`)
  }, delayTime)
}

const task1 = delayEvent('This will be logged after 2 seconds', 2000)
task1
const task2 = delayEvent('Dummy Server Response Time is 300ms', 300)
task2