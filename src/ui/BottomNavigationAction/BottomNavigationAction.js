import React, { Component } from 'react';

import "@ui/BottomNavigationAction/BottomNavigationAction.css"
import MaterialUIBottomNavigationAction from '@material-ui/core/BottomNavigationAction';

class BottomNavigationAction extends Component {
    
    render() {
        return (
            <MaterialUIBottomNavigationAction 
                label={this.props.label} 
                value={this.props.value} 
                icon={this.props.icon}>

                {this.props.children}

            </MaterialUIBottomNavigationAction>
        )
    }
}

export default BottomNavigationAction;