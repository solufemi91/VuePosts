import { render } from 'react-dom';
import React from 'react';
import BlogWrapper from './BlogWrapper'


const domContainer = document.getElementById('BlogWrapper');
const data = domContainer.getAttribute('data');
const obj = JSON.parse(data);

render(<BlogWrapper data={obj}/>, domContainer); 