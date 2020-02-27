import React, { Component } from 'react';
import { LazyLoadImage } from '@tjoskar/react-lazyload-img'

 
export class LazyloadImages extends Component {
  defaultImage = 'https://www.placecage.com/1199/800'
  images = [
    '../img/pp.jpg',
    ];
  render() {
    return this.images.map(image => (
      <LazyLoadImage
        key={image}
        width="1199px"
        height="800px"
        defaultImage={this.defaultImage}
        image={image}
      />
    ))
  }
}