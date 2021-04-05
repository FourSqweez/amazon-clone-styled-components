import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
