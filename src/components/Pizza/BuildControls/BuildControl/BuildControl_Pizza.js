import React from 'react'

import classes from './BuildControl_Pizza.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}> 
            <span style={{ textTransform: 'capitalize'}}>
                {props.label}   (Rs.{props.price}) : {props.ingredients[props.label]}
            </span>
        </div>
        <button className={classes.Less} 
                onClick={props.removed} 
                disabled={props.disabled} >Remove</button>
        <button className={classes.More} 
                onClick={props.added}
                disabled={props.disabledAdd} >Add</button>
    </div>

);

export default buildControl;