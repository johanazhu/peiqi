/**
 * Created by Johnny Joestar on 2018/10/9.
 */


import {observable, action} from 'mobx';
import {$_localstorage} from 'services';

class TokenStore {
    @observable token = $_localstorage.get('token') || '';

    @action
    initToken(res) {
        this.token = res;
        $_localstorage.set('token', res);
    }

    @action
    clearToken(res) {
        this.token = '';
        $_localstorage.del('token');
    }
}

export default new TokenStore()