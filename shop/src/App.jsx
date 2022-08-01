import React, { Component } from 'react';
import { Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import style from'./App.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Routes>
          <Route path="/" element={ <Layout /> }>
          </Route>
        </Routes>
      </div>
    )
  }
}


