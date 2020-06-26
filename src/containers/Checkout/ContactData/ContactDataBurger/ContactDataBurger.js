import React, { Component } from 'react'

import axios from '../../../../axios-orders'
import Spinner from '../../../../components/UI/Spinner/Spinner'
import Button from '../../../../components/UI/Button/Button'
import classes from './ContactDataBurger.css'
import Input from '../../../../components/UI/Input/Input'

class ContactData extends Component {
    state= {
        orderForm: {
           
                name:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: ''
                },
                street:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: ''
                },
                zipCode:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP Code',
                        minLength:'5'
                    },
                    value: ''
                },
                country:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: ''
                },
                email:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your E-mail'
                    },
                    value: ''
                },
                dileveryMethod:{
                    elementType: 'select',
                    elementConfig: {
                        options:[
                            { value: '', displayValue: 'Select Dilevery Type' },
                            { value: 'fastest', displayValue: 'Fastest' },
                            { value: 'cheapest', displayValue: 'Cheapest' }
                            
                        ]
                    },
                    value: ''
                },
        },
        loading:false
    }

    orderHandeler = (event) => {
        event.preventDefault();
        this.setState( {loading:true} );
        const formData ={};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier]= this.state.orderForm[formElementIdentifier].value;
        }
        const order={
            item:"Burger",
            ingredients:this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading:false});
            this.props.history.push('/');
       } )
    .catch(error =>{ 
            this.setState({loading:false});
       } )
        
    }

    inputChangedHandeler =(event, inputIdentifier) =>{
        const updatedorderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedorderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedorderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedorderForm});
        }

    render(){
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            });
        }
        
        let form = (
            <form onSubmit={this.orderHandeler}>
                    {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType} 
                            elementConfig= {formElement.config.elementConfig} 
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandeler(event, formElement.id)}
                            />
                    ))}
                    <Button btnType="Success">ORDER</Button>

                
                </form>
        );
        if(this.state.loading){
            form= <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }

}

export default ContactData;