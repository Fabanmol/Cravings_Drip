import React from 'react'

import classes from './Pizza.css'
import PizzaIngredient from './PizzaIngredients/PizzaIngredient'


const pizza = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i)=>{
        return <PizzaIngredient key={igkey + i} type={igkey} />;
        });
    })
    .reduce((arr,el) => {
        return  arr.concat(el)
    },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p style={{marginTop:"32%",marginLeft:"9%"}}>Please start adding ingredients</p>
    }
    return(
        <div className={classes.Pizza} >
            <PizzaIngredient type="base" />
            <div className={classes.contain}>
            {transformedIngredients}
            </div>
        </div>
    );
};

export default pizza;