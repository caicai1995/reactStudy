import React from 'react'
import {Card,Button, message} from 'antd'
import './ui.less'

export default class Message extends React.Component {
    showMessage=(type)=>{
        message[type]("恭喜你，React课程晋级成功");
    }
    render(){
        return (
            <Card title="全局提示框" className="crad-wrap">
                <Button type="primary" onClick={()=>this.showMessage('success')}>Success</Button>
                <Button type="primary" onClick={()=>this.showMessage('info')}>Info</Button>
                <Button type="primary" onClick={()=>this.showMessage('warning')}>Warning</Button>
                <Button type="primary" onClick={()=>this.showMessage('error')}>Error</Button>
                <Button type="primary" onClick={()=>this.showMessage('loading')}showMessage>Loading</Button>
            </Card>
        );
    }    
}