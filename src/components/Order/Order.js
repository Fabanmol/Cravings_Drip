import React from 'react';

import classes from './Order.css';

const Order = (props) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients){
        ingredients.push(
            {
                name: ingredientName,
                amount:props.ingredients[ingredientName]
            }
        );
    }
    const ingredientOutput = ingredients.map(ig => {
    return <span 
    style={{
        textTransform:'capitalize',
        display:'inline-block',
        margin:'0 8px',
        border:'1px solid #ccc',
        padding:'5px',
        backgroundColor:'rgba(197, 236, 234,0.836)'
    }}
    key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return(
        <div className={classes.Order}>
            <p>Item: <strong>{props.item}</strong></p>
            <p>Ingredients: {ingredientOutput} </p>
            <p>Price: <strong><i className="fa fa-inr" aria-hidden="true"></i>{props.price.toFixed(2)} </strong> </p> 
        </div>    
    )
    
};


export default Order;