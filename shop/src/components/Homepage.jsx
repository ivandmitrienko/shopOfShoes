import React, { PureComponent } from 'react';
import Lightbox from './Lightbox';
import style from './Homepage.module.css';

export default class Homepage extends PureComponent {
  render() {

    return (
      <div className={style.content}>
        <Lightbox {...this.props}/>       
      </div>
    )
  }
}
