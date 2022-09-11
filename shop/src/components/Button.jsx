import React, { PureComponent } from 'react';
import style from './Button.module.css';

export default class Button extends PureComponent {
    render() {
        return (
            <button className={style.buttonOfCart} onClick={this.props.handleClick}>
                <img src="./images/Shape.svg" alt="" />
                {this.props.children}          
            </button>
        )
    }
}
