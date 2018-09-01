import './scss/index.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {configure} from 'mobx';
import {Provider} from 'mobx-react'
import history from './history';
import Pages from './pages'
import stores from './stores'


configure({
    enforceActions: true
})

render(
    <Provider {...stores}>
        <Router history={history}>
            <Pages/>
        </Router>
    </Provider>,
    document.getElementById('peiqi')
)