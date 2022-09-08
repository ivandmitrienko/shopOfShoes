import React, { PureComponent } from 'react';
import style from './CartMenu.module.css';

export default class CartMenu extends PureComponent {
    render() {
        return (
            <>
                <div className={style.cart__header}>
                    Cart
                </div>
                <div className={style.cart__order}>
                   { this.props.cartItems&&this.props.quantity? <div>dddd</div>:<div className={style.cart__empty}><>Your cart is empty.</></div>}
                </div>
            </>
        )
    }
}
