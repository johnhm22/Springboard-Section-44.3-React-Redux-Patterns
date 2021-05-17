import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Shoply from './Shoply';
import Product from './Product';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/'>
      <Shoply />
      </Route>
      <Route path="/:id">
        <Product />
      </Route>
      <Redirect to='/' />
     </BrowserRouter>
    </div>
  );
}

export default App;
