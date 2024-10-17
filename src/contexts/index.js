'use client'

import { Provider as WrapBalancerProvider } from 'react-wrap-balancer'
import { Toaster } from 'sonner'

import { loadDayjsLocale } from '@/configs/dayjs'
import { loadYupValidate } from '@/configs/yup'

import { ReactQueryProvider } from '@/contexts/ReactQuery'

export default function AppProvider({ children, locale }) {
  loadDayjsLocale(locale)
  loadYupValidate(locale)

  return (
    <ReactQueryProvider>
      <WrapBalancerProvider>
        {children}
        <Toaster position="top-right" richColors />
      </WrapBalancerProvider>
    </ReactQueryProvider>
  )
}
