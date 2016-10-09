require('../public.less');
import{
    SliderDemo
} from './imgSlider.js';
import React,{Component,PropTypes} from 'react';
import {findDOMNode,render} from 'react-dom';

render(<SliderDemo/>,document.getElementById('root'));
