import React from 'react'
import { Button, Card, Icon, Radio} from 'antd'
import './ui.less'


export default class Buttons extends React.Component {
    state = {
        loading: true,
        size:'default'
    }
    handleCloseLoading = () => {
        this.setState({
            loading: false
        });
    }
    handleChange=(e)=>{
        this.setState({
            // e是鼠标对象
            size:e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="crad-wrap">
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图形按钮" className="crad-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search" shape="circle"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="crad-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading} >点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组"  style={{marginBottom:10}}>
                    <Button.Group>
                        <Button type="primary">
                            <Icon type="left" />
                            Go back
                        </Button>
                        <Button type="primary">
                            Go forward
                        <Icon type="right" />
                        </Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="crad-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary">Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                    <Button type="dashed " size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                </Card>
            </div>
        );
    }
}