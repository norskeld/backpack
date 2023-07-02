import { encode } from '@msgpack/msgpack'

import { serialize } from '@lib'

import { createFakeUser } from './data/faker'
import repos from './data/repos'
import npm from './data/npm'

import { getGzipSize, report, reportAverage, reportMedian } from './utils'

interface BenchCase {
  name: string
  factory: () => unknown
}

interface RunOptions {
  withAverages: boolean
  withMedians: boolean
  printCases: boolean
}

async function run(benches: Array<BenchCase>, options: Partial<RunOptions> = {}) {
  const { withAverages = true, withMedians = true, printCases = true } = options

  const collected = []

  for (const bench of benches) {
    const data = bench.factory()

    const json = JSON.stringify(data)
    const jsonGz = await getGzipSize(Buffer.from(json, 'utf8'))

    const bpack = serialize(data)
    const bpackGz = await getGzipSize(bpack)

    const mpack = encode(data)
    const mpackGz = await getGzipSize(mpack)

    const rcases = [
      {
        name: 'JSON',
        size: json.length,
        sizeGz: jsonGz,
        diffs: []
      },
      {
        name: 'MessagePack',
        size: mpack.length,
        sizeGz: mpackGz,
        diffs: []
      },
      {
        name: 'BackPack',
        size: bpack.length,
        sizeGz: bpackGz,
        diffs: []
      }
    ]

    if (printCases) report(`Case '${bench.name}'`, rcases)

    // Collecting for calculating averages/medians.
    collected.push(...rcases)
  }

  if (withAverages) reportAverage(collected)
  if (withMedians) reportMedian(collected)
}

;(async () => {
  await run([
    { name: 'one (1)', factory: () => createFakeUser(1) },
    { name: 'sm (100)', factory: () => createFakeUser(100) },
    { name: 'md (1,000)', factory: () => createFakeUser(1000) },
    { name: 'lg (10,000)', factory: () => createFakeUser(10000) },
    { name: 'rust-lang repositories list', factory: () => repos },
    { name: 'npm meta for @nrsk/sigma', factory: () => npm }
  ])
})()
