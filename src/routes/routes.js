import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import {Home, Login, Register, Products, Cart} from '../containers'
import PrivateRoute from './private-route'

import { Admin } from "../containers";
import paths from "../constants/paths";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path={paths.Login} />
                <Route component={Register} path={paths.Register}/>
                <PrivateRoute exact component={Home} path={paths.Home} />
                <PrivateRoute component={Products} path={paths.ProductsPage} />
                <PrivateRoute component={Cart} path={paths.Cart} />

                <PrivateRoute component={Admin} path={paths.Order} isAdmin />
                <PrivateRoute component={Admin} path={paths.Products} isAdmin />
                <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin />
                <PrivateRoute component={Admin} path={paths.EditProduct} isAdmin />
            </Switch>
        </Router>
    )
}

export default Routes