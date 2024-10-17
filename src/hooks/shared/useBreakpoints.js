import { useMediaQuery } from 'react-responsive'

export const useBreakpoints = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })
  const isIpadOrDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  })
  const isMobileOrIpad = useMediaQuery({
    query: '(min-width: 640px)',
  })

  return { isDesktopOrLaptop, isIpadOrDesktop, isMobileOrIpad }
}
