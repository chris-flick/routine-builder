import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'


import HistoryIcon from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Auxiliary from '@hoc/Auxiliary/Auxiliary'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import '@hoc/Layout/Layout.css';

const Layout = (props) => {

    return (
        <Auxiliary>
            <main>{ props.children }</main>
            <BottomNavigation className="BottomNavigation">
                
                <BottomNavigationAction 
                    className='NavLink'
                    component={Link}
                    to="/history"
                    label='History' 
                    value='history' 
                    icon={<HistoryIcon />}>
                </BottomNavigationAction>
                
                <BottomNavigationAction 
                    className='NavLink'
                    component={Link}
                    to="/"
                    label='Add Routine' 
                    value='add_routine' 
                    icon={<AddCircle />}>
                </BottomNavigationAction>

                <BottomNavigationAction 
                    className='NavLink'
                    component={Link}
                    to="/profile"
                    label='Profile' 
                    value='profile' 
                    icon={<AccountCircle />}>
                </BottomNavigationAction>
            </BottomNavigation>
        </Auxiliary>
    )
}

export default Layout;