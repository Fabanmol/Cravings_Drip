import React, { Component } from 'react'
import classes from './Modle.css'
import Aux from '../../../hoc/original';
import Backdrop from '../Backdrop/Backdrop'

class Modle extends Component{
    shouldComponentUpdate (nextProps,nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
        console.log('[Modle] willUpdate');
        
    }
    render(){
        return(
            <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modleClosed} />
        <div className={classes.Modle}
        style={{
            transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        }}>
            {this.props.children}
        </div>
    </Aux>
        )
    }
} 

export default Modle;