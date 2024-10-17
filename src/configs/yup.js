import * as yup from 'yup'

import * as yupLocaleEN from './yup-en'

const yupLocales = {
  en: yupLocaleEN,
}

export const loadYupValidate = (locale) => {
  const selectedLocale = yupLocales[locale]?.suggestive

  if (selectedLocale) {
    yup.setLocale({
      ...selectedLocale,
      mixed: {
        ...selectedLocale.mixed,
      },
    })
  }
}
