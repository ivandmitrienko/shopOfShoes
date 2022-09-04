import React, { PureComponent } from 'react';
import { images } from './images.js';
import { ReactComponent as Cross } from './icons/Combined Shape.svg';
import { ReactComponent as Button } from './icons/Group 18.svg';
import style from 'Slider.module.css';


export default class Slider extends PureComponent {

  constructor(props){
    super(props);

    this.state= {
      activeImg: 0,
      lightBoxDisplay: false,
      activeImgLightBox: 0,
    }
  }

  setImage = (index) => { this.setState({ activeImg: index }) };

  setLightBox = () => { this.setState({ lightBoxDisplay: !this.state.lightBoxDisplay }) };

  LeftNextImage =  () => {
    if (this.state.activeImg !== 0)
    this.setState({ activeImg: this.state.activeImg - 1 });
  }

  RightNextImage = () => {
    if (this.state.activeImg !== images.length - 1)
      this.setState({ activeImg: this.state.activeImg + 1 });
  }

  render() {
    const setImage = <img src={images[this.state.activeImg]} alt='' />;
    const inmagesNav = <div className={style.lightbox__menu}>
      {images.map((image, index) => {
        return <img
          src={image}
          className={this.state.activeImg === index ? style.imageActive : ''}
          alt=''
          key={image}
          onClick={() => this.setImage(index)} />
      })
      }
    </div>


    return (
      <div className={style.lightbox}>
        <div className={style.lightbox__img}>
          {<img src={images[this.state.activeImg]} alt='' onClick={this.setLightBox} />}
        </div>
        {inmagesNav}
        {this.state.lightBoxDisplay && <div className={style.lightBoxDisplay}>
          <div className={style.showLightBox}>
            <div className={style.setImage}>
              <div className={style.cross}><Cross fill='#FFFFFF' onClick={this.setLightBox} /></div>
              <div className={style.buttonOfLightbox}><Button className={style.stroke} onClick = {this.LeftNextImage}/></div>
              <div className={style.buttonOfLightbox} style={{ left: '100%', transform: 'translate(-50%,-100%) rotate(0deg)' }}>
                <Button className={style.stroke} onClick = {this.RightNextImage}/>
              </div>
              {setImage}
            </div>
            <div className={style.imagesNav}>{inmagesNav}</div>
          </div>

        </div>}
      </div>
    )
  }
}
