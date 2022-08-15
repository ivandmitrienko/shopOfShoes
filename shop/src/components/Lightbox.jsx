import React, { PureComponent } from 'react';
import { imageEvents } from './events';
import {Logo} from '../../public/images/Combined Shape.svg';
import style from './Lightbox.module.css';

export default class Lightbox extends PureComponent {

  setImage = (index) => {
    imageEvents.emit('EsetImage', index);
  }

  setLightBox = () => {
    imageEvents.emit('EshowDisplayLightBox', true);
  }

  render() {

    const { images, activeImg, lightBoxDisplay } = this.props;
    const setImage = <img src={images[activeImg]} alt='' />;
    const inmagesNav = <div className={style.lightbox__menu}>
      {images.map((image, index) => {
        return <img
          src={image}
          className={activeImg === index ? style.imageActive : ''}
          alt=''
          key={image}
          onClick={() => this.setImage(index)} />
      })
      }
    </div>


    return (
      <div className={style.lightbox}>
        <div className={style.lightbox__img}>
          {<img src={images[activeImg]} alt='' onClick={this.setLightBox} />}
        </div>
        {inmagesNav}
        {lightBoxDisplay && <div className={style.lightBoxDisplay}>
          <div className={style.showLightBox}>
            <div className={style.setImage}>
              <div className={style.cross}><img src={Logo} alt="" /></div>
              {setImage}
            </div>
            <div className={style.imagesNav}>{inmagesNav}</div>
          </div>

        </div>}
      </div>
    )
  }
}
