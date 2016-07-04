import React from 'react';
import DetailedList from './detailedlist/DetailedList';
import Contact from './contact/Contact';

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <DetailedList />
        <Contact />
      </div>
    )
  }
}
