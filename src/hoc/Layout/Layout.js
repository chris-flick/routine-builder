import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import HistoryIcon from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Auxiliary from '@hoc/Auxiliary/Auxiliary'
import BottomNavigation from '@ui/BottomNavigation/BottomNavigation';
import BottomNavigationAction from '@ui/BottomNavigationAction/BottomNavigationAction';
import '@hoc/Layout/Layout.css';

const Layout = (props) => {

    return (
        <Auxiliary>
            <main>{ props.children }</main>
            <BottomNavigation className="BottomNavigation">
                <NavLink className="NavLink" to="/history">
                    <BottomNavigationAction 
                        label='History' 
                        value='history' 
                        icon={<HistoryIcon />}>
                    </BottomNavigationAction>
                </NavLink>

                <NavLink className="NavLink" to="/">
                    <BottomNavigationAction 
                        label='Add Routine' 
                        value='add_routine' 
                        icon={<AddCircle />}>
                    </BottomNavigationAction>
                </NavLink>

                <NavLink className="NavLink" to="/profile">
                    <BottomNavigationAction 
                        label='Profile' 
                        value='profile' 
                        icon={<AccountCircle />}>
                    </BottomNavigationAction>
                </NavLink>
            </BottomNavigation>
        </Auxiliary>
    )
}

export default Layout;