import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Garage from './components/Garage';
import gasStations from './components/Gas-stations';
import PaintShops from './components/Paint-shops';
import Navigation from './components/Navigation';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/paint-shops" component={PaintShops} />
          <Route path="/maintenance" component={Garage} />
          <Route path="/gas" component={gasStations} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
