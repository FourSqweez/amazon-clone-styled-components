import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <Banner></Banner>

      <Content></Content>
    </Container>
  )
}

export default Home

const Container = styled.div``

const Banner = styled.div`
  background-image: url('https://i.imgur.com/SYHeuYM.jpg');
  min-height: 600px;
  background-position: center;
  background-size: cover;
`

const Content = styled.div``
