import React from 'react';

import MainPage from '../components/HomePage/HomePageItem/MainPage/MainPage'
import { Route } from 'react-router-dom';

const goBack =() =>{
    return(
        // <MainPage />
        <Route path="/home_page" component={MainPage} /> 
    )
}

export default goBack;