import React from 'react'
import classes from './BuildControls_Icecream.css';
import BuildControl from './BuildControl_Icecream/BuildControl_Icecream'

const controls = [
    {label:'chocolate', type: 'chocolate',price:75},
    {label:'vanila', type: 'vanila',price:65},
    {label:'butterscotch', type: 'butterscotch',price:85},
    {label:'mango', type: 'mango',price:60},
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