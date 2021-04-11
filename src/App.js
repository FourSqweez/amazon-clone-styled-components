import './App.css'
import { useState, useEffect } from 'react'
import Cart from './components/cart/Cart'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { db } from './firebase'

function App() {
  const [cartItems, setCartItem] = useState([])

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }))
      setCartItem(tempItems)
    })
  }

  useEffect(() => {
    getCartItems()
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
