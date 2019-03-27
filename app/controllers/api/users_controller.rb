class Api::UsersController < ApplicationController
  skip_before_action :authenticate
  
  def create
    user = User.new(user_params)

    if user.valid? && user.save
      render json: user
    else
      render json: user.errors, status: 400
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :firstname, :lastname)
  end

end
