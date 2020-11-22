import React, { Component } from 'react';

import HistoryIcon from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Auxiliary from '@hoc/Auxiliary/Auxiliary'
import BottomNavigation from '@ui/BottomNavigation/BottomNavigation';
import BottomNavigationAction from '@ui/BottomNavigationAction/BottomNavigationAction';
import '@hoc/Layout/Layout.css';

class Layout extends Component {
    
    render() {

        return (
            <Auxiliary>
                <main>{ this.props.children }</main>
                <BottomNavigation>
                    <BottomNavigationAction label='History' value='history' icon={<HistoryIcon />}></BottomNavigationAction>
                    <BottomNavigationAction label='Add Routine' value='add_routine' icon={<AddCircle />}></BottomNavigationAction>
                    <BottomNavigationAction label='Profile' value='profile' icon={<AccountCircle />}></BottomNavigationAction>
                </BottomNavigation>
            </Auxiliary>
        )
    }
}

export default Layout;