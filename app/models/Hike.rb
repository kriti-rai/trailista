class Hike < ApplicationRecord
  #has title, overview, image, length, ascent, descent, ratings, difficulty, comments
  has_many :comments
  has_many :fav_hikes
  has_many :users, through: :fav_hikes
end
