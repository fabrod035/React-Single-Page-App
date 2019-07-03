import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            The Good Programmer!
          </a>
        </p>
        <p style={styles.date}>
          Generated with FountainJS v1.0.0 on Wed Jul 03 2019 11:40:39 GMT-0400 (Eastern Daylight Time)
        </p>
      </header>
    );
  }
}
