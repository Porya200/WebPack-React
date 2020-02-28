import React, { Component } from 'react';
import { LazyLoadImage } from '@tjoskar/react-lazyload-img'

 
export class LazyloadImages extends Component {
  defaultImage = "https://malltina.com/asset/img/productHolder.svg"
  images = [
    'https://puffin.malltina.com/media/offer-times/1581158017waio4Xh8Tzo6F9B2.jpg',
    'https://puffin.malltina.com/media/populars/1581150588NKfdnHazq610iw7W.jpg',
    'https://puffin.malltina.com/media/populars/1581150882vAIHJLlVGoaotDAu.jpg'
    ];
    style = {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 0',
      filter: 'blur(15px)',
      backgroundSize: 'cover',
      transition: 'background-image 4s ease-in-out',
    }
  render() {
    return this.images.map(image => (
      <LazyLoadImage
        key={image}
        className = "img_circle"
        width="200px"
        height="200px"
        defaultImage={this.defaultImage}
        image={image}
      />
    ))
  }
}