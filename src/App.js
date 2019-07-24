import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Garage from './components/Garage'
import gas_stations from './components/gas-stations'
import paint_shops from './components/paint-shops'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/paint-shops" component={paint_shops} />
          <Route path="/maintenance" component={Garage} />
          <Route path="/gas" component={gas_stations} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
