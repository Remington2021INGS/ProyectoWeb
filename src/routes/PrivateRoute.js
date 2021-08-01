import React from 'react';
import { Route, Redirect } from "react-router-dom";
import AdminLayout from '../components/layout/AdminLayout';
import firebase from '../configs/firebase';
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

    const currentUser = firebase.auth().currentUser;

    return (
        <Route
            {...rest}
            render={routeProps =>
                currentUser ?
                    (
                        <AdminLayout>
                            <RouteComponent {...routeProps} />
                        </AdminLayout>
                    )
                    :
                    (<Redirect to={'/'} />)
            }
        />
    );
};

export default PrivateRoute;