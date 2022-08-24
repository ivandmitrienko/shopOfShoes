import React, { PureComponent } from 'react';
import { imageEvents } from './events';
import style from './order.module.css';

export default class Order extends PureComponent {

  setLess = () => {
    imageEvents.emit('EsetLess');
  }

  setMore = () => {
    imageEvents.emit('EsetMore');
  }

  render() {

    return (
      <div className={style.order}>
        <div className={style.quantity}>
          <button onClick={this.setLess}>-</button>
          <span>{this.props.quantity}</span>
          <button onClick={this.setMore}>+</button>
        </div>
        <button className={style.buttonOfCart}>
          <img src="./images/Shape.svg" alt="" />
          <span>Add to cart</span>
        </button>
      </div>
    )
  }
}
