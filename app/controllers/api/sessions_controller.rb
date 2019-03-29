class Api::SessionsController < ApplicationController
  skip_before_action :authenticate

  def create
    user = User.find_by(username: params["username"])
    if user && user.authenticate(params["password"])
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    end
  end

  def logout
    # binding.pry
    cookies.delete(:jwt)
    render json: { user: 'removed' }, status: 200
  end

end
