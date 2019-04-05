class Api::SessionsController < ApplicationController
  skip_before_action :authenticate

  def create
    user = User.find_by(username: params["username"])
    if user && user.authenticate(params["password"])
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    else
      render json: { error: {text: 'Invalid Credentials. Please try again.', type: 'error'} }, status: 404
    end
  end

  def logout
    cookies.delete(:jwt)
    render json: { user: 'removed', message: {type: "success", text: "Logged out successfully." } }, status: 200
  end

end
