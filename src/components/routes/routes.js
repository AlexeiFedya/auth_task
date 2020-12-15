
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Profile} from '../../pages/profile/Profile'
import {Login} from '../../pages/login/Login'

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
        <Switch>
            <Route path="/profile">
                <Profile/>
            </Route>
                <Redirect to="/profile" />
        </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
                <Redirect to="/" />
        </Switch>
    )
}