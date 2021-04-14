import './App.css'
import { useState, useEffect } from 'react'
import Cart from './components/cart/Cart'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth, db } from './firebase'
import Login from './components/Login'

function App() {
  const [user, setUser] = useState(null)
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

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null)
    })
  }

  useEffect(() => {
    getCartItems()
  }, [])

  console.log('User', user)

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="App">
          <Header signOut={signOut} user={user} cartItems={cartItems} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  )
}

export default App
