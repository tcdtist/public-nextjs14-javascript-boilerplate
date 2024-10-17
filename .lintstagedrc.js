import { relative } from 'path'

const buildEslintCommand = (/** @type {any[]} */ filenames) =>
  `next lint --fix --file ${filenames.map((f) => relative(process.cwd(), f)).join(' --file ')}`

export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
