class Api::UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create]
  before_action :set_user, only: [:show, :add_favorite, :delete_favorite, :clear_favorites]


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
    render json: @user, status: 200
  end

  def add_favorite
    #when this action is called, create hike object and save to db
    binding.pry
    hike = Hike.new(hike_params)
    @user.add_to_favorite(hike)
    render json: @user.fav_hikes, status: 200
  end

  def delete_favorite
    hike = Hike.find(params["hike_id"])
    @user.delete_favorite(hike)
    render json: @user.fav_hikes, status: 200
  end

  def clear_favorites
    @user.remove_all_favorites
    render json: @user.fav_hikes, status: 200
  end

  private

  def set_user
    @user = @current_user
  end

  def hike_params
    params.require(:hike).permit(
      :id,
      :name,
      :summary,
      :difficulty,
      :stars,
      :starVotes,
      :location,
      :imgSqSmall,
      :imgSmall,
      :imgSmallMed,
      :imgMedium,
      :length,
      :ascent,
      :descent,
      :high,
      :low,
      :longitude,
      :latitude,
      :conditionStatus,
      :conditionDetails,
      :conditionDate
    )
  end


end
