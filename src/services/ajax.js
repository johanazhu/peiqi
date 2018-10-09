/**
 * Created by Johan on 2018/6/25.
 */

import axios from 'axios'

function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.common['Authorization'] = PEIQI_STORES.TokenStore.token
        axios.get(`/api/${url}`, params).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

export default {
    get
}