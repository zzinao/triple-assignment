import React from 'react'
import useFadeIn from '../styles/useFadeIn'
import CountingNum from '../components/CountingNum'
import StoreBox from '../components/StoreBox'
import triple2x from '../assets/triple2x.png'
import ps2x from '../assets/play-store2x.png'
import apple from '../assets/badge-apple4x.png'
import styled from 'styled-components'

const Section = () => {
  const TripleFadeIn = useFadeIn(0)
  const TextFadeIn = useFadeIn(0.1)
  const StoreFadeIn = useFadeIn(0.2)

  return (
    <Container>
      <TripleImg {...TripleFadeIn}>
        <p>2021년 12월 기준</p>
      </TripleImg>

      <MainTextBox>
        <div {...TextFadeIn}>
          <CountingNum num={700} unit="만 명" article="의 여행자" />
          <CountingNum num={100} unit="만 개" article="의 여행 리뷰" />
          <CountingNum num={470} unit="만 개" article="의 여행 일정" />
        </div>
      </MainTextBox>

      <StoreContainer>
        <div {...StoreFadeIn}>
          <StoreBox src={ps2x}>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </StoreBox>
          <StoreBox src={apple}>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </StoreBox>
        </div>
      </StoreContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 1040px;
  margin: 0 auto;
  position: relative;
`

const TripleImg = styled.div`
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  background-image: url(${triple2x});
  background-repeat: no-repeat;
  top: 150px;
  position: absolute;
  & > p {
    padding-top: 280px;
    text-align: center;
  }
`

const MainTextBox = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`
const StoreContainer = styled.div`
  margin: 50px 0px 140px 623px;
  width: 100%;
  max-width: 1200px;
`
export default Section
