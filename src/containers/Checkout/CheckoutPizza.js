import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/Checkout/CheckoutPizzaSummary/CheckoutPizzaSummary'
import ContactData from './ContactData/ContactDataPizza/ContactDataPizza'

class Checkout extends Component {
    
    state={
        ingredients:null,
        price:0
    }

    componentWillMount() {
        const query =new URLSearchParams(this.props.location.search);
        const ingredients ={};
        let price=0;
        for (let param of query.entries() ) {
            if(param[0].startsWith('price')){
                price=parseInt( param[0].slice(5),10);
            }
            else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients ,totalPrice: price});
    
    }

    checkoutCancelledHAndeler =() =>{

        this.props.history.goBack();

    }


    checkoutContinuedHAndeler = () =>{

        this.props.history.replace('/PizzaCheckout/contact-data')

    }

    
    render(){
        
            
        
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                CheckoutCancelled={this.checkoutCancelledHAndeler}
                CheckoutContinued={this.checkoutContinuedHAndeler} />
                <Route 
                path={this.props.match.path + '/contact-data'} 
                render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} /> )} />
            
            
            </div>
            
        );
    }
}

export default Checkout;