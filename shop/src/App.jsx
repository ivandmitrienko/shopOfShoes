import React, { PureComponent } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import style from './App.module.css';

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      quantityItems:0,
    };

  }

  addCartItems = () => {
    if (this.state.quantity)
      this.setState({ quantityItems: this.state.quantity })
  }

  setLess = () => {
    if (this.state.quantity)
      this.setState({
        quantity: this.state.quantity - 1,
      })
  }

  setMore = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    })
  }

  render() {
    return (
      <div className={style.App}>
        <Routes>
          <Route
            path="/"
            element={<Layout
              quantityItems={this.state.quantityItems}
            />}>
            <Route index
              element={<Homepage
                quantity={this.state.quantity}
                setLess={this.setLess}
                setMore={this.setMore}
                addCartItems={this.addCartItems}
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


