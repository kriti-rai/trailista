class Api::UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create]

  def create
    username = params["username"].downcase
    email = params["email"].downcase
    firstname = params["firstname"].capitalize
    lastname = params["lastname"].capitalize

    user = User.new(username: username, email: email, password: params["password"], firstname: firstname, lastname: lastname, fav_hikes: [])
    if user.valid? && user.save
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    else
      render json: user.errors, status: 400
    end
  end

  def show
    user = @current_user
    render json: user, status: 200
  end

  def favorites
    hike = Hike.find(params["hike_id"])
    user = @current_user
    user.add_to_favorite(hike)
    render json: user.hikes, status: 200
  end

end
