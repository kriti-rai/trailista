class Api::SessionsController < ApplicationController
  skip_before_action :authenticate

  def create
    user = User.find_by(username: params["username"])
    if user && user.authenticate(params["password"])
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    end
  end


  private

  def auth_params
    params.require(:auth).permit(:username, :password)
  end

end
