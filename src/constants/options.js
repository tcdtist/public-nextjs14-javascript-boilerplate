import { GENDER_TYPE_TEXT } from './texts'

export const GENDER_OPTIONS = Object.keys(GENDER_TYPE_TEXT).map((key) => ({
  label: GENDER_TYPE_TEXT[key],
  value: key,
}))
