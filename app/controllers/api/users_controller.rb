class Api::UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create]

  def create
    user = User.new(user_params)

    if user.valid? && user.save
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    else
      render json: user.errors, status: 400
    end
  end

  def show
    user = @current_user
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password_digest, :firstname, :lastname)
  end

  # def authenticate
  #   authenticate_or_request_with_http_token do |token, options|
  #     User.find_by(auth_token: token)
  #   end
  # end

end
