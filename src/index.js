import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { LazyloadImages } from './components/img'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'

render(
    <div class="container mt-3">
        <LazyloadImages/>
        <h3 class="text-danger mt-3">تست webpack و react js و Bootstrap</h3>
        <App/>
    </div>,
    document.getElementById('app')
);