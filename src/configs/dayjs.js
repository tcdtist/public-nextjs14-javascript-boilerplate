import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import duration from 'dayjs/plugin/duration'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import updateLocale from 'dayjs/plugin/updateLocale'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'

const locales = {
  en: () => import('dayjs/locale/en').then((module) => module.default),
}

dayjs.extend(calendar)
dayjs.extend(duration)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(relativeTime)
dayjs.extend(timezone)
dayjs.extend(updateLocale)
dayjs.extend(utc)
dayjs.extend(weekOfYear)

export function loadDayjsLocale(locale) {
  if (locales[locale] !== undefined) {
    locales[locale]().then(() => dayjs.locale(locale))
  }
}
