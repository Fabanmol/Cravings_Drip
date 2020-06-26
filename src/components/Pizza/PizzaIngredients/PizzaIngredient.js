import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classes from './PizzaIngredient.css';


class BurgerIngredient extends Component {
    render (){

        let ingredient = null;
    switch (this.props.type){
        case ('base'):
            ingredient= <div className={classes.Base}></div>;
            break; 
        case('pepperoni'):
            ingredient= (<div className={classes.PepperoniLayer}>
            <div className={[classes.Pepperoni , classes.Pepperoni1].join(' ')}>
                <div className={[classes.PepperoniDot , classes.dot1].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot2].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot3].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot4].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot5].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot6].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot7].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot8].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot9].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot10].join(' ')}></div>
            </div>
            
            <div className={[classes.Pepperoni , classes.Pepperoni2].join(' ')}>
                <div className={[classes.PepperoniDot , classes.dot1].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot2].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot3].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot4].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot5].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot6].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot7].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot8].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot9].join(' ')}></div>
                <div className={[classes.PepperoniDot , classes.dot10].join(' ')}></div>
            </div>
            
            <div  className={[classes.Pepperoni ,  classes.Pepperoni3].join(' ')}>
                <div className={[classes.PepperoniDot ,  classes.dot1].join(' ')}></div>
                <div className={[classes.PepperoniDot ,  classes.dot2].join(' ')}></div>
                <div className={[classes.PepperoniDot ,  classes.dot3].join(' ')}></div>
                <div className={[classes.PepperoniDot ,  classes.dot4].join(' ')}></div>
                <div className={[classes.PepperoniDot ,  classes.dot5].join(' ')}></div>
                <div className={[classes.PepperoniDot ,  classes.dot6].join(' ')}></div>
                <div className={[classes.PepperoniDot ,  classes.dot7].join(' ')}></div>
                <div className={[classes.PepperoniDot ,  classes.dot8].join(' ')}></div>
                <div className={[classes.PepperoniDot ,  classes.dot9].join(' ')}></div>
                <div className={[classes.PepperoniDot ,  classes.dot10].join(' ')}></div>
            </div>
            
            <div  className={[classes.Pepperoni ,  classes.Pepperoni4].join(' ')}>
            <div className={[classes.PepperoniDot ,  classes.dot1].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot2].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot3].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot4].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot5].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot6].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot7].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot8].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot9].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot10].join(' ')}></div>
            </div>
            
            <div  className={[classes.Pepperoni ,  classes.Pepperoni5].join(' ')}>
            <div className={[classes.PepperoniDot ,  classes.dot1].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot2].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot3].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot4].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot5].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot6].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot7].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot8].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot9].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot10].join(' ')}></div>
            </div>
            
            <div  className={[classes.Pepperoni ,  classes.Pepperoni6].join(' ')}>
            <div className={[classes.PepperoniDot ,  classes.dot1].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot2].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot3].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot4].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot5].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot6].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot7].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot8].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot9].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot10].join(' ')}></div>
            </div>
            
            <div  className={[classes.Pepperoni ,  classes.Pepperoni7].join(' ')}>
            <div className={[classes.PepperoniDot ,  classes.dot1].join(' ')}></div>
            <div className={[classes.PepperoniDot ,  classes.dot2].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot3].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot4].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot5].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot6].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot7].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot8].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot9].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot10].join(' ')}></div>
            </div>
            
            <div  className={[classes.Pepperoni  ,  classes.Pepperoni8].join(' ')}>
            <div className={[classes.PepperoniDot  ,  classes.dot1].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot2].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot3].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot4].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot5].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot6].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot7].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot8].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot9].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot10].join(' ')}></div>
            </div>
            
            <div  className={[classes.Pepperoni  ,  classes.Pepperoni9].join(' ')}>
            <div className={[classes.PepperoniDot  ,  classes.dot1].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot2].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot3].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot4].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot5].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot6].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot7].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot8].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot9].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot10].join(' ')}></div>
            </div>
            
            <div  className={[classes.Pepperoni  ,  classes.Pepperoni10].join(' ')}>
            <div className={[classes.PepperoniDot  ,  classes.dot1].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot2].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot3].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot4].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot5].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot6].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot7].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot8].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot9].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot10].join(' ')}></div>
            </div>
            
            <div  className={[classes.Pepperoni  ,  classes.Pepperoni11].join(' ')}>
            <div className={[classes.PepperoniDot  ,  classes.dot1].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot2].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot3].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot4].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot5].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot6].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot7].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot8].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot9].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot10].join(' ')}></div>
            </div>
            
            <div  className={[classes.Pepperoni  ,  classes.Pepperoni12].join(' ')}>
            <div className={[classes.PepperoniDot  ,  classes.dot1].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot2].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot3].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot4].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot5].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot6].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot7].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot8].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot9].join(' ')}></div>
            <div className={[classes.PepperoniDot  ,  classes.dot10].join(' ')}></div>
            </div>
        </div> );
            break;
        case('paneer'):
            ingredient= (<div className={classes.paneerlayer}>
            <div className={[classes.paneer  ,  classes.paneer1].join(' ')}></div>
            <div className={[classes.paneer  ,  classes.paneer2].join(' ')}></div>
            <div className={[classes.paneer  ,  classes.paneer3].join(' ')}></div>
            <div className={[classes.paneer  ,  classes.paneer4].join(' ')}></div>
            <div className={[classes.paneer  ,  classes.paneer5].join(' ')}></div>
            <div className={[classes.paneer  ,  classes.paneer6].join(' ')}></div>
            <div className={[classes.paneer  ,  classes.paneer7].join(' ')}></div>
    
        </div>);
            break;
        case('oliven'):
            ingredient= (<div className={classes.olivenLayer}>
            <div className={[classes.oliven  ,  classes.oliven1].join(' ')}></div>
            <div className={[classes.oliven  ,  classes.oliven2].join(' ')}></div>
            <div className={[classes.oliven  ,  classes.oliven3].join(' ')}></div>
            <div className={[classes.oliven  ,  classes.oliven4].join(' ')}></div>
            <div className={[classes.oliven  ,  classes.oliven5].join(' ')}></div>
            <div className={[classes.oliven  ,  classes.oliven6].join(' ')}></div>
            <div className={[classes.oliven  ,  classes.oliven7].join(' ')}></div>
            <div className={[classes.oliven  ,  classes.oliven8].join(' ')}></div>
            <div className={[classes.oliven  ,  classes.oliven9].join(' ')}></div>
          
        </div>);
            break;  
        case('onions'):
            ingredient= (<div className={classes.onionlayer}>
            <div className={[classes.onion  ,  classes.onion1].join(' ')}></div>
            <div className={[classes.onion  ,  classes.onion2].join(' ')}></div>
            <div className={[classes.onion  ,  classes.onion3].join(' ')}></div>
            <div className={[classes.onion  ,  classes.onion4].join(' ')}></div>
            <div className={[classes.onion  ,  classes.onion5].join(' ')}></div>
            <div className={[classes.onion  ,  classes.onion6].join(' ')}></div>
            <div className={[classes.onion  ,  classes.onion7].join(' ')}></div>
        </div>);
            break;
        case('tomato'):
            ingredient= (<div className={classes.tomatoLayer}>
    
            <div  className={[classes.tomato  ,  classes.tomato1].join(' ')}>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine1].join(' ')}></div>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine2].join(' ')}></div>
                
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed1].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed2].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed3].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed4].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed5].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed6].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed7].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed8].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed9].join(' ')}></div>
            </div>
            
            <div  className={[classes.tomato  ,  classes.tomato2].join(' ')}>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine1].join(' ')}></div>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine2].join(' ')}></div>
                
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed1].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed2].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed3].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed4].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed5].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed6].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed7].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed8].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed9].join(' ')}></div>
            </div>
            
            <div  className={[classes.tomato  ,  classes.tomato3].join(' ')}>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine1].join(' ')}></div>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine2].join(' ')}></div>
                
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed1].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed2].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed3].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed4].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed5].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed6].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed7].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed8].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed9].join(' ')}></div>
            </div>
            
            <div  className={[classes.tomato  ,  classes.tomato4].join(' ')}>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine1].join(' ')}></div>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine2].join(' ')}></div>
                
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed1].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed2].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed3].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed4].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed5].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed6].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed7].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed8].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed9].join(' ')}></div>
            </div>
            
            <div  className={[classes.tomato  ,  classes.tomato5].join(' ')}>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine1].join(' ')}></div>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine2].join(' ')}></div>
                
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed1].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed2].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed3].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed4].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed5].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed6].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed7].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed8].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed9].join(' ')}></div>
            </div>
            
            <div  className={[classes.tomato  ,  classes.tomato6].join(' ')}>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine1].join(' ')}></div>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine2].join(' ')}></div>
                
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed1].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed2].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed3].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed4].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed5].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed6].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed7].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed8].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed9].join(' ')}></div>
            </div>
            
            <div  className={[classes.tomato  ,  classes.tomato7].join(' ')}>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine1].join(' ')}></div>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine2].join(' ')}></div>
                
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed1].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed2].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed3].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed4].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed5].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed6].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed7].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed8].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed9].join(' ')}></div>
            </div>
            
            <div  className={[classes.tomato  ,  classes.tomato8].join(' ')}>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine1].join(' ')}></div>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine2].join(' ')}></div>
                
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed1].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed2].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed3].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed4].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed5].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed6].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed7].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed8].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed9].join(' ')}></div>
            </div>
            
            <div  className={[classes.tomato  ,  classes.tomato9].join(' ')}>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine1].join(' ')}></div>
                <div className={[classes.tomatoLine  ,  classes.tomatoLine2].join(' ')}></div>
                
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed1].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed2].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed3].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed4].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed5].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed6].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed7].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed8].join(' ')}></div>
                <div className={[classes.tomatoSeed  ,  classes.tomatoSeed9].join(' ')}></div>
            </div>
        </div>);
            break;
        default:
            ingredient = null;
    
        
    }

    return ingredient;
    }

}

BurgerIngredient.propTypes={
    type: PropTypes.string.isRequired ,
};

export default BurgerIngredient;