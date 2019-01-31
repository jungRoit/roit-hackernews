import React from 'react';
import { Route, Redirect } from 'react-router-dom';


/**
 * HOC for login.
 * 

 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('user') || null;

  return (
    <Route {...rest}
      render={(props) => (
        token !== null
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
      )

      }
    />

  )
}

export default PrivateRoute;