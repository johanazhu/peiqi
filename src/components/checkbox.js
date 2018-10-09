/**
 * Created by Johnny Joestar on 2018/9/1.
 */
import React from 'react'
import classnames from 'classnames'

export default class extends React.Component {

    render() {
        const {selected, idKey, valueKey} = this.props
        return (
            <ul className={classnames('peiqi-checkbox', this.props.className)}>
                {
                    this.props.options.map((item) => {
                        return (
                            <li className="checkbox-item" key={item[idKey]} onClick={() => {
                                this.props.onChange(item)
                            }}><i className={`fa ${selected === item[idKey] ? 'fa-check-circle' : 'fa-circle-o'}`}></i>{item[valueKey]}</li>
                        )
                    })
                }
            </ul>
        )
    }

}