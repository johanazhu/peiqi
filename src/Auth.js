/**
 * Created by Johnny Joestar on 2018/9/2.
 */
import React, {Component} from 'react'
import {Router} from 'react-router';
import {$_ajax} from './services'

import {Provider} from 'mobx-react'
import history from './history';
import Pages from './pages'
import stores from './stores'

window.PEIQI_STORES = stores

export default class extends Component {
    constructor() {
        super()
        this.state = {
            isAuthed: false
        }
    }

    componentWillMount() {
        $_ajax.get('user').then((res) => {
            PEIQI_STORES.UserStore.initUser(res);
        }).then(() => {

        }).finally(() => {
            console.log('ok')
            this.setState({isAuthed: true})
        })
    }

    render() {
        const {isAuthed} = this.state;
        console.log(isAuthed);
        return (
            isAuthed ? (
                <Provider {...PEIQI_STORES}>
                    <Router history={history}>
                        <Pages/>
                    </Router>
                </Provider>
            ) : (
                <div>认证中...</div>
            )
        )
    }
}