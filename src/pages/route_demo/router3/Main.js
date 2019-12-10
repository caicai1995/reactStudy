import React from 'react'
import {Link} from 'react-router-dom'
export default class Main extends React.Component {
    render() {
        return (
            <div>
                this Main
                <br/>
                <Link to='/main/test-id'>aaaaaa1</Link>
                <br />
                <Link to='/main/456'>aaaa2aa</Link>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}