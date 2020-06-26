import React, {Component} from 'react';
import Original from '../../hoc/original' ;
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends Component {
    state = {
        showSideDrawer :false
    }

    SideDrawerCloseHandeler = () =>{
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandeler = () => {
        this.setState((prevState)=>{
            return {showSideDrawer : !prevState.showSideDrawer}
        });
    }
    

    render(){
        return(
            <Original>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandeler}/>
                <SideDrawer open={this.state.showSideDrawer} 
                closed={this.SideDrawerCloseHandeler}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Original>
        );
    }
}; 

export default Layout;