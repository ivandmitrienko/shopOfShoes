import React, { PureComponent } from 'react';
import Button from './Button';
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
        <Button handleClick={this.props.handleClick}>
          <span>Add to cart</span>
        </Button>
      </div>
    )
  }
}
