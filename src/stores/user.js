/**
 * Created by Johan on 2018/6/25.
 */

import {observable, action} from 'mobx';

class UserStore {
    @observable user = {};
    @observable isLogin = false;

    @action
    initUser(res) {
        this.user = res;
        this.isLogin = true;
    }

    @action
    deleteUser() {
        this.user = null;
        this.isLogin = false
    }
}

export default new UserStore()
