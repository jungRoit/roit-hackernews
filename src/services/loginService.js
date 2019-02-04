import axios from 'axios';

/**
 * Function to validate username and password.
 * 
 * @param {Object} user
 */
const validateLogin = (user) => {
  return axios.post('http://localhost:7070/login', user);
}

export { validateLogin };
