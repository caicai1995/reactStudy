import React from 'react';
import { Card, Form, Input, Button,message,Icon,Checkbox } from 'antd';
import './form.less'
const FormItem = Form.Item;
class FormLogin extends React.Component {
    handleSubmit=()=>{
        let userInfo = this.props.form.getFieldsValue();//获取表单里所有的值
        this.props.form.validateFields((err)=>{//校验
            if(!err){
                message.success(`${userInfo.userName}恭喜你，您通过本次表单组件学习，当前密码为${userInfo.userPwd}`)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录行内表单" className="card-wrap">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单">
                    <Form style={{ width: 300 }} >
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },{
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'用户名必须字母或数字'
                                        }
                                    ]
                                })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required:true,
                                            message:'密码不能为空'
                                        },
                                        {
                                            min:6,max:10,
                                            message:'密码长度应为6-12位'
                                        }
                                    ]
                                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName:'checked',
                                    initialValue: false,
                                    rules: [
                                        
                                    ]
                                })(
                                    <Checkbox >记住密码</Checkbox >
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                
            </div>
        );
    }
}
export default Form.create()(FormLogin);