import React from 'react';
import {Route, Redirect } from "react-router-dom";
import firebase from '../configs/firebase';
const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    
    const currentUser = firebase.auth().currentUser;

    return (        
        <Route
            {...rest}
            render={routeProps =>
                currentUser ? 
                    (<RouteComponent {...routeProps}/>)
                :
                (<Redirect to={'/'}/>)
            }
        />
    );
};

export default PrivateRoute;