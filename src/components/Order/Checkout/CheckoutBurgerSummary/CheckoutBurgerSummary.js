import React from 'react';

import Burger from '../../../Burger/Burger';
import classes from './CheckoutBurgerSummary.css'
import Button from '../../../UI/Button/Button';

const checkoutSummary =(props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h3>We hope it tastes well !••</h3>
            <div style={{width:'100%', margin:'auto'}}> 
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger"
            clicked={props.CheckoutCancelled}>CANCEL</Button>
            <Button btnType="Success"
            clicked={props.CheckoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;