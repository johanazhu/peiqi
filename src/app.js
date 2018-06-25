
import './scss/index.scss';

import React from 'react';
import {render} from 'react-dom';
import Home from './home';
import {$_ajax} from 'services'

function App(){
    return (
        <div>
            hello,world,
            <button className={'btn'} onClick={()=>{
                $_ajax.get();
    }}>BTN</button>
        </div>
    )
}

render(
    <App/>, document.getElementById('peiqi')
)