import React, { PureComponent } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import style from './Layout.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default class Layout extends PureComponent {

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
              <AiOutlineShoppingCart size={25} color='#69707D' style={{ marginRight: '46px' }} />
              {quantity ? <div className={style.quantity}>{quantity}</div> : null}
              <img src="images/Oval.svg" alt="" />
            </div>
          </div>
        </div>
        <Outlet />
      </>
    )
  }
}

