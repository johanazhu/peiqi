/**
 * Created by Johan on 2018/7/14.
 */


import React, {Component} from 'react';
import echarts from 'echarts';
import classnames from 'classnames'

export default class extends React.Component {
    constructor() {
        super()
    }

    chart = null;

    componentDidMount(){
        this.chart = echarts.init(this.refs.echart);
        this.chart.setOption(this.props.data);
    }

    componentWillUnmount() {
        this.chart.dispose();
        this.chart = null;
    }

    render() {
        return <div className={classnames('peiqi-chart', this.props.className)} ref="echart">图表</div>
    }
}