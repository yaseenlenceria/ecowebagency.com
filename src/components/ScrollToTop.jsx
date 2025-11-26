import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop component ensures that the page scrolls to the top
 * whenever the route changes. This provides a better user experience
 * by starting each page at the top, similar to traditional page navigation.
 */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top whenever pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll without animation
    })
  }, [pathname])

  // This component doesn't render anything
  return null
}

export default ScrollToTop
