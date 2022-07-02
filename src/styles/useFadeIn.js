import { useRef, useEffect } from 'react'

const useFadeIn = (delay = 0) => {
  const element = useRef()
  useEffect(() => {
    if (element.current) {
      const { current } = element
      current.style.transitionProperty = 'opacity transform'
      current.style.transitionDuration = '0.7s'
      current.style.transitionDelay = `${delay}s`
      current.style.opacity = 1
      current.style.transform = 'translate3d(0, 0, 0)'
    }
  }, [])
  return {
    ref: element,
    style: { opacity: 0, transform: 'translate3d(0, 7%, 0)' },
  }
}
export default useFadeIn
