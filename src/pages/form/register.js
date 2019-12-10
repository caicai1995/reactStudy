import React from 'react';
import { Card, Form, Button, Input, Modal, Checkbox,message, Select, Switch, Radio, DatePicker, TimePicker, Upload, Icon, InputNumber } from 'antd'
import moment from 'moment';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const TextArea = Input.TextArea;
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
class Register extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-5',
                name: 'image.png',
                status: 'error',
            },
        ],
    };
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();//获取表单里所有的值
        console.log(JSON.stringify(userInfo));
        //重置，filedsResetValue
        this.props.form.validateFields((err) => {//校验
            if (!err) {
                message.success(`${userInfo.userName}恭喜你，您通过本次表单组件学习，当前密码为${userInfo.userPwd}`)
            }
        })
    }
    handleCancel = () => this.setState({ previewVisible: false });
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Card title="用户注册表单">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名" />)
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        }
                                    ]
                                })(<Input type="password" prefix={<Icon type="lock" />} placeholder="请输入密码" />)
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '18',
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('kimoji', {
                                    initialValue: '1',
                                })(
                                    <Select>
                                        <Option value="1">鲜芋</Option>
                                        <Option value="2">青稞</Option>
                                        <Option value="3">牛奶</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('hobby', {
                                    initialValue: ['1', '2'],
                                })(
                                    <Select
                                        mode="multiple"
                                        style={{ width: '100%' }}
                                        placeholder="Please select"
                                    >
                                        <Option value="1">游泳</Option>
                                        <Option value="2">看书</Option>
                                        <Option value="3">跑步</Option>
                                        <Option value="4">爬山</Option>
                                        <Option value="5">跑步</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('marriage', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2000-06-21'),
                                })(
                                    <DatePicker></DatePicker>
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '北京市',
                                })(
                                    <TextArea
                                        autosize={
                                            { minRows: 2, maxRow: 6 }
                                        }
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="早期时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time', {
                                    initialValue: "",
                                })(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg', {
                                    initialValue: "",
                                })(
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={this.handlePreview}
                                        onChange={this.handleChange}
                                    >
                                        {fileList.length >= 8 ? null : uploadButton}
                                    </Upload>
                                )
                            }
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('if', {
                                    initialValue: "",
                                })(
                                    <Checkbox>我已经阅读过慕课协议</Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('register', {
                                    initialValue: "",
                                    rule: []
                                })(
                                    <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(Register);