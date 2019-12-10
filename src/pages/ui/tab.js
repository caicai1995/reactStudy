import React from 'react'
import { Card, Icon, message, Tabs } from 'antd'
import './ui.less'
const { TabPane } = Tabs;
export default class Tab extends React.Component {
    newTabIndex = 0;
    handleCallback = (key) => {
        message.info('Hi,This is:' + key);
    }
    componentWillMount() {
        const panes = [
            {
                title: 'Tab1',
                content: 'Tab1',
                key: '1'
            },
            {
                title: 'Tab2',
                content: 'Tab2',
                key: '2'
            },
            {
                title: 'Tab3',
                content: 'Tab3',
                key: '3'
            }
        ];
        this.setState({
            activeKey: panes[0].key,
            panes
        });
    }
    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };
    render() {
        return (
            <div>
                <Card title="tab页签" className="crad-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">
                            欢迎学习React
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            欢迎学习React课程
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            React MV*框架
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="tab页签——带Icon" className="crad-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus" />Tab1</span>} key="1">
                            欢迎学习React
                        </TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab3</span>} key="2">
                            欢迎学习React课程
                        </TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab3</span>} key="3">
                            React MV*框架
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="tab页签——带Icon" className="crad-wrap">
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel => {
                                return (
                                    <TabPane
                                        tab={panel.title}
                                        key={panel.key}
                                    />

                                );
                            }))
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}