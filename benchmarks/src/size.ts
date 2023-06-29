import { gzip, constants } from 'node:zlib'
import { promisify } from 'node:util'

import { encode } from '@msgpack/msgpack'
import unindent from '@nrsk/unindent'

import { serialize } from '@lib'

import { createFakeUser } from './data/faker'
import repos from './data/repos'
import npm from './data/npm'

interface BenchCase {
  name: string
  factory: () => Promise<unknown>
}

async function calcGzip(bytes: Uint8Array) {
  const gzipper = promisify(gzip)

  const gzipped = await gzipper(bytes, {
    level: constants.Z_BEST_COMPRESSION,
    strategy: constants.Z_RLE
  })

  return gzipped.length
}

function calcDiff(first: number, second: number) {
  const fmt = new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 })

  const diff = fmt.format(100 - (Math.min(first, second) / Math.max(first, second)) * 100)
  const label = first > second ? 'bigger' : 'smaller'

  return { diff, label }
}

function prettyBytes(bytes: number, decimals = 2) {
  if (bytes === 0) {
    return '0 bytes'
  }

  const kilo = 1024
  const sizes = ['bytes', 'kB', 'MB', 'GB']

  const index = Math.floor(Math.log(bytes) / Math.log(kilo))
  const number = (bytes / Math.pow(kilo, index)).toFixed(decimals)

  return `${number} ${sizes[index]}`
}

async function run(benches: Array<BenchCase>) {
  const totals: Array<{ name: string; size: string }> = []

  for (const [_, bench] of benches.entries()) {
    const data = await bench.factory()

    const json = JSON.stringify(data)
    const jsonGz = await calcGzip(Buffer.from(json, 'utf8'))

    const bpack = serialize(data)
    const bpackGz = await calcGzip(bpack)

    const mpack = encode(data)
    const mpackGz = await calcGzip(mpack)

    // Ratios.

    const bpackVsJson = calcDiff(bpack.length, json.length)
    const bpackVsJsonGz = calcDiff(bpackGz, jsonGz)
    const bpackVsMp = calcDiff(bpack.length, mpack.length)
    const bpackVsMpGz = calcDiff(bpackGz, mpackGz)

    const mpackVsJson = calcDiff(mpack.length, json.length)
    const mpackVsJsonGz = calcDiff(mpackGz, jsonGz)
    const mpackVsBp = calcDiff(mpack.length, bpack.length)
    const mpackVsBpGz = calcDiff(mpackGz, bpackGz)

    console.log(
      unindent`
        -- Case '${bench.name}'

        JSON         ${prettyBytes(json.length)} (${prettyBytes(jsonGz)} gzipped)

        MessagePack  ${prettyBytes(mpack.length)} (${prettyBytes(mpackGz)} gzipped)

                     ${mpackVsJson.diff}% ${mpackVsJson.label} than JSON
                     ${mpackVsBp.diff}% ${mpackVsBp.label} than BackPack

                     ${mpackVsJsonGz.diff}% ${mpackVsJsonGz.label} than JSON (gzipped)
                     ${mpackVsBpGz.diff}% ${mpackVsBpGz.label} than BackPack (gzipped)

        BackPack     ${prettyBytes(bpack.length)} (${prettyBytes(bpackGz)} gzipped)

                     ${bpackVsJson.diff}% ${bpackVsJson.label} than JSON
                     ${bpackVsMp.diff}% ${bpackVsMp.label} than MessagePack

                     ${bpackVsJsonGz.diff}% ${bpackVsJsonGz.label} than JSON (gzipped)
                     ${bpackVsMpGz.diff}% ${bpackVsMpGz.label} than MessagePack (gzipped)
      `
    )

    totals.push({ name: bench.name, size: bpackVsJson.diff })
  }
}

await run([
  { name: 'one (1)', factory: async () => createFakeUser(1) },
  { name: 'sm (100)', factory: async () => createFakeUser(100) },
  { name: 'md (1,000)', factory: async () => createFakeUser(1000) },
  { name: 'rust-lang repositories list', factory: async () => repos },
  { name: 'npm meta for @nrsk/sigma', factory: async () => npm }
])
