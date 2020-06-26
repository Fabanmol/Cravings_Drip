import React, { Component } from 'react'

import Modle from '../../components/UI/Modle/Modle';
import Aux from '../original'


const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component{
        state = {
            error: null
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res =>res,error => {
                this.setState({error: error});
            });
        }
        componentWillUnmount (){
            
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandeler = () => {
            this.setState({error : null})
        }

        render(){
            return(
                <Aux>
                <Modle show={this.state.error}
                modleClosed={this.errorConfirmedHandeler}> 
                    {this.state.error ? this.state.error.message : null}
                
                </Modle>
                <WrappedComponent {...this.props} />
            </Aux>
            )
        }
    } 
}

export default withErrorHandler;