import React, { Component } from 'react'
import Layout from '../../components/Layout/Layout';
import classes from './HomePage.css'
import HomePageItem from './HomePageItem/HomePageItem';

class HomePage extends Component {
    state={
        showBurger:false,
        showPizza:false,
        showIceCream:false
    }
    
    showBurgerHandeler =() => {
        this.setState((prevstate)=>{
            return {showBurger : true,
                    showPizza:false,
                    showIceCream:false 
                }
        })
    }
    showPizzaHandeler =() => {
        this.setState((prevstate)=>{
            return {showPizza : true,
                    showBurger:false,
                    showIceCream:false    
                }
        })
    }
    showIceCreamHandeler = () =>{
        this.setState((prevstate) =>{
            return{
                
                showIceCream:true,
                showPizza:false,
                showBurger:false,
            }
        })
    }
    
    render() {
        
        return (
            <div>
            <div className={classes.HomePage}>

                <Layout className={classes.mainheading} >
          <HomePageItem 
                burger={this.showBurgerHandeler} 
                pizza={this.showPizzaHandeler}
                icecream={this.showIceCreamHandeler}
                showBurgerItem={this.state.showBurger} 
                showPizzaItem={this.state.showPizza} 
                showIceCreamItem={this.state.showIceCream} />
          
        </Layout>
            </div>
            </div>
        )
    }
}

export default HomePage
