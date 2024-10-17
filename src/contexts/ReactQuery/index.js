'use client'

import { useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { STALE_TIME } from '@/constants/apis'

const RQ_DEFAULT_QUERIES_OPTIONS = {
  staleTime: STALE_TIME,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
}

const ReactQueryProvider = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: RQ_DEFAULT_QUERIES_OPTIONS,
        },
      })
  )

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export { RQ_DEFAULT_QUERIES_OPTIONS, ReactQueryProvider }
