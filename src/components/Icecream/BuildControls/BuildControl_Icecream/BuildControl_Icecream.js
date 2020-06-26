import React from 'react'

import classes from './BuildControl_Icecream.css'

const buildControl = (props) => {
    return(
    <div className={classes.BuildControl}>
        <div className={classes.Label}><span style={{ textTransform: 'capitalize',display:'inline-block'}}>
            {props.label} (Rs.{props.price}) : {props.ingredients[props.label]}</span></div>
        <button className={classes.Less} 
                onClick={props.removed} 
                disabled={props.disabled} >Less</button>
        <button className={classes.More} 
                onClick={props.added} >More</button>
    </div>
    );

};

export default buildControl;