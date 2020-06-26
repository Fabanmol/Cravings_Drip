import React, { Component } from 'react'
import Aux from '../../hoc/original'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls_burger';
import Modle from '../../components/UI/Modle/Modle'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import withErrorHandler from '../../hoc/WithErrorHandeler/WithErrorHandeler'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'


const INGREDIENT_PRICES = {
    salad:8,
    cheese: 12,
    meat : 15,
    babycorn :10
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0 ,
            babycorn: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 15,
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
            pathname:'/BurgerCheckout',
            search:'?' + queryString
        });
        
        
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
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
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredients={this.state.ingredients}
                ingredientAdded={this.addIngredirentHandeler}
                ingredientRemoved={this.removeIngredirentHandeler}
                disabled={disabledInfo} 
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandeler}
                price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios)

