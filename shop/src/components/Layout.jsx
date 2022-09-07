import React, { PureComponent } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Cart from './Cart';
import style from './Layout.module.css';


export default class Layout extends PureComponent {

  navActive = ({ isActive }) => ({ color: isActive ? '#1D2026' : '#69707D' });

  render() {

    const { quantity } = this.props;

    return (
      <>
        <div className={style.header}>
          <div className={style.header__menu}>
            <div className={style.header__menu__left}>
              <img src="images/sneakers 2.svg" alt="sneakers" />
              <div className={style.header__menu__left__links}>
                <NavLink to="/Collections" style={this.navActive}>Collections</NavLink>
                <NavLink to="/Men" style={this.navActive}>Men</NavLink>
                <NavLink to="/Women" style={this.navActive}>Women</NavLink>
                <NavLink to="/About" style={this.navActive}>About</NavLink>
                <NavLink to="/Contact" style={this.navActive}>Contact</NavLink>
              </div>
            </div>
            <div className={style.header__menu__right}>
              <Cart quantity={quantity} />
              <img src="images/Oval.svg" alt="" />
            </div>
          </div>
        </div>
        <Outlet />
      </>
    )
  }
}

