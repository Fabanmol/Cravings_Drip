import React, { Component } from 'react'
import Aux from '../../hoc/original'
import Icecream from '../../components/Icecream/Icecream';
import BuildControls from '../../components/Icecream/BuildControls/BuildControls_Icecream';
import Modle from '../../components/UI/Modle/Modle'
import OrderSummary from '../../components/Icecream/OrderSummary/OrderSummary'
import withErrorHandler from '../../hoc/WithErrorHandeler/WithErrorHandeler'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'


const INGREDIENT_PRICES = {
    chocolate:75,
    vanila: 65,
    butterscotch : 85,
    mango:60
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            chocolate:0,
            vanila: 0,
            butterscotch :0,
            mango:0
        },
        totalPrice: 0,
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
            pathname:'/IcecreamCheckout',
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
                <Icecream ingredients={this.state.ingredients}/>
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

