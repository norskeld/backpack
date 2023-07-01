import { gzip, constants } from 'node:zlib'
import { promisify } from 'node:util'

import { getBorderCharacters, table, type TableUserConfig, type SpanningCellConfig } from 'table'
import chalk from 'chalk'

export function median(ns: Array<number>) {
  const sorted = ns.sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2
  }

  return sorted[middle]
}

export async function getGzipSize(bytes: Uint8Array) {
  const gzipper = promisify(gzip)

  const gzipped = await gzipper(bytes, {
    level: constants.Z_BEST_COMPRESSION,
    strategy: constants.Z_RLE
  })

  return gzipped.length
}

export function getDiff(first: number, second: number) {
  const diff = 100 - (Math.min(first, second) / Math.max(first, second)) * 100

  return first > second ? diff : diff * -1
}

function formatSize(bytes: number, decimals = 2) {
  if (bytes === 0) {
    return '0 bytes'
  }

  const kilo = 1024
  const sizes = ['bytes', 'kB', 'MB', 'GB']

  const index = Math.floor(Math.log(bytes) / Math.log(kilo))
  const number = (bytes / Math.pow(kilo, index)).toFixed(decimals)

  return `${number} ${sizes[index]}`
}

function formatDiff(diff: number) {
  const fmt = new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 })

  const sign = diff > 0 ? '+' : '-'
  const value = fmt.format(Math.abs(diff))
  const formatted = `${sign}${value}%`

  return diff > 0 ? chalk.red(formatted) : chalk.green(formatted)
}

interface ReportCase {
  name: string
  size: number
  sizeGz: number
  diffs: Array<ReportCaseRatio>
}

interface ReportCaseRatio {
  to: string
  diff: number
  diffGz: number
}

function getReportCaseRatios(
  [compIndex, compCase]: [number, ReportCase],
  rcases: Iterable<[number, ReportCase]>
): Array<ReportCaseRatio> {
  const ratios: Array<ReportCaseRatio> = []

  for (const [currentIndex, currentCase] of rcases) {
    if (currentIndex === compIndex) continue

    ratios.push({
      to: currentCase.name,
      diff: getDiff(compCase.size, currentCase.size),
      diffGz: getDiff(compCase.sizeGz, currentCase.sizeGz)
    })
  }

  return ratios
}

function getSpanningCells(rcases: Array<ReportCase>): Array<SpanningCellConfig> {
  const spanningCells: Array<SpanningCellConfig> = []

  let offset = 0

  for (const rcase of rcases) {
    if (!rcase.diffs.length) continue

    spanningCells.push({
      col: 0,
      row: offset + 1,
      rowSpan: rcase.diffs.length + 1
    })

    offset += rcase.diffs.length + 1
  }

  return spanningCells
}

export function report(title: string, rcases: Array<ReportCase>) {
  const ratioed: Array<ReportCase> = []

  for (const [index, rcase] of rcases.entries()) {
    ratioed.push({
      ...rcase,
      diffs: getReportCaseRatios([index, rcase], rcases.entries())
    })
  }

  const maxCaseNameWidth =
    ratioed.reduce((acc, next) => (next.name.length > acc ? next.name.length : acc), 10) + 2

  const tableConfig: TableUserConfig = {
    header: {
      alignment: 'center',
      content: title
    },
    columns: {
      0: { width: maxCaseNameWidth }
    },
    spanningCells: getSpanningCells(ratioed),
    border: getBorderCharacters('norc')
  }

  const data = [['Format', 'Normal', 'Gzipped']]

  for (const [, { name, size, sizeGz, diffs: ratios }] of ratioed.entries()) {
    data.push([name, formatSize(size), formatSize(sizeGz)])

    for (const { to, diff, diffGz } of ratios) {
      data.push(['', `${formatDiff(diff)} to ${to}`, `${formatDiff(diffGz)} to ${to}`])
    }
  }

  console.log(table(data, { ...tableConfig }))
}

export function reportAverage(rcases: Array<ReportCase>) {
  const map = new Map<string, ReportCase>()

  for (const rcase of rcases) {
    let divisor = 0

    const item: ReportCase = {
      name: rcase.name,
      size: 0,
      sizeGz: 0,
      diffs: []
    }

    for (const sample of rcases) {
      if (sample.name !== rcase.name) continue

      item.size += sample.size
      item.sizeGz += sample.sizeGz

      divisor += 1
    }

    if (divisor) {
      item.size /= divisor
      item.sizeGz /= divisor

      map.set(rcase.name, item)
    }
  }

  report('Average (all cases)', [...map.values()])
}

export function reportMedian(rcases: Array<ReportCase>) {
  const grouped = new Map<string, ReportCase[]>()

  for (const rcase of rcases) {
    grouped.set(
      rcase.name,
      grouped.has(rcase.name) ? grouped.get(rcase.name)!.concat(rcase) : [rcase]
    )
  }

  const medians = new Map<string, ReportCase>()

  for (const [name, rcases] of grouped) {
    const copy = Array.from(rcases)

    const item: ReportCase = {
      name,
      size: 0,
      sizeGz: 0,
      diffs: []
    }

    const sizeMedian = median(copy.map(({ size }) => size))
    const sizeGzMedian = median(copy.map(({ sizeGz }) => sizeGz))

    item.size = sizeMedian
    item.sizeGz = sizeGzMedian

    medians.set(name, item)
  }

  report('Median (all cases)', [...medians.values()])
}
