import React from 'react'
import classes from './BuildControls_Pizza.css';
import BuildControl from './BuildControl/BuildControl_Pizza'

const controls = [
    {label:'pepperoni', type: 'pepperoni',prices:'18'},
    {label:'paneer', type: 'paneer',prices:'22'},
    {label:'oliven', type: 'oliven',prices:'25'},
    {label:'onions', type: 'onions',prices:'20'},
    {label:'tomato', type: 'tomato',prices:'15'},
]

const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        <p>Current Price: <i className="fa fa-inr" aria-hidden="true"></i>  <strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(ctrl => (
            <BuildControl 
                key ={ctrl.label} 
                label={ctrl.label}  
                ingredients={props.ingredients}
                price={ctrl.prices}
                added={ () =>props.ingredientAdded(ctrl.type)}
                removed={() =>props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
                disabledAdd={props.disabledAdd[ctrl.type]} />
        ))}
        <button  
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered} >ORDER NOW</button>
    </div>
)
export default buildControls