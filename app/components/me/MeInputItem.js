import React from 'react';

const styles = {
  inputContainer: {
    display: 'block',
    padding: '6px 0'
  },
  inputTitle: {
    display: 'inline-block',
    width: 80,
    fontWeight: 'bold',
    fontSize: 13
  },
  inputStyle: {
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: 4
  }
}

export default class InputItemForMe extends React.Component {
  render() {
    return (
      <label style={styles.inputContainer}>
        <span style={styles.inputTitle}>{this.props.title}</span>
        <input type={this.props.type} maxLength={this.props.maxLength} style={styles.inputStyle}/>
      </label>
    )
  }
}
