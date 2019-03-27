class Api::UsersController < ApplicationController
  skip_before_action :authenticate
  
  def create
    user = User.find_by(username: user_params[:username])

    if user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    end
  end


  private

  def auth_params
    params.require(:auth).permit(:username, :password)
  end

end
