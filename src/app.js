import './scss/index.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import history from './history';
import Pages from './pages'





render(
    <Router history={history}>
        <Pages/>
    </Router>,
    document.getElementById('peiqi')
)