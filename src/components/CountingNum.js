import React from 'react'
import styled from 'styled-components'

const easeOutQuad = (t) => t * (2 - t)
const frameDuration = 1000 / 60

const CountingNum = (props) => {
  const { num, unit, article } = props
  const countTo = parseInt(num, 10)
  const [count, setCount] = React.useState(0)
  const duration = 2000

  React.useEffect(() => {
    let frame = 0
    const totalFrames = Math.round(duration / frameDuration)
    const counter = setInterval(() => {
      frame++
      const progress = easeOutQuad(frame / totalFrames)
      setCount(countTo * progress)

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)
  }, [])

  return (
    <CountText>
      <strong>
        {Math.floor(count)}
        {unit}
      </strong>
      {article}
    </CountText>
  )
}

const CountText = styled.div`
  font-size: 36px;
  color: #3a3a3a;
  margin-bottom: 20px;
  line-hight: 26px;
`

export default CountingNum
