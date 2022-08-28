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
    this.setImage = this.setImage.bind(this);
    this.showDisplayLightBox = this.showDisplayLightBox.bind(this);
    this.showNLeftNextImage = this.showNLeftNextImage.bind(this);
    this.showNRightNextImage = this.showNRightNextImage.bind(this);
    this.setLess = this.setLess.bind(this);
    this.setMore = this.setMore.bind(this);
    this.showCart = this.showCart.bind(this);
    this.deleteCartHover = this.deleteCartHover.bind(this);

    this.state = {
      activeIndex: null,
      activeImg: 0,
      lightBoxDisplay: false,
      quantity: 0,
    };

  }

  showCart = () => {
    const elem = document.getElementsByClassName('Cart_cart__yr3-o');
    elem[0].style.display = 'block';
  }

  deleteCartHover = () => {
    const elem = document.getElementsByClassName('Cart_cart__yr3-o');
    elem[0].style.display = 'none';
  }

  navActive = ({ isActive }) => ({ color: isActive ? '#1D2026' : '#69707D' });

  setImage = (index) => { this.setState({ activeImg: index }) };

  showDisplayLightBox = () => { this.setState({ lightBoxDisplay: !this.state.lightBoxDisplay }) };

  showNLeftNextImage = () => {
    if (this.state.activeImg !== 0)
      this.setState({ activeImg: this.state.activeImg - 1 })
  }

  showNRightNextImage = () => {
    if (this.state.activeImg !== this.props.images.length - 1)
      this.setState({ activeImg: this.state.activeImg + 1 })
  }

  setLess = () => {
    if (this.state.quantity)
      this.setState({ quantity: this.state.quantity - 1 })
  }

  setMore = () => {
    this.setState({ quantity: this.state.quantity + 1 })
  }

  componentDidMount = () => {
    imageEvents.addListener('EsetImage', this.setImage);
    imageEvents.addListener('EshowDisplayLightBox', this.showDisplayLightBox);
    imageEvents.addListener('EshowNLeftNextImage', this.showNLeftNextImage);
    imageEvents.addListener('EshowNRightNextImage', this.showNRightNextImage);
    imageEvents.addListener('EsetLess', this.setLess);
    imageEvents.addListener('EsetMore', this.setMore);
    imageEvents.addListener('EshowDisplayCart', this.showCart);
    imageEvents.addListener('EhideDisplayCart', this.deleteCartHover);
  }

  componentWillUnmount = () => {
    imageEvents.removeListener('EsetImage', this.setImage);
    imageEvents.removeListener('EshowDisplayLightBox', this.showDisplayLightBox);
    imageEvents.removeListener('EshowNLeftNextImage', this.showNLeftNextImage);
    imageEvents.removeListener('EshowNRightNextImage', this.showNRightNextImage);
    imageEvents.removeListener('EsetLess', this.setLess);
    imageEvents.removeListener('EsetMore', this.setMore);
    imageEvents.removeListener('EshowDisplayCart', this.showCart);
    imageEvents.removeListener('EhideDisplayCart', this.deleteCartHover);
  }

  render() {

    return (
      <div className={style.App}>
        <Routes>
          <Route path="/" element={<Layout isActive={this.navActive} quantity={this.state.quantity} />}>
            <Route index
              element={<Homepage
                images={this.props.images}
                activeImg={this.state.activeImg}
                activeIndex={this.state.activeIndex}
                lightBoxDisplay={this.state.lightBoxDisplay}
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


