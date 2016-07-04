import React from 'react';
import MeInputItem from './MeInputItem';

const styles = {
  contactContainer: {
    marginTop: 12,
    // borderBottom: '1px solid #ccc',
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
  saveInfo: {
    float: 'right',
    display: 'inline-block',
    padding: '6px 12px',
    margin: '0 12px',
    backgroundColor: '#59822c',
    borderRadius: 4,
    color: '#fff',
    cursor: 'pointer'
  }
}

export default class Me extends React.Component {
  render() {
    return (
      <div style={styles.contactContainer}>
        <div style={styles.contactTitleContainer}>
          <span style={styles.contactTitle}>默认联系方式</span>
        </div>
        <div style={styles.inputsContainer}>
          <MeInputItem title='姓名' type='text' />
          <MeInputItem title='电话' type='number' maxLength='11' />
          <MeInputItem title='地址' type='text' />
        </div>
        <div style={styles.contactFooter}>
          <span style={styles.saveInfo}>保存用户信息</span>
        </div>
      </div>
    )
  }
}
