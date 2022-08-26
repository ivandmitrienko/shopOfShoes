import React, { PureComponent } from 'react';
import style from './Cart.module.css';

export default class Cart extends PureComponent {

  render() {
    return (
      <div className={style.cart}>
          <div className={style.cart__header}>
          Cart
          </div>
          <div className={style.cart__order}></div>
      </div>
    )
  }
}
