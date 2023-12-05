import React from "react";
import { Route, Redirect } from 'react-router-dom'
import {Header} from '../components'

import PropTypes from 'prop-types'
import paths from "../constants/paths";

function PrivateRoute({ component, isAdmin, ...rest }) {

    const user = localStorage.getItem('codeburger:userData')

    if (!user) {
        return <Redirect to={paths.Login} />
    }

    if(isAdmin && !JSON.parse(user).admin){
        return <Redirect to={paths.Home} />
    }
    
    return (
        <>
            {!isAdmin && <Header />}
            <Route {...rest} component={component} />
        </>
    )
}

export default PrivateRoute

PrivateRoute.prototype = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
}