class Hike < ApplicationRecord
  #has title, overview, image, length, ascent, descent, ratings, difficulty, comments
  has_many :comments
end
