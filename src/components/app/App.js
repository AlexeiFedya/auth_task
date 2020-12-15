import React from 'react';
// import {Redirect, Route, Switch} from 'react-router-dom';
import {useRoutes} from '../routes/routes'
import {Header} from '../header/Header'
import {useAuth} from '../../hooks/auth.hooks'
import {AuthContext} from '../../context/Auth.context'

function App() {

  const {login, logout, token} = useAuth()

  const isAuthenticated = !!token; // Boolean(value)

  const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{ login, logout, token, isAuthenticated}}>
      <Header isAuthenticated={isAuthenticated} />
      {routes}
    </AuthContext.Provider>
  );
}

export default App
