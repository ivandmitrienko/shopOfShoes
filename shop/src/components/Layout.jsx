import React, { PureComponent } from 'react';
import { NavLink, Outlet} from "react-router-dom";
import style from './Layout.module.css';

export default class Layout extends PureComponent {
  render() {
    return (
      <>
        <div className={style.header}>
            <div className={style.header__menu}>
              <div className={style.header__menu__left}>
                <img src="imgs/sneakers 2.svg" alt="sneakers" />
                <div className={style.header__menu__left__links}>
                  <NavLink to="/Collections">Collections</NavLink>
                  <NavLink to="/Men">Men</NavLink>
                  <NavLink to="/Women">Women</NavLink>
                  <NavLink to="/About">About</NavLink>
                  <NavLink to="/Contact">Contact</NavLink>
                </div>
              </div>
              <div>
                {/* <Basket /> */}
              </div>
            </div>
        </div>
        <Outlet/>
      </>
    )
  }
}

