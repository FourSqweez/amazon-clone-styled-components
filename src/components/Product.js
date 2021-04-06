import styled from 'styled-components'

const Product = () => {
  return (
    <Container>
      <Title>Ipad Pro</Title>
      <Price>$1449</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Image src="https://m.media-amazon.com/images/I/815ztYEEwYL._AC_UL480_FMwebp_QL65_.jpg" />

      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  )
}

export default Product

const Container = styled.div`
  background-color: white;
  height: 300px;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`

const Title = styled.span``

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`

const Rating = styled.div``

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`

const ActionSection = styled.div`
  margin-top: 12px;
  display: grid;
  place-items: center;
`
const AddToCartButton = styled.button`
  width: 100px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 20px;
`
