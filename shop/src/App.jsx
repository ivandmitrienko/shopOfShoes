import React, { Component } from 'react';
import { Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import style from'./App.module.css';
import Homepage from './components/Homepage';

export default class App extends Component {

  constructor (){
    super();

    this.navActive = this.navActive.bind(this);

  }

  navActive = ({isActive})=>({color:isActive?'#1D2026':'#69707D'});




  render() {
    return (
      <div className={style.App}>
        <Routes>
          <Route path="/" element={ <Layout isActive = {this.navActive} /> }>
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


