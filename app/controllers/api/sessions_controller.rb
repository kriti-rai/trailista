class Api::SessionsController < ApplicationController
  skip_before_action :authenticate

  def create
    user = User.find_by(username: params["username"])
    if user && user.authenticate(params["password"])
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt, message: "Logged in successfully"}
    else
      render json: {message: { type: "error", text: "The userID and password combination does not match" } }
    end
  end

  def logout
    cookies.delete(:jwt)
    render json: { user: 'removed', message: {type: "success", text: "Logged out successfully" } }, status: 200
  end

end
