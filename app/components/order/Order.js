import React from 'react';
import OrderItem from './OrderItem';

export default class Order extends React.Component {
  render() {
    return (
      <div>
        <OrderItem />
        <OrderItem />
      </div>
    )
  }
}
