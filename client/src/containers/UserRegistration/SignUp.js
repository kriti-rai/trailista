import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../.././actions/userActions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      location: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data =  this.state;
    this.props.signup(data, () => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="signup">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <h3 className="card-header">Register</h3>
              <div className="card-body">
                <form className='login-form' onSubmit={ this.handleSubmit }>
                  <div className="input-group form-group">
                      <input type="text" name="username" value={ this.state.username } className="form-control" placeholder="Username"  onChange={ this.handleChange } />
                  </div>
                  <div className="input-group form-group">
                      <input type="text" name="firstname" value={ this.state.firstname } className="form-control" placeholder="First Name" onChange={ this.handleChange } />
                  </div>
                  <div className="input-group form-group">
                      <input type="text" name="lastname" value={ this.state.lastname } className="form-control" placeholder="Last Name" onChange={ this.handleChange } />
                  </div>
                  <div className="input-group form-group">
                      <input type="text" name="email" value={ this.state.email } className="form-control" placeholder="Email Address" onChange={ this.handleChange } />
                  </div>
                    <div className="input-group form-group">
                      <input type="password" name="password" value={ this.state.password } className="form-control" placeholder="Password" onChange={ this.handleChange } />
                    </div>
                    <div className="input-group form-group">
                      <input type="text" name="location" value={ this.state.location } className="form-control" placeholder="Location" onChange={ this.handleChange } />
                    </div>
                    <div className="form-group">
                    <button id="login-btn" className="form-control" type="submit">Register</button>
                    </div>
                    <div className="signup-divider">
                      <span className="divider-text">OR</span>
                    </div>
                    <div className="third-party-auth-container">
                      <div className="form-group">
                        <button id="google-signup" className="form-control" type="submit"><img id="google-icon" width="28" height="17" src="https://img.icons8.com/color/48/000000/google-logo.png"></img>Continue with Google</button>
                      </div>
                      <div className="form-group">
                        <button id="fb-signup" className="form-control" type="submit"><i id="facebook-icon" className="fab fa-facebook-square"></i>Continue with Facebook</button>
                      </div>
                    </div>
                </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
};

export default connect(null, { signup })(Register);
