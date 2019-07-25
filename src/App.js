import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/'
import Garage from './components/Garage/index.js'
import gas_stations from './components/Gas-stations/index.js'
import PaintShops from './components/Paint-shops/index.js'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/paint-shops" component={PaintShops} />
          <Route path="/maintenance" component={Garage} />
          <Route path="/gas" component={gas_stations} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
