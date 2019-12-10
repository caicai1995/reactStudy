import React from 'react';
import {Row,Col} from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
export default class Header extends React.Component{
    componentWillMount(){
        this.setState({
            userName:'菜油油'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        // this.getWeatherAPIdata();
    }

    getWeatherAPIdata(){
        // //JSONP调用 防止跨域,axios不支持跨域
        // let city="北京";//需要编码
        // axios.jsonp({
        //     // url:'https://way.jd.com/he/freeweather?city=beijing&appkey=1b386b7a0b3dddb604269ab2a3e42110'
        //     // url:'./test.json'
        //     // url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=rChjeIk4rwuEaN9l3OxG7cenj90h4pHW',
        // }).then((res)=>{
        //     console.log(res);
        //     if(res.code === '10000'){
        //         let data = res.results[0].weather_data[0];
        //         this.setState({
        //             dayPictureUrl:data.dayPictureUrl,
        //             weather:data.weather
        //         })
        //     }
        // })
    }
    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadecrumb">
                    <Col span="4" className="breadecrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}