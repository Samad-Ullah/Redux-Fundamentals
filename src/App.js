import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import './App.css';
import Product_Listing from './component/Product_Listing';
import Product_Detail from './component/Product_Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        &nbsp;
        <Switch>
          <Route path="/"exact component={Product_Listing}></Route>
          <Route path="product/:productId" exact component={Product_Detail}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
