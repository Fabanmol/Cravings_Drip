import React from 'react';

import Logo from '../../assets/Images/Logo2.png';

import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={Logo} alt="LOGO" />
    </div>
);

export default logo;