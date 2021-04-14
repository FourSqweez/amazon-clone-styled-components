import styled from 'styled-components'
import NumberFormat from 'react-number-format'

const CartTotal = ({ getCount, getTotalPrice }) => {
  return (
    <Container>
      <SubTotal>
        Subtotal ( {getCount()} items):
        <NumberFormat
          value={getTotalPrice()}
          displayType={'text'}
          thousandSeparator={true}
          prefix={' $'}
        />
      </SubTotal>
      <CheckoutButton>Proceed to checkout</CheckoutButton>
    </Container>
  )
}

export default CartTotal

const Container = styled.div`
  background-color: white;
  flex: 0.2;
  padding: 20px;
`
const SubTotal = styled.h2`
  margin-bottom: 16px;
`

const CheckoutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  // vertical - horizontal
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  :hover {
    background-color: #ddb347;
  }
`
