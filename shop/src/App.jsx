import React, { PureComponent } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import { imageEvents } from "./components/events";
import style from './App.module.css';

export default class App extends PureComponent {

  constructor(props) {
    super(props);

    this.navActive = this.navActive.bind(this);
    this.setLess = this.setLess.bind(this);
    this.setMore = this.setMore.bind(this);
  
    this.state = {
      activeIndex: null,
      activeImg: 0,
      lightBoxDisplay: false,
      quantity: 0,
    };

  }

  navActive = ({ isActive }) => ({ color: isActive ? '#1D2026' : '#69707D' });

  setLess = () => {
    if (this.state.quantity)
      this.setState({ quantity: this.state.quantity - 1 })
  }

  setMore = () => {
    this.setState({ quantity: this.state.quantity + 1 })
  }

  componentDidMount = () => {
    imageEvents.addListener('EsetLess', this.setLess);
    imageEvents.addListener('EsetMore', this.setMore);
  }

  componentWillUnmount = () => {
    imageEvents.removeListener('EsetLess', this.setLess);
    imageEvents.removeListener('EsetMore', this.setMore);
  }


  render() {

    return (
      <div className={style.App}>
        <Routes>
          <Route
            path="/"
            element={<Layout
              isActive={this.navActive}
              quantity={this.state.quantity}
            />}>
            <Route index
              element={<Homepage
                activeIndex={this.state.activeIndex}
                quantity={this.state.quantity}
              />}
            />
            <Route path="/Collections" element={<h1>not available</h1>} />
            <Route path="/Men" element={<h1>not available</h1>} />
            <Route path="/Women" element={<h1>not available</h1>} />
            <Route path="/About" element={<h1>not available</h1>} />
            <Route path="/Contact" element={<h1>not available</h1>} />
          </Route>
        </Routes>
      </div>
    )
  }
}


