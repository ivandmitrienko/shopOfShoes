import React, { PureComponent } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartMenu from './CartMenu';
import style from './Cart.module.css';

export default class Cart extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            menu: false,
            timer: null,
        }
    }

    setMenu = () => {
        this.setState({ menu: true })
    }

    setTimer = () => {
        this.setState({ timer: setTimeout(() => this.setState({ menu: false }), 3000) });
    }

    closeTimer = () => {
        this.setState({ timer: clearTimeout(this.state.timer) })
    }

    render() {
        return (
            <div className={style.cart} >
                <AiOutlineShoppingCart
                    className={style.cartIcon}
                    size={25}
                    color='#69707D'
                    onMouseEnter={this.setMenu}
                    onMouseLeave={this.setTimer}
                />
                {this.props.quantityItems ? <div className={style.quantity}>{this.props.quantityItems}</div> : null}
                {this.state.menu && <div
                    className={style.cart__menu}
                    onMouseEnter={this.closeTimer}
                    onMouseLeave={this.setTimer}
                    style={{ cursor: 'pointer' }}
                >
                    <CartMenu {...this.props} />
                </div>}
            </div>
        )
    }
}

