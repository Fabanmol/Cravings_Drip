import React from 'react'
import classes1 from '../NavigationItems/NavigationItem/NavigationItem.css'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigatiionItems = () => (
    <ul className={classes.NavigatiionItems}>
    <li className={classes1.NavigationItem}>
                <a href="/hope_page">Home</a>
            </li>
            
        <NavigationItem link="/orders">Orders</NavigationItem> 
        

    </ul>
);

export default navigatiionItems;