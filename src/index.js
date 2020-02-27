import React from 'react';
import { render } from 'react-dom';
import { LazyLoadImage, LazyLoadBackgroundImage } from '@tjoskar/react-lazyload-img'
import App from './components/App';
import { LazyloadImages } from './components/img'
import './css/main.css'

render(
    <div>
        <LazyloadImages />
        <h1>برنامه پیشرو</h1>
        <App/>
    </div> ,
    document.getElementById('app')
);