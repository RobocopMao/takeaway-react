import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';
import './../public/css/common.css';
import App from './components/App';
import Menu from './components/menu/Menu';
import ShoppingCart from './components/shoppingcart/ShoppingCart';
import Order from './components/order/Order';
import Me from './components/me/Me';

const rootRoute = (
  <Route path='/' component={App}>
    <IndexRoute component={Menu} />
    <Route path='menu' component={Menu} />
    <Route path='shoppingcart' component={ShoppingCart} />
    <Route path='order' component={Order} />
    <Route path='me' component={Me} />
  </Route>
)

ReactDOM.render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById('app')
 );
