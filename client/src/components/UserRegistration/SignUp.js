import React, { Component } from 'react';

class Register extend Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <h3 className="card-header">Register</h3>
            <div className="card-body">
              <form className='login-form'>
                <div className="input-group form-group">
                    <input type="text" name="username" value={ this.state.username } className="form-control" placeholder="Username"  onChange={ this.handleChange } />
                </div>
                <div className="input-group form-group">
                    <input type="text" name="firstName" value={ this.state.firstName } className="form-control" placeholder="First Name" onChange={ this.handleChange } />
                </div>
                <div className="input-group form-group">
                    <input type="text" name="lastName" value={ this.state.lastName } className="form-control" placeholder="Last Name" onChange={ this.handleChange } />
                </div>
                <div className="input-group form-group">
                    <input type="text" name="email" value={ this.state.email } className="form-control" placeholder="Email Address" onChange={ this.handleChange } />
                </div>
                  <div className="input-group form-group">
                    <input type="password" name="password" value={ this.state.password } className="form-control" placeholder="Password" onChange={ this.handleChange } />
                  </div>
                  <div className="form-group">
                    <input className="button login_btn" type="submit" value="Sign Up"/>
                  </div>
              </form>
              </div>
            </div>
          </div>
      </div>
    )
  }
};

export default Register;
