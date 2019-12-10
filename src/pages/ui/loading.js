import React from 'react'
import { Icon, Card, Spin,Alert } from 'antd'
import './ui.less'

export default class Loading extends React.Component {
    render() {
        const icon=<Icon type='loading' style={{fontSize:24}} />
        const iconLoad=<Icon type='loading' style={{fontSize:24}} />
        return (
            <div>
                <Card title="Spin用法" className="crad-wrap">
                    <Spin size="small" />
                    <Spin style={{margin:'0 10px'}} />
                    <Spin size="large" />
                    <Spin indicator={icon} style={{marginLeft:10}} />
                </Card>
                <Card title="内容遮罩" className="crad-wrap">
                    <Alert
                        message="React"
                        description="欢迎来到React高级实战课程"
                        type="info"
                    />
                    <Alert
                        message="React"
                        description="欢迎来到React高级实战课程"
                        type="warning"
                    />
                    <Spin indicator={iconLoad}>
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="info"
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="info"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}