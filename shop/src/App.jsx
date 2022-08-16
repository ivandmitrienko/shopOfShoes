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

    this.state = {
      activeIndex: null,
      activeImg: 0,
      lightBoxDisplay: false,
    };

  }

  navActive = ({ isActive }) => ({ color: isActive ? '#1D2026' : '#69707D' });

  setImage = (image) => {this.setState({activeImg:image})};

  showDisplayLightBox = () => {this.setState({lightBoxDisplay: !this.state.lightBoxDisplay})};

  componentDidMount = () => {
    imageEvents.addListener('EsetImage', this.setImage);
    imageEvents.addListener('EshowDisplayLightBox', this.showDisplayLightBox);
  }

  componentWillUnmount = () => {
    imageEvents.removeListener('EsetImage', this.setImage);
    imageEvents.removeListener('EshowDisplayLightBox', this.showDisplayLightBox);
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
                lightBoxDisplay = {this.state.lightBoxDisplay}
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


