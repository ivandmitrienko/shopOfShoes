import React, { PureComponent } from 'react';
import Order from './Order';
import style from './userbox.module.css';

export default class UserBox extends PureComponent {
  render() {
    return (
      <div className={style.userbox}>
        <div className={style.nameCompany}>Sneaker Company</div>
        <div className={style.title}>Fall Limited Edition Sneakers</div>
        <p className={style.description}>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className={style.price}>
          <div className={style.priceANDdiscount}>
            <div className={style.priceWITHdiscount}>$125.00</div>
            <div className={style.discount}>50%</div>
          </div >
          <div className={style.priceWITHOUTdiscount}>$250.00</div>
        </div>
        <>
        <Order />
        </>
      </div>
    )
  }
}
