import styled from 'styled-components'
import Search from '@material-ui/icons/Search'
import Cart from '@material-ui/icons/AddShoppingCartOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo>
          <img src="https://i.imgur.com/7I9Was5.png" alt="amazonLogo" />
        </HeaderLogo>
      </Link>
      <HeaderOptionAddress>
        <LocationOnOutlinedIcon />
        <HeaderOption>
          <OptionLineOne>Hello,</OptionLineOne>
          <OptionLineTwo>Select Your Address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello, Nazariy</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <Link to="/cart">
            <CartIcon />
            <CartCount>4</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
`

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 9px;
  margin: 0px 6px 0px 6px;
  cursor: pointer;
  img {
    width: 90px;
    margin-left: 11px;
  }

  :hover {
    box-shadow: 0 0 0 1px white;
  }
`

const HeaderOption = styled.div`
  padding: 1px 9px;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 0 1px white;
  }
`
const OptionLineOne = styled.div``

const HeaderOptionAddress = styled.div`
  padding: 1px 6px;
  margin-right: 6px;
  display: flex;
  align-items: center;

  ${OptionLineOne} {
    color: gray;
  }

  ${HeaderOption} {
    :hover {
      box-shadow: none;
    }
  }
  :hover {
    box-shadow: 0 0 0 1px white;
  }
`

const OptionLineTwo = styled.div`
  font-weight: 700;
`

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 6px;
  margin: 9px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;

  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  font-size: 16px;
  border: 0px;
  padding-left: 10px;
  :focus {
    outline: none;
  }
`
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 45px;
  height: 45px;
  cursor: pointer;
`

const SearchIcon = styled(Search)`
  color: black;
`

const HeaderNavItems = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`

const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;
  padding: 9px;
  cursor: pointer;

  a {
    display: flex;
    color: white;
    text-decoration: none;
  }

  :hover {
    box-shadow: 0 0 0 1px white;
  }
`

const CartIcon = styled(Cart)``
const CartCount = styled.div`
  padding-left: 9px;
  font-weight: 700;
  color: #f08804;
`
