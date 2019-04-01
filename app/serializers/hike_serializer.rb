class HikeSerializer < ActiveModel::Serializer
  attributes :id, :title, :overview, :image, :length, :ascent, :descent, :ratings, :difficulty
end
