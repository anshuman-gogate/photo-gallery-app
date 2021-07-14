import React from 'react'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Header/>

      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/cart"><Cart/></Route>
      </Switch>
    </div>
  )
}

export default App
