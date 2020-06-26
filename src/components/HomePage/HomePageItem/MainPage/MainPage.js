import React, { Component } from 'react'
import {Route,  Switch } from 'react-router-dom'

import PizzaBuilder from '../../../../containers/PizzaBuilder/PizzaBuilder'
import BurgerBuilder from '../../../../containers/BurgerBuilder/BurgerBuilder';
import IcecreamBuilder from '../../../../containers/IcecreamBuilder/IcecreamBuilder'
import Aux from '../../../../hoc/original'
import CheckoutBurger from '../../../../containers/Checkout/CheckoutBurger'
import CheckoutPizza from '../../../../containers/Checkout/CheckoutPizza'
import CheckoutIceCream from '../../../../containers/Checkout/CheckOutIceCream'
import Orders from '../../../../containers/Orders/Orders'

class MainPage extends Component{
    
    render() {
        let whatToShow = null;
        let orders=<Route path="/orders" component={Orders} />;
        let checkout= null;
    if(this.props.pizza)
    {   
        whatToShow =  <Route path="/" component={PizzaBuilder} />;  
        checkout =  <Route path="/PizzaCheckout" component={CheckoutPizza} />;
    }
    if(this.props.burger)
    {
        whatToShow = <Route path="/"   component={BurgerBuilder} />;
        checkout =  <Route path="/BurgerCheckout" component={CheckoutBurger} />;

    }
    if(this.props.icecream)
    {
        whatToShow =<Route path="/" component ={IcecreamBuilder} />;
        checkout=<Route path="/IceCreamCheckout" component={CheckoutIceCream} />

    }
        return(
            <Aux>
                <Switch>
                {checkout}
                {orders}
                {whatToShow}
                </Switch>
            </Aux>
            // this.props.pizza ? <PizzaBuilder /> :<BurgerBuilder />
            
        
        )
    }
} 
    
    // props.pizza ? <PizzaBuilder /> :<BurgerBuilder />
   

export default MainPage;