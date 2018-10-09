/**
 * Created by Johnny Joestar on 2018/9/2.
 */

import React, {Component} from 'react'

export default ({isLoading, error}) => {
    if(isLoading){
        return <div>模块正在加载中</div>
    }else if(error){
        return <div>Sorry !</div>
    }else {
        return null
    }
}