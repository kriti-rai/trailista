class Api::HikesController < ApplicationController
  skip_before_action :authenticate
  def index
    render json: Hike.all
  end

end
