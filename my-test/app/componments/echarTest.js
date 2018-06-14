import React, { Component } from 'react';
import BaseComponment from "@comp/BaseComponment.js"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

var echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/pie') //图表类型
require('echarts/lib/component/title') //标题插件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legendScroll");
class EchartTest extends BaseComponment{
    constructor(props){
        super(props)
    }
    componentWillMount() {
    }
    // 在react中，我们需要等到虚拟dom渲染完成了才能通过refs去获取节点，
    // 这样我们就可以在组件**componentDidMount**的时候初始化echarts。
    componentDidMount() {
        this.initPie()
    }
    componentDidUpdate(){
        this.initPie()
    }
    initPie(){
        const data = this.props.data
        let myEchars = echarts.init(this.refs.pieReact)
        let options = this.setOptions(data)
        myEchars.setOption(options,true)
    }
    setOptions(data){
        return {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        }
    
    }
    render(){
        return (
            <div className="pie-react">
                <div ref="pieReact" style={{width: "100%", height: "500px"}}></div>
            </div>
        )
    }
}
EchartTest.propTypes = {
}
const mapStateToProps  = state => {
    return {
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EchartTest)