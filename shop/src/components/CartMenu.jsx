import React, { PureComponent } from 'react';
import { imageEvents } from './events';
import style from './Cart.module.css';

export default class CartMenu extends PureComponent {

    deleteCartHover = () => {
        imageEvents.emit('EhideDisplayCart');
    }

    render() {
        return (
            <div onMouseLeave={this.deleteCartHover} className={style.cart}>
                <div className={style.cart__header}>
                    Cart
                </div>
                <div className={style.cart__order}></div>
            </div>
        )
    }
}
