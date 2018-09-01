/**
 * Created by Johan on 2018/6/25.
 */

import {observable, action} from 'mobx'

class UserStore {
    @observable user = {
        name: 'Peiqi'
    }
    @observable isLogin = false

    @action
    initUser(res) {
        this.user = res;
        this.isLogin = true;
    }

    @action
    deleteUser(res){
        this.user = {}
        this.isLogin = false
    }
}

export default new UserStore()