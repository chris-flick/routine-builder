import React, { Component } from 'react';

import "@ui/BottomNavigation/BottomNavigation.css"
import MaterialUIBottomNavigation from '@material-ui/core/BottomNavigation';


class BottomNavigation extends Component {
    
    render() {
        return (
            <MaterialUIBottomNavigation className='BottomNavigation'>
                {this.props.children}
            </MaterialUIBottomNavigation>
        )
    }
}

export default BottomNavigation;