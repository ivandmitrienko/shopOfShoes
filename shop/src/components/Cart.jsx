import React, { PureComponent } from 'react';
import { imageEvents } from './events';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import style from './Cart.module.css';

export default class Cart extends PureComponent {

    deleteCartHover = () => {
        imageEvents.emit('EcartHide');
    }

    cartHover = () => {
        imageEvents.emit('EcartHover');
    }

    cartMenuHover = () =>{
        imageEvents.emit('EcartMenuHover');
    }

    render() {
        return (
            <div className={style.cart} onMouseEnter={this.cartHover} onMouseLeave={this.deleteCartHover}>
                <AiOutlineShoppingCart size={25} color='#69707D' style={{marginRight:'46px'}}/>
                {this.props.quantity?<div className={style.quantity}>{this.props.quantity}</div>:null}
                <div className={style.cart__menu} onMouseEnter={this.cartMenuHover} style={{display:`${this.props.cartMenu}`}}>
                    <div className={style.cart__header}>
                        Cart
                    </div>
                    <div className={style.cart__order}></div>
                </div>
            </div>
        )
    }
}
