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
      cartItems: false,
    };

  }

  addCartItems = () => {
    this.setState({cartItems:true})
  }

  setLess = () => {
    if (this.state.quantity)
      this.setState({ quantity: this.state.quantity - 1 })
  }

  setMore = () => {
    this.setState({ quantity: this.state.quantity + 1 })
  }

  render() {
    return (
      <div className={style.App}>
        <Routes>
          <Route
            path="/"
            element={<Layout
              quantity={this.state.quantity}
              cartItems={this.state.cartItems}
            />}>
            <Route index
              element={<Homepage
                quantity={this.state.quantity}
                setLess={this.setLess}
                setMore={this.setMore}
                addCartItems={this.addCartItems}
                cartItems={this.state.cartItems}
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


