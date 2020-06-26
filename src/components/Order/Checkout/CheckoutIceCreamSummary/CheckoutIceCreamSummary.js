import React from 'react';

import IceCream from '../../../Icecream/Icecream';
import classes from './CheckoutIceCreamSummary.css'
import Button from '../../../UI/Button/Button';

const checkoutSummary =(props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h3 style={{padding:'10px',marginTop:'10px',border:'1px solid #000',borderRadius:'10px', backgroundColor:'#eee'}}>We hope it tastes well !••</h3>
            <div > 
                <IceCream ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger"
            clicked={props.CheckoutCancelled} style={{backgroundColor:'rgb(214, 28, 28)'}}>CANCEL</Button>
            <Button btnType="Success"
            clicked={props.CheckoutContinued} style={{backgroundColor:'rgb(58, 238, 73)'}}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;