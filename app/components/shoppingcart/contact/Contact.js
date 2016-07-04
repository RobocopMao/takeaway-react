import React from 'react';
import ContactInputItem from './ContactInputItem';

const styles = {
  contactContainer: {
    marginBottom: 18,
    backgroundColor: '#fff',
    color: '#666'    
  },
  contactTitleContainer: {
    overflow: 'hidden',
    padding: 12
  },
  contactTitle: {
    color: '#2fa4e7',
    fontWeight: 'bold',
    fontSize: 13
  },
  inputsContainer: {
    padding: 12,
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc'
  },
  contactFooter: {
    overflow: 'hidden',
    padding: 12,
    fontSize: 13
  },
  delShoppingCart: {
    float: 'right',
    lineHeight: '30px',
    color: '#2fa4e7',
    cursor: 'pointer'
  },
  submitOrder: {
    float: 'right',
    display: 'inline-block',
    padding: '6px 24px',
    margin: '0 12px',
    backgroundColor: '#dd5600',
    borderRadius: 4,
    color: '#fff',
    cursor: 'pointer'
  }
}

export default class Contact extends React.Component {
  render() {
    return (
      <div style={styles.contactContainer}>
        <div style={styles.contactTitleContainer}>
          <span style={styles.contactTitle}>联系方式</span>
        </div>
        <div style={styles.inputsContainer}>
          <ContactInputItem title='姓名' type='text' />
          <ContactInputItem title='电话' type='number' maxLength='11' />
          <ContactInputItem title='地址' type='text' />
        </div>
        <div style={styles.contactFooter}>
          <span style={styles.submitOrder}>下单</span>
          <span style={styles.delShoppingCart}>清空购物车</span>
        </div>
      </div>
    )
  }
}
