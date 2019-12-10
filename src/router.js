import React from 'react'
import App from './App'
import Admin from './admin'
import Home from './pages/home'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notification from './pages/ui/notification'
import Message from './pages/ui/message'
import Tab from './pages/ui/tab'
import Gallery from './pages/ui/gallery'
import Carousels from './pages/ui/carousel'

import FormLogin from './pages/form/login'
import Register from './pages/form/register'

import BasicTable from './pages/table/basic'
import HighTable from './pages/table/high'
import {HashRouter,Route,Switch} from 'react-router-dom'
import NoMatch from './pages/nomatch'
export default class IRouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    {/* 平级关系 */}
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/admin/home' component={Home} />
                                <Route path="/admin/ui/carousel" component={Carousels} />
                                <Route path="/admin/ui/gallery" component={Gallery} />
                                <Route path="/admin/ui/tabs" component={Tab} />
                                <Route path="/admin/ui/messages" component={Message} />
                                <Route path="/admin/ui/notification" component={Notification} />
                                <Route path="/admin/ui/loadings" component={Loading} />
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                <Route path="/admin/form/login" component={FormLogin} />
                                <Route path="/admin/form/reg" component={Register} />
                                <Route path="/admin/table/basic" component={BasicTable} />
                                <Route path="/admin/table/high" component={HighTable} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/order/detail" component={Login} />
                </App>
            </HashRouter>
        );
    }
}