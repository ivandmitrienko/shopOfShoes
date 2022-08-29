import React, { PureComponent } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { imageEvents } from './events';
import CartMenu from './CartMenu';
import style from './Layout.module.css';

export default class Layout extends PureComponent {

  cartHover = () => {
    imageEvents.emit('EshowDisplayCart');
  }

  render() {

    const { isActive, quantity } = this.props;

    return (
      <>
        <div className={style.header}>
          <div className={style.header__menu}>
            <div className={style.header__menu__left}>
              <img src="images/sneakers 2.svg" alt="sneakers" />
              <div className={style.header__menu__left__links}>
                <NavLink to="/Collections" style={isActive}>Collections</NavLink>
                <NavLink to="/Men" style={isActive}>Men</NavLink>
                <NavLink to="/Women" style={isActive}>Women</NavLink>
                <NavLink to="/About" style={isActive}>About</NavLink>
                <NavLink to="/Contact" style={isActive}>Contact</NavLink>
              </div>
            </div>
            <div className={style.header__menu__right}>
              <AiOutlineShoppingCart
                className='iconCart'
                onMouseEnter={this.cartHover}
                size={25} color='#69707D'
                style={{ marginRight: '46px', cursor:'pointer' }}
              />
              {quantity ? <div className={style.quantity}>{quantity}</div> : null}
              <img src="images/Oval.svg" alt="" />
            </div>
          </div>
          <CartMenu/>
        </div>
        <Outlet />
      </>
    )
  }
}

