import React, { PureComponent } from 'react';
import style from './header.module.css'

export default class Layout extends PureComponent {
  render() {
    return (
      <div className={style.header}>
          <div className={style.header__menu}>
            <div className={style.header__menu__left}>
              <img src="imgs/sneakers 2.svg" alt="sneakers" />
              <ul className={style.header__menu__left__links}>
                <li>Collections</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
      </div>
    )
  }
}

