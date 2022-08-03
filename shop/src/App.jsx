import React, { Component } from 'react';
import { Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import style from'./App.module.css';
import Homepage from './components/Homepage';

export default class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route path="/Collections" element={< Homepage />} />
            <Route path="/Men" element={< Homepage />} />
            <Route path="/Women" element={< Homepage />} />
            <Route path="/About" element={< Homepage />} />
            <Route path="/Contact" element={< Homepage />} />
          </Route>
        </Routes>
      </div>
    )
  }
}


