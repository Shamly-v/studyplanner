import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

const Login = () => {
  return (
    <section className="login-section">
      <div className="login-container">
        <div className="image-container">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="image"
            alt="Sample image"
          />
        </div>

        <div className="form-container">
          <form>

            <div className="input-container">
              <label htmlFor="emailInput">Email address</label>
              <input
              className='input-login'
                type="text"
                id="emailInput"
                placeholder="Enter your email address"
              />
            </div>

            <div className="input-container">
              <label htmlFor="passwordInput">Password</label>
              <input
              className='input-login'
                type="password"
                id="passwordInput"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember me checkbox and Forgot password link */}
            <div className="checkbox-container">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="rememberCheckbox"
                />
                <label htmlFor="rememberCheckbox">Remember me</label>
              </div>
              <a href="#!" className="forgot-password-link">Forgot password?</a>
            </div>

            {/* Login button */}
            <div className="button-container">
            <Link to='/home'>
              <button type="button" className="login-button">
                Login
              </button>
              </Link>

              {/* Register link */}
              <p className="register-link">
                Don't have an account?{' '}
                <a href="#!" className="register-link-text">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
