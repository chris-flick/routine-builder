import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HistoryIcon from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Auxiliary from '@hoc/Auxiliary/Auxiliary'
import {classes} from '@hoc/Layout/Layout.css';

class Layout extends Component {
    
    render() {

        return (
            <Auxiliary>
                <main>{ this.props.children }</main>
                <BottomNavigation className='BottomNavigation'>
                    <BottomNavigationAction style={{color: 'red'}} label='History' value='history' icon={<HistoryIcon />}></BottomNavigationAction>
                    <BottomNavigationAction className='BottomNavigationAction' label='Add Routine' value='add_routine' icon={<AddCircle />}></BottomNavigationAction>
                    <BottomNavigationAction className='BottomNavigationAction' label='Profile' value='profile' icon={<AccountCircle />}></BottomNavigationAction>
                </BottomNavigation>
            </Auxiliary>
        )
    }
}

export default Layout;