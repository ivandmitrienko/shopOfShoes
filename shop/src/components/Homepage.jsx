import React, { PureComponent } from 'react';
import Slider from './Slider';
import UserBox from './UserBox';
import style from './Homepage.module.css';

export default class Homepage extends PureComponent {
  render() {

    return (
      <div className={style.content}>
        <>
          <Slider {...this.props}/> 
        </>
        <>
          <UserBox  {...this.props}/> 
        </>     
      </div>
    )
  }
}
