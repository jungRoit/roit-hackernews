import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const token = localStorage.getItem('token') || null;

// const toggleIsLogin = () => {
//   isLoggedIn = !isLoggedIn;
// }

/**
 * HOC for login.
 * 

 */
const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest}
      render={(props) => (
        token !== null
          ? <Component {...props} />
          : <Redirect to='/login' />
      )

      }
    />

  )
}

export default PrivateRoute;