import React from 'react'

import Aux from '../../../hoc/original'
import classes from './HomePageItem.css'
import MainPage from './MainPage/MainPage'
import image2 from '../../../assets/Images/Welcome To Cravings Drip.svg'

const homePageItem =(props) =>{
 let Class=[classes.showClass];
 let Class2=[classes.hideClass];
 if(props.showPizzaItem || props.showBurgerItem || props.showIceCreamItem)
 {
     Class=[classes.hideClass];
     Class2=[classes.showClass];
     
 }


    return(
        <Aux>
            <div className={Class}>
                <div className={classes.heading}>
                    <img src={image2} alt={"Welcome To Cravings Drip"} className={classes.image2} />
                    {/* <img src={image1} alt={"Bon appitite"} className={classes.image1}  />     */}
                </div>
            
                <div className={classes.DisplayWrapper}>
                <div className={classes.display}><a onClick={props.pizza} ><div className={classes.Pizza}></div></a></div>
                
                <div className={classes.display}><a onClick={props.burger} ><div className={classes.Burger}></div></a></div>

                <div className={classes.display}><a onClick={props.icecream}><div className={classes.Icecream}></div></a></div>
                </div>
            </div>
            <div className={Class2}>
            <MainPage pizza={props.showPizzaItem} burger={props.showBurgerItem} icecream={props.showIceCreamItem} />
            </div>
            
        </Aux>
            
    )

    };


export default homePageItem;