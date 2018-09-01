/**
 * Created by Johnny Joestar on 2018/9/1.
 */

import React from 'react'
import echarts from 'echarts'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class extends React.Component {

    chart = null

    static propTypes = {
        className: PropTypes.string,
        option: PropTypes.object.isRequired,
        onInitChart: PropTypes.func
    }

    static defaultProps = {
        className: '',
        option: {},
        onInitChart: null
    }

    componentDidMount(){
        this.chart = echarts.init(this.refs.echart);
        this.updateChart(this.props.option)
    }

    componentWillUnmount(){
        this.chart.dispose();
        this.chart = null;
    }

    updateChart(res){
        const {onInitChart} = this.props
        let defaultOption = {
            grid: {
                left: 30,
                right: 20,
                top: 20,
                bottom: 20
            }
        }
        //这是浅拷贝，不对，应该用深拷贝
        Object.assign(defaultOption, res)
        // 使用扩展运算符来深拷贝的是数组，对象如何深拷贝
        //用JSON.parse(JSON.stringify())来解决
        defaultOption = JSON.parse(JSON.stringify(defaultOption));
        this.chart.setOption(defaultOption)
        onInitChart && onInitChart(this.chart)
    }

    componentWillReceiveProps(props){
        this.updateChart(props.option)
    }

    render(){
        return (
            <div className={classnames('peiqi-chart', this.props.className)} ref="echart">
            </div>
        )
    }
}