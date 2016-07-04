import React from 'react';

const styles = {
  detailedListItemContainer: {
    overflow: 'hidden',
    padding: '6px 0',
    fontSize: 13
  },
  dishesTitle: {
    display: 'block',
    float: 'left',
    width: '40%',
    height: 20,
    lineHeight: '20px',
    fontWeight: 'bold'
  },
  dishesPrice: {
    display: 'block',
    float: 'left',
    width: '20%',
    height: 20,
    lineHeight: '20px',
  },
  dishesCountContainer: {
    display: 'block',
    float: 'left',
    width: '40%',
    height: 20,
    lineHeight: '20px',
  },
  dishesCount: {
    display: 'inline-block',
    margin: '0 12px',
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: '#2fa4e7',
    textAlign: 'center',
    color: '#fff',
    cursor: 'pointer'
  }
}

export default class DetailedListItem extends React.Component {
  render() {
    return (
      <div style={styles.detailedListItemContainer}>
        <span style={styles.dishesTitle}>老北京杂酱面</span>
        <span style={styles.dishesPrice}>20</span>
        <span style={styles.dishesCountContainer}>
          <span style={styles.dishesCount}>-</span>
          <span>1</span>
          <span style={styles.dishesCount}>+</span>
        </span>
      </div>
    )
  }
}
