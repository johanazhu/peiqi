/**
 * Created by Johnny Joestar on 2018/10/9.
 */

export default {
    get(k){
        return window.localStorage.getItem(`PEIQI_${k}`)
    },
    set(k,v){
        return window.localStorage.setItem(`PEIQI_${k}`, v)
    },
    del(k){
        return window.localStorage.removeItem(`PEIQI_${k}`)
    }
}