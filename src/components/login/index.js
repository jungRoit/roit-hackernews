import React from 'react';
import './index.css';
import * as loginService from '../../services/loginService';
// import { Redirect } from 'react-router-dom';


/**
 * Login Component.
 */
class Login extends React.Component {

  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  /**
   * 
   */
  componentDidMount() {

  }

  login = (event) => {
    event.preventDefault();

    const user = {
      username: event.target.username.value,
      password: event.target.password.value
    }

    loginService.validateLogin(user).then(res => {
      if (res.data.status === 404) {
        alert('Invalid username or password'); 
        event.target.username.value = '';
        event.target.password.value = '';
      }else {
        localStorage.setItem('user', JSON.stringify(res.data));
        this.props.history.push(this.props.location.state.from.pathname);
      }
    })
      .catch(err => err );

  }

  /**
   * 
   */
  render() {

    return (
      <div className='login-box'>
        <h1>Login</h1>
        <form method='post' onSubmit={this.login}>
          <div className='form-group'>
            <label>Username</label>
            <input name='username' type='text' />
          </div>
          <div>
            <label>Password</label>
            <input name='password' type='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
       
      </div>
    )
  }
}

export default Login;
