import React, { PureComponent } from 'react';

export default class Homepage extends PureComponent {
  render() {

    const {images} = this.props;

    return (
      <div>{images.map((image)=>{return <img src={image} alt='' />})}</div>
    )
  }
}
