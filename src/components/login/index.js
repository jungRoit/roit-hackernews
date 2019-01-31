import React from 'react';
import './index.css';
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
    event.preventDefault();

    if (event.target.username.value === this.state.username) {
      if (event.target.password.value === this.state.password) {
        const user = {
          username: this.state.username,
          password: this.state.password
        };

        localStorage.setItem('user', user);
        this.setState({isLoggedIn: true });
        this.props.history.push(this.props.location.state.from.pathname);
      } else {
        alert('Incorrect Password');
      }
    } else {
      alert('Invalid Username');
    }
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
        <button>Create a new Account</button>
      </div>
    )
  }
}

export default Login;
