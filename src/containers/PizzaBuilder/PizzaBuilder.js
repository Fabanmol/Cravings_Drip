import React, { Component } from 'react'
import Aux from '../../hoc/original'
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls_Pizza';
import Modle from '../../components/UI/Modle/Modle'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/WithErrorHandeler/WithErrorHandeler'



const INGREDIENT_PRICES = {
    pepperoni:18,
    paneer: 22,
    oliven : 25,
    onions :20,
    tomato: 15
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            pepperoni:1,
            paneer: 0,
            oliven : 0,
            onions :0,
            tomato: 0
        },
        totalPrice: 50,
        purchasable:false,
        purachasing:false,
        loading:false
    }

    updatePurchaseState (ingredients) {
        
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        } ,0);

        this.setState({purchasable: sum > 0})
    }

    addIngredirentHandeler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount>=1){
            return;
        }
        const updatedCount= oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice =this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredirentHandeler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount= oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice =this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);


    }

    purchaseHandeler =() => {
        this.setState({purachasing : true});
    }
    purchaseCancelHandeler= () => {
        this.setState({purachasing :false});
    }
    purchaseContinueHandeler=()=>{
        // alert('You Continue!')
        
        const queryParam =[];
        for (let i in this.state.ingredients) {
            queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]) );
        }
        queryParam.push('price' + this.state.totalPrice);
        const queryString = queryParam.join('&');
        this.props.history.push({
            pathname:'/PizzaCheckout',
            search:'?' + queryString
        });

    }

    render() {
        const disabledInfoRemove = {
            ...this.state.ingredients
        };
        for (let key in disabledInfoRemove) {
            disabledInfoRemove[key] = disabledInfoRemove[key] <=0
        }
        const disabledInfoAdd = {
            ...this.state.ingredients
        };
        for (let key in disabledInfoAdd) {
            disabledInfoAdd[key] = disabledInfoAdd[key] ===1
        }

        let orderSummary = <OrderSummary 
        ingredients={this.state.ingredients}
        price={this.state.totalPrice.toFixed(2)}
        purchaseCanceled={this.purchaseCancelHandeler}
        purchaseContinue={this.purchaseContinueHandeler} />;

        if(this.state.loading){
            orderSummary= <Spinner />;
        }

        return (
            <Aux>
                <Modle show={this.state.purachasing} modleClosed={this.purchaseCancelHandeler}>
                    {orderSummary}
                </Modle>
                <Pizza ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredients={this.state.ingredients}
                ingredientAdded={this.addIngredirentHandeler}
                ingredientRemoved={this.removeIngredirentHandeler}
                disabled={disabledInfoRemove} 
                disabledAdd={disabledInfoAdd}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandeler}
                price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios)

