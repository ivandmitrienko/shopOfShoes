import React, { PureComponent } from 'react';
import style from './order.module.css';

export default class Order extends PureComponent {

  render() {

    return (
      <div className={style.order}>
        <div className={style.quantity}>
          <button onClick={this.props.setLess}>-</button>
          <span>{this.props.quantity}</span>
          <button onClick={this.props.setMore}>+</button>
        </div>
        <button className={style.buttonOfCart}>
          <img src="./images/Shape.svg" alt="" />
          <span>Add to cart</span>
        </button>
      </div>
    )
  }
}
