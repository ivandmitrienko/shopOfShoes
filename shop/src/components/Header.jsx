import React, { PureComponent } from 'react';
import style from './header.module.css'

export default class Header extends PureComponent {
  render() {
    return (
      <div className={style.header}>
          <div className={style.header_nav}></div>
      </div>
    )
  }
}

