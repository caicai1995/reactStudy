import React from 'react'
import {Table,Card} from 'antd'
import axios from './../../axios/index'
export default class BasicTable extends React.Component{
    state={
        dataSource2:[]
    }
    componentDidMount(){
        const dataSource=[
            {
                id:'0',
                userName:'caicai',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },
            {
                id:'2',
                userName:'niuniu',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },
            {
                id:'1',
                userName:'koukou',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },{
                id:'0',
                userName:'caicai',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },
            {
                id:'2',
                userName:'niuniu',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },
            {
                id:'1',
                userName:'koukou',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },{
                id:'0',
                userName:'caicai',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },
            {
                id:'2',
                userName:'niuniu',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },
            {
                id:'1',
                userName:'koukou',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },{
                id:'0',
                userName:'caicai',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },
            {
                id:'2',
                userName:'niuniu',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },
            {
                id:'1',
                userName:'koukou',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },{
                id:'0',
                userName:'caicai',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },
            {
                id:'2',
                userName:'niuniu',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京'
            },
            {
                id:'1',
                userName:'koukou',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2001-06-12',
                age:'18',
                address:'北京1'
            }
        ]
        this.setState({
            dataSource
        })
        this.request();
    }
    //动态获取mock数据
    // request=()=>{
    //     let baseUrl="https://www.easy-mock.com/mock/5deb9f4a540df674614c9b4e/mockapi";
    //     axios.get(baseUrl+'/table/list').then((res)=>{
    //         console.log(res);
    //         console.log(JSON.stringify(res));
    //         if(res.status==='200'){
    //             this.setState({
    //                 dataSource2:res.data.result
    //             })
    //         }
    //     })
    // }
    request=()=>{
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:1
                }
            }
        }).then((res)=>{
            if(res.code===0){
                this.setState({
                    dataSource2:res.result
                })
            }
        })
    }
    render(){
        const columns=[
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },{
                title:'性别',
                dataIndex:'sex'
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title:'爱好',
                dataIndex:'interest'
            },
            {
                title:'性别',
                dataIndex:'sex'
            },
            {
                title:'年龄',
                dataIndex:'age'
            },
            {
                title:'地址',
                dataIndex:'address'
            }
            
        ]
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        // pagination={false}//分页
                    />
                </Card>
                <Card title="动态数据渲染表格" style={{marginTop:10}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        // pagination={false}//分页
                    />
                </Card>
            </div>
        );
    }
}