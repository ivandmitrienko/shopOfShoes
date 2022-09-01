import React, { PureComponent } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import style from './Cart.module.css';

export default class Cart extends PureComponent {

    

    render() {

        return (
            <div className={style.cart} >
                <AiOutlineShoppingCart size={25} color='#69707D' style={{marginRight:'46px'}}/>
                {this.props.quantity?<div className={style.quantity}>{this.props.quantity}</div>:null}
                <div className={style.cart__menu} style={{display:`${this.props.cartMenu}`}}>
                    <div className={style.cart__header}>
                        Cart
                    </div>
                    <div className={style.cart__order}></div>
                </div>
            </div>
        )
    }
}
