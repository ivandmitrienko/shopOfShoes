import React, { Component } from 'react';
import style from'./App.module.css';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Header />
      </div>
    )
  }
}


