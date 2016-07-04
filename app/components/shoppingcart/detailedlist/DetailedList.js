import React from 'react';
import DetailedListItem from './DetailedListItem';

const styles = {
  detailedListContainer: {
    marginTop: 12,
    marginBottom: 18,
    backgroundColor: '#fff',
    color: '#666'
  },
  detailedListTitleContainer: {
    overflow: 'hidden',
    padding: 12
  },
  detailedListTitle: {
    color: '#2fa4e7',
    fontWeight: 'bold',
    fontSize: 13
  },
  detailedListItemContainer: {
    padding: 12,
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc'
  },
  detailedListPrice: {
    float: 'right',
    fontSize: 13,
    fontWeight: 'bold'
  }
}

export default class DetailedList extends React.Component {
  render() {
    return (
      <div style={styles.detailedListContainer}>
        <div style={styles.detailedListTitleContainer}>
          <span style={styles.detailedListTitle}>清单</span>
        </div>
        <div style={styles.detailedListItemContainer}>
          <DetailedListItem />
          <DetailedListItem />
        </div>
        <div style={styles.detailedListTitleContainer}>
          <span style={styles.detailedListPrice}>合计： ￥ 50 元</span>
        </div>
      </div>
    )
  }
}
