import styled from 'styled-components'
import CartItem from './CartItem'
import { v4 as uuidV4 } from 'uuid'

const CartItems = ({ cartItems }) => {
  return (
    <Container>
      <Title>Shopping Cart</Title>

      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem item={item.product} id={item.id} key={uuidV4()} />
        ))}
      </ItemsContainer>
    </Container>
  )
}

export default CartItems

const Container = styled.div`
  background-color: white;
  flex: 0.8;
  margin-right: 18px;
  padding: 20px;
`

const Title = styled.h1`
  margin-bottom: 8px;
`

const ItemsContainer = styled.div``
