import { setTimeout as sleep } from 'node:timers/promises'
import ProgressBar from 'progress'

const count = 20
const bar = new ProgressBar(`Progress [:bar] :rate/bps :percent :etas`, {
  total: count
})

for (let i = 0; i < count; i++) {
  bar.tick(1)
  await sleep(500)
}
bar.terminate()
