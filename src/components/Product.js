import styled from 'styled-components'
import { v4 as uuidV4 } from 'uuid'

const Product = (props) => {
  return (
    <Container>
      {props && (
        <>
          <Title>{props.title}</Title>
          <Price>${props.price}</Price>
          <Rating>
            {Array(props.rating)
              .fill()
              .map(() => (
                <p key={uuidV4()}>⭐</p>
              ))}
          </Rating>
          <Image src={props.image} />

          <ActionSection>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </ActionSection>
        </>
      )}
    </Container>
  )
}

export default Product

const Container = styled.div`
  background-color: white;
  height: 450px;
  z-index: 100;
  flex: none;
  padding: 20px;
  margin: 10px;
  max-width: 400px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  width: 33.33%;
`

const Title = styled.div``

const Price = styled.div`
  font-weight: 500;
  margin-top: 3px;
`

const Rating = styled.div`
  display: flex;
`

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
