import React, { useRef, useEffect } from 'react'

const useFadeIn = (delay = 0) => {
  const element = useRef()
  useEffect(() => {
    if (element.current) {
      const { current } = element
      console.log(current)
      current.style.transition = ` opacity 0.7s ${delay}s `
      current.style.transform = 'translate(0px)'
      current.style.marginTop = '0px'
      current.style.opacity = 1
    }
  }, [])
  return {
    ref: element,
    style: { opacity: 0, transform: 'translate(50px 50px)', marginTop: '10px' },
  }
}
export default useFadeIn
