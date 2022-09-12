import React, { PureComponent } from 'react';
import Button from './Button';
import { ReactComponent as Basket } from './icons/Mask 2.svg';
import style from './CartOrder.module.css';

export default class Cart__Order extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      totalPrice: 125 * this.props.quantityItems,
    }
  }

  render() {
    return (
      <div>
        <div className={style.CardOrder}>
          <div className={style.CardOrder__description}>
            <img src={`${this.props.cartItem[0].src}`} alt="" />
            <div className={style.description}>
              <div style={{ marginBottom: '10px' }}>Fall Limited Edition Sneakers</div>
              <div className={style.price}>
                <span>$125.00 x {this.props.quantityItems}</span>
                <span className={style.totalPrice}>${this.state.totalPrice}.00</span>
              </div>
            </div>
            <div className={style.Basket}>
              <Basket onClick={this.props.deleteItem} />
            </div>
          </div>
          <div className={style.Button}>
            <Button>
              <span>Checkout</span>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
