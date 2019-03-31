class Hike < ApplicationRecord
  #has title, overview, image, length, ascent, descent, ratings, difficulty, comments
  has_many :comments
  has_many :hikes_users
  has_many :users, through: :hikes_users
end
