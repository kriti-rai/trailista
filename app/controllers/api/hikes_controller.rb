class Api::HikesController < ApplicationController
  skip_before_action :authenticate
  # def index
  #   hp = HikingProjectService.new
  #   hikes = hp.get_hikes
  #   render json: hikes, status: 200
  # end

end
