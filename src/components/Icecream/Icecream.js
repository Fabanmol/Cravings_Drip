import React from 'react'
import Aux from '../../hoc/original'
import classes from './Icecream.css'

const icecream = () => {

    return(
        <Aux>
    <div className={classes.Icecream}>
        
    <div className={classes.artboard}>
        <div className={classes.ice_cream}>
            <div className={classes.stick}></div>
            <div className={classes.shadow}></div>
            <div className={classes.line_1}></div>
            <div className={classes.line_2}></div>
            <div className={classes.line_3}></div>
            <div className={classes.shadow_1}></div>
            <div className={classes.eye}></div>
            <div className={classes.smile}>
                <div className={classes.tongue}></div>
                <div className={classes.smileshadow}></div>
            </div>
            <div className={classes.red}></div>
            <div className={classes.yellow}></div>
            <div className={classes.green}></div>
        </div>
    </div>
    </div>
        </Aux>

    );
    
}
export default icecream;