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

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <h3 className="card-header">Register</h3>
            <div className="card-body">
              <form className='login-form'>
                <div className="input-group form-group">
                    <input type="text" name="username" value={ this.state.username } className="form-control" placeholder="Username"/>
                </div>
                <div className="input-group form-group">
                    <input type="text" name="firstName" value={ this.state.firstName } className="form-control" placeholder="First Name"/>
                </div>
                <div className="input-group form-group">
                    <input type="text" name="lastName" value={ this.state.lastName } className="form-control" placeholder="Last Name"/>
                </div>
                <div className="input-group form-group">
                    <input type="text" name="email" value={ this.state.email } className="form-control" placeholder="Email Address"/>
                </div>
                  <div className="input-group form-group">
                    <input type="password" name="password" value={ this.state.password } className="form-control" placeholder="Password"/>
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
