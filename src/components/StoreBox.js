import styled from 'styled-components'

const StoreBox = (props) => {
  const { src, children } = props
  return <Container src={src}>{children}</Container>
}

const Container = styled.div`
  display: inline-block;
  line-height: 22px;
  font-size: 14px;
  height: 64px;
  font-weight: bold;
  padding: 5px 0px 5px 62px;
  margin-right: 39px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 54px;
  background-position: left-top;
`

export default StoreBox
