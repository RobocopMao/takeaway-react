import React from 'react';

const styles = {
  orderItemContainer: {
    padding: '12px 12px 8px',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#fff',
    fontSize: 13,
    color: '#666'
  },
  pStyle: {
    padding: '6px 0'
  },
  timeTitleStyle: {
    fontWeight: 'bold'
  },
  orangeColor: {
    color: '#FF8040'
  },
  redColor: {
    fontWeight: 'bold',
    color: '#f00'
  }
}

export default class OrderItem extends React.Component {
  render() {
    return (
      <div style={styles.orderItemContainer}>
        <p style={styles.pStyle}>
          <span style={styles.timeTitleStyle}>订餐时间：</span>
          <span>2016-07-04 11:39:10</span>
        </p>
        <p style={styles.pStyle}>
          <span style={styles.orangeColor}>订餐内容：</span>
          <span>剁椒鱼头套餐(1) 宫爆鸡丁(1) </span>
        </p>
        <p style={styles.pStyle}>
          <span style={styles.orangeColor}>配送信息：</span>
          <span>夏亚飞，18516595395，石湖华城</span>
        </p>
        <p style={styles.pStyle}>
          <span>合计金额：</span>
          <span style={styles.redColor}>￥ 61 元</span>
        </p>
        <p style={styles.pStyle}>
          <span>支付状态：</span>
          <span>货到付款</span>
        </p>
      </div>
    )
  }
}
