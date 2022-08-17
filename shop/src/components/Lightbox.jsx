import React, { PureComponent } from 'react';
import { imageEvents } from './events';
import { ReactComponent as Cross } from './icons/Combined Shape.svg';
import { ReactComponent as Button } from './icons/Group 18.svg';
import style from './Lightbox.module.css';


export default class Lightbox extends PureComponent {

  setImage = (index) => {
    imageEvents.emit('EsetImage', index);
  }

  setLightBox = () => {
    imageEvents.emit('EshowDisplayLightBox');
  }

  LeftNextImage = () => {
    imageEvents.emit('EshowNLeftNextImage');
  }

  RightNextImage = () =>{
    imageEvents.emit('EshowNRightNextImage');
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
