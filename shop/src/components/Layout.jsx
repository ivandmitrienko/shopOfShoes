import React, { PureComponent } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Cart from './Cart';
import style from './Layout.module.css';


export default class Layout extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
    }
  }

  navActive = ({ isActive }) => ({ color: isActive ? '#1D2026' : '#69707D' });

  updateMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {

    return (
      <>
        <div className={style.header}>
          <div className={style.header__menu}>
            <nav>
              <div className={style.burger__menu} onClick={this.updateMenu}>
                <div className={this.state.showMenu ? style.burger__bar__active : style.burger__bar}></div>
                <div className={this.state.showMenu ? style.burger__bar__active : style.burger__bar}></div>
                <div className={this.state.showMenu ? style.burger__bar__active : style.burger__bar}></div>
              </div>
            </nav>
            <div className={style.header__menu__left}>
              <img src="images/sneakers 2.svg" alt="sneakers" />
              <div className={this.state.showMenu ? style.header__menu__left__links__active : style.header__menu__left__links}>
                <NavLink to="/Collections" style={this.navActive}>Collections</NavLink>
                <NavLink to="/Men" style={this.navActive}>Men</NavLink>
                <NavLink to="/Women" style={this.navActive}>Women</NavLink>
                <NavLink to="/About" style={this.navActive}>About</NavLink>
                <NavLink to="/Contact" style={this.navActive}>Contact</NavLink>
              </div>
            </div>
            <div className={style.header__menu__right}>
              <Cart {...this.props} />
              <img src="images/Oval.svg" alt="" />
            </div>
          </div>
        </div>
        <Outlet />
      </>
    )
  }
}

