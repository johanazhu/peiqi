/**
 * Created by Johnny Joestar on 2018/9/2.
 */

import React from 'react';
import {PeiqiCheckbox} from 'components'
import {observer, inject} from 'mobx-react'

@inject('UserStore')
@observer
class Demo extends React.Component {

    constructor(props) {
        super()
        console.log(props.UserStore)
    }

    render() {
        return (
            <div>我是{this.props.UserStore.user.name}</div>
        )
    }
}

export default class Home extends React.Component {

    chart = null

    constructor() {
        super()
        this.state = {
            selectedID: null,
            check_conf: []
        }
    }

    componentWillMount() {
        this.setState({
            check_conf: [
                {
                    id: 1,
                    value: '男人'
                },
                {
                    id: 2,
                    value: '女人'
                }
            ]
        })
    }

    render() {

        return (
            <div>
                <PeiqiCheckbox idKey="id" valueKey="value" options={this.state.check_conf} selected={this.state.selectedID}
                               onChange={(res) => {
                                   console.log(res)
                                   this.setState({
                                       selectedID: res.id
                                   })
                               }}/>
            </div>
        )
    }
}