import React from 'react';
import {Row,Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLef from './components/NavLeft';
import Home from './pages/home'
export default class Admin extends React.Component{

    render(){
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLef />
                </Col>
                <Col span={21} className="main">
                    <Header />
                    <Row className="content">
                        {/* 动态加载 */}
                        {this.props.children}
                        {/* <Home /> */}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        );
    }
}