import React from 'react';

function Register() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <h3 className="card-header">Register</h3>
          <div className="card-body">
            <form className='login-form'>
              <div className="input-group form-group">
                  <input type="text" className="form-control" placeHolder="Username"/>
              </div>
              <div className="input-group form-group">
                  <input type="text" className="form-control" placeHolder="First Name"/>
              </div>
              <div className="input-group form-group">
                  <input type="text" className="form-control" placeHolder="Last Name"/>
              </div>
              <div className="input-group form-group">
                  <input type="text" className="form-control" placeHolder="Email Address"/>
              </div>
                <div className="input-group form-group">
                  <input type="password" className="form-control" placeHolder="Password"/>
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
};

export default Register;
