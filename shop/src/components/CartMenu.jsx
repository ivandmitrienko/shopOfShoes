import React, { PureComponent } from 'react';
import CartOrder from './CartOrder';
import style from './CartMenu.module.css';

export default class CartMenu extends PureComponent {
    render() {
        return (
            <>
                <div className={style.cart__header}>
                    Cart
                </div>
                <div className={style.cart__order}>
                   { this.props.quantityItems? <CartOrder />:<div className={style.cart__empty}><>Your cart is empty.</></div>}
                </div>
            </>
        )
    }
}
