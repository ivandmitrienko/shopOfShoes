import React, { PureComponent } from 'react';
import style from './ImagesNav.module.css';

export default class ImagesNav extends PureComponent {

    render() {
        return (
            <div className={style.slider__menu}>
                {this.props.images.map((image, index) => <img
                    src={image}
                    className={this.props.activeImg === index ? style.imageActive : ''}
                    alt=''
                    key={image}
                    onClick={() => this.props.setImage(index)} />
                )
                }
            </div>
        )
    }
}
