import React, { PureComponent } from 'react';
import { images } from './images.js';
import Lightbox from './Lightbox.jsx';
import ImagesNav from './ImagesNav.jsx';
import style from './Slider.module.css';


export default class Slider extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeImg: 0,
      lightBoxDisplay: false,
    }
  }

  setImage = (index) => {this.setState({activeImg:index})};

  setLightBox = () => { this.setState({ lightBoxDisplay: !this.state.lightBoxDisplay }) };

  render() {
    return (
      <>
        <div className={style.slider}>
          <div className={style.slider__img}>
            {<img src={images[this.state.activeImg]} alt='' onClick={this.setLightBox} />}
          </div>
          <ImagesNav images={images} activeImg={this.state.activeImg} setImage = {this.setImage}/>
          {this.state.lightBoxDisplay &&
            <Lightbox
              images={images}
              setLightBox={this.setLightBox}
              activeImg={this.state.activeImg}
            />}
        </div>
        <div className={style.Lightbox__mobile}>
        <Lightbox
          images={images}
          activeImg={this.state.activeImg}
        />
        </div>
      </>
    )
  }
}
