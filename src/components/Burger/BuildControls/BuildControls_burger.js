import React from 'react'
import classes from './BuildControls_burger.css';
import BuildControl from './BuildControl_burger/BuildControl_burger'

const controls = [
    {label:'salad', type: 'salad',price:8},
    {label:'babycorn', type: 'babycorn',price:12},
    {label:'cheese', type: 'cheese',price:15},
    {label:'meat', type: 'meat',price:10},
]

const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        <p>Current Price: <i className="fa fa-inr" aria-hidden="true"></i>  <strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(ctrl => (
            <BuildControl 
                key ={ctrl.label} 
                label={ctrl.label}  
                ingredients={props.ingredients}
                price={ctrl.price}
                added={ () =>props.ingredientAdded(ctrl.type)}
                removed={() =>props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]} />
        ))}
        <button  
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered} >ORDER NOW</button>
    </div>
)
export default buildControls