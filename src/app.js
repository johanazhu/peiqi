import './scss/index.scss';

import React from 'react';
import {render} from 'react-dom';
import {configure} from 'mobx';
import Auth from './Auth'

configure({
    enforceActions: "observed"
})

render(<Auth/>, document.getElementById('peiqi'))