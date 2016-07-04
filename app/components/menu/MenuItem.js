import React from 'react';

const styles = {
  menuItemContainer: {
    position: 'relative',
    padding: 12,
    minHeight: 80,
    borderBottom: '1px solid #ccc',
    backgroundColor: '#fff'
  },
  menuImg: {
    position: 'absolute',
    top: 12,
    left: 12,
    borderRadius: 4
  },
  menuDetails: {
    position: 'relative',
    marginLeft: 135,
    color: '#444'
  },
  menuAddBtn: {
    position: 'absolute',
    top: 5,
    right: 10,
    fontSize: 13,
    color: '#2fa4e7',
    cursor: 'pointer'
  },
  dishes: {
    display: 'block',
    padding: '5px 0',
    fontWeight: 'bold',
    fontSize: 13
  },
  dishesContain: {
    display: 'block',
    padding: '5px 0',
    fontSize: 13
  },
  price: {
    display: 'block',
    padding: '5px 0',
    fontWeight: 'bold',
    fontSize: 13
  }
}

export default class MenuItem extends React.Component {
  render() {
    return (
      <div style={styles.menuItemContainer}>
        <img style={styles.menuImg} src={require('./../../../public/images/1.jpg')} />
        <div style={styles.menuDetails}>
          <span style={styles.menuAddBtn}>来一份</span>
          <span style={styles.dishes}>老北京杂酱面</span>
          <span style={styles.dishesContain}>苏格兰打卤面，大杯可乐</span>
          <span style={styles.price}>￥ 25 元</span>
        </div>
      </div>
    )
  }
}
