import React from 'react'
import {Card,Button,notification} from 'antd'
import './ui.less'

export default class Notification extends React.Component {
    openNotification=(type,position)=>{
        if(position){
            notification.config({
                placement:position
            })
        }
        notification[type]({
            message:'发工资了',
            description:'上个月考勤22天，迟到12天，实发工资250，请笑纳',
        });
    }
    render(){
        return (
            <div>
                <Card title="通知提醒" className="crad-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning')}>Warning</Button>
                </Card>
                <Card title="通知方向" className="crad-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success','topLeft')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error','topRight')}>Error</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info','bottomLeft')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning','bottomRight')}>Warning</Button>
                </Card>
            </div>
        );
    }    
}