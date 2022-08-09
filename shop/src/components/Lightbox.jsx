import React, { PureComponent } from 'react';
import { imageEvents } from './events';
import style from './Lightbox.module.css';

export default class Lightbox extends PureComponent {

  setImage = (index) => {
    imageEvents.emit('EsetImage', index);
  }

  render() {

    const {images, activeImg} = this.props;

    return (
      <div className={style.lightbox}>
          <div className={style.lightbox__img}>
              {<img src={images[activeImg]} alt='' />}
          </div>
          <div className={style.lightbox__menu}>
              {images.map((image, index)=>{return <img src={image} alt='' key={image} onClick={() => this.setImage(index)}/>})}
          </div>
      </div>
    )
  }
}
