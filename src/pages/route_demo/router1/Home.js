import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topic from './Topic'
export default class Home extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topic</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route path="/topics" component={Topic}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route exact={true} path="/" component={Main}></Route>
                </div>
            </HashRouter>
        );
    }
}