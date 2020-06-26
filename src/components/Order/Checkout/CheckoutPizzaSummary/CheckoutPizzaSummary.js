import React from 'react';

import Pizza from '../../../Pizza/Pizza';
import classes from './CcheckoutPizzaSummary.css'
import Button from '../../../UI/Button/Button';

const checkoutSummary =(props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h3>We hope it tastes well !••</h3>
            <div className={classes.pizzawrap}> 
                <Pizza ingredients={props.ingredients} />
            </div>
            <div className={classes.pizzabutton}>
                <Button btnType="Danger"
                clicked={props.CheckoutCancelled}>CANCEL</Button>
                <Button btnType="Success"
                clicked={props.CheckoutContinued}>CONTINUE</Button>
            </div>
        </div>
    )
}

export default checkoutSummary;