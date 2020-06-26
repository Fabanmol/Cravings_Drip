import React from 'react';

import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggler/DrawerToggle'


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={[classes.Logo,classes.DeskTopOnly].join(' ')}>
            <Logo />
        </div>
        
        <nav className={classes.DeskTopOnly}>
            <NavigationItems />
        </nav>
    </header>
) ;

export default toolbar; 