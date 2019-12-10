import React from 'react'
import {Link} from 'react-router-dom'
export default class Main extends React.Component {
    render() {
        return (
            <div>
                this Main
                <Link to='/a'>aaaaaa</Link>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}