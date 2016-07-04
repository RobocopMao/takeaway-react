import React from 'react';
import { Link } from 'react-router';

const styles = {
  menuContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 48,
    backgroundColor: '#eee',
    opacity: '0.6',
    borderTop: '1px solid #ccc'
  },
  menuItem: {
    float: 'left',
    width: '25%',
    height: 48,
    textAlign: 'center',
    lineHeight: '48px'
  },
  menuLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: 13,
    fontWeight: 'bold'
  }
}

export default class App extends React.Component {
  render() {
    return (
      <nav style={styles.menuContainer}>
        <ul>
          <li style={styles.menuItem}><Link to='/' style={styles.menuLink}>菜单</Link></li>
          <li style={styles.menuItem}><Link to='shoppingcart' style={styles.menuLink}>购物车</Link></li>
          <li style={styles.menuItem}><Link to='order' style={styles.menuLink}>订单</Link></li>
          <li style={styles.menuItem}><Link to='me' style={styles.menuLink}>我的</Link></li>
        </ul>
      </nav>
    )
  }
}
