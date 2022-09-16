import React, { PureComponent } from 'react';
import { ReactComponent as Cross } from './icons/Combined Shape.svg';
import { ReactComponent as Button } from './icons/Group 18.svg';
import ImagesNav from './ImagesNav';
import style from './Lightbox.module.css';

export default class Lightbox extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            activeImg: this.props.activeImg,

        }
    }

    setImage = (index) => { this.setState({ activeImg: index }) };

    LeftNextImage = () => {
        if (this.state.activeImg !== 0)
            this.setState({ activeImg: this.state.activeImg - 1 });
    }

    RightNextImage = () => {
        if (this.state.activeImg !== this.props.images.length - 1)
            this.setState({ activeImg: this.state.activeImg + 1 });
    }

    render() {

        const setImage = <img src={this.props.images[this.state.activeImg]} alt='' />;

        return (
            <div className={style.lightBoxDisplay}>
                <div className={style.showLightBox}>
                    <div className={style.setImage}>
                        <div className={style.cross}><Cross fill='#FFFFFF' onClick={this.props.setLightBox} /></div>
                        <div className={style.buttonOfLightbox}><Button className={style.stroke} onClick={this.LeftNextImage} /></div>
                        <div className={style.buttonOfLightboxRight}>
                            <Button className={style.stroke} onClick={this.RightNextImage} />
                        </div>
                        {setImage}
                    </div>
                    <div className={style.imagesNav}>
                        <ImagesNav
                            images={this.props.images}
                            activeImg={this.state.activeImg}
                            setImage={this.setImage}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
