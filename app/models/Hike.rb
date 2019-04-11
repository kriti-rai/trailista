class Hike < ApplicationRecord
  has_many :fav_hikes
  has_many :users, through: :fav_hikes
end
