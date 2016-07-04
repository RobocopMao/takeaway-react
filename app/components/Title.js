import React from 'react';

const styles = {
  titleContainer: {
    height: 48,
    backgroundColor: '#2fa4e7',
    textAlign: 'center'
  },
  title: {
    lineHeight: '48px',
    fontSize: 18,
    color: '#fff'
  }
}

export default class Title extends React.Component {
  render() {
    return (
      <div style={styles.titleContainer}>
        <span style={styles.title}>React 外卖</span>
      </div>
    )
  }
}
