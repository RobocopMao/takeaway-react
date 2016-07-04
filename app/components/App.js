import React from 'react';
import Title from './Title';
import Nav from './Nav';

const styles = {
  rootContainer : {
    position: 'absolute',
    top: 0,
		left: 0,
		right: 0,
		bottom: 0
  },
  contentContainer: {
		position: 'absolute',
		top: 48,
		left: 0,
		right: 0,
		bottom: 48,
		overflowX: 'hidden',
		overflowY: 'auto',
    backgroundColor: '#eee'
	}
}

export default class App extends React.Component {
  render() {
    return (
      <div style={styles.rootContainer}>
        <Title />
        <div style={styles.contentContainer}>
          {this.props.children}
        </div>
        <Nav />
      </div>
    )
  }
}
