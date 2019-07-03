import React, {Component} from 'react';

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#cf4646',
    color: 'white'
  },
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  },
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem'
  }
};

export class Title extends Component {
  render() {
    return (
      <div style={styles.title}>
        <h1 style={styles.h1}>My React Life!</h1>
        <div>
          <img style={styles.logo} src="https://i.imgur.com/zMyd1fQ.jpg"/>
          <img style={styles.logo} src="https://i.imgur.com/ZJi4JKw.jpg"/>
        </div>
        <h2 style={styles.h2}>Great App.</h2>
      </div>
    );
  }
}
