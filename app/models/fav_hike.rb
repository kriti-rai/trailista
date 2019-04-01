class FavHike < ApplicationRecord
  belongs_to :user
  belongs_to :hike
end
