class Api::UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create]
  before_action :set_user, only: [:show, :add_favorite, :delete_favorite, :clear_favorites]


  def create
    username = params["username"].downcase
    email = params["email"].downcase
    firstname = params["firstname"].capitalize
    lastname = params["lastname"].capitalize
    location = params["location"]

    user = User.new(username: username, email: email, password: params["password"], firstname: firstname, lastname: lastname, location: location, fav_hikes: [])
    if user.valid? && user.save
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    else
      errors = []
      user.errors.full_messages.each do |msg|
        errors << {text: msg, type: "error"}
      end
      render json: errors, status: 400
    end
  end

  def show
    render json: @user, status: 200
  end

  def add_favorite
    hike = Hike.find_by_id(hike_params["id"]) || Hike.new(hike_params) #checks if the hike exists in hikes table, if not creates one
    if @user.hikes.detect{|h| h.id == hike.id}
      render json: {text: "You have already favorited this hike", type: "error"}, status: 405
    else
      @user.add_to_favorite(hike)
      render json: @user.hikes, status: 200
    end
  end

  def delete_favorite
    #deletes @user's favorite hike by id
    @user.delete_favorite(params["hike_id"])
    render json: @user.hikes, status: 200
  end

  def clear_favorites
    #clears all favorites associated to @user
    @user.remove_all_favorites
    render json: @user.hikes, status: 200
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
