import React from 'react';
import './index.css';
import {Redirect as Redirect } from 'react-router-dom';


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
      username: 'roit',
      password: '123456',
      isLoggedIn: false
    };
  }

  /**
   * 
   */
  componentDidMount() {

  }

  login = (event) => {
    if (event.target.username.value === this.state.username) {
      if (event.target.password.value === this.state.password) {
        alert('login Succesful');
        localStorage.setItem('token', '123456');
        this.props.history.push('/');
      } else {
        alert('Incorrect Password');
      }
    } else {
      alert('Invalid Username');
    }
    event.preventDefault();
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
        <a href='#'>Create a new Account</a>
      </div>
    )
  }
}

export default Login;
