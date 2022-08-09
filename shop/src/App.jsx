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

    this.state = {
      activeIndex: null,
      activeImg: 0,
    };

  }

  navActive = ({ isActive }) => ({ color: isActive ? '#1D2026' : '#69707D' });

  setImage = (image) => {this.setState({activeImg:image})};

  componentDidMount = () => {
    imageEvents.addListener('EsetImage', this.setImage);
  }

  componentWillUnmount = () => {
    imageEvents.removeListener('EsetImage', this.setImage);
  }

  render() {

    return (
      <div className={style.App}>
        <Routes>
          <Route path="/" element={<Layout isActive={this.navActive} />}>
            <Route index
              element={<Homepage
                images={this.props.images}
                activeImg={this.state.activeImg}
                activeIndex={this.state.activeIndex}
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


