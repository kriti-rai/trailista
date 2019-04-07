class HikeSerializer < ActiveModel::Serializer
  attributes :id, :name, :summary, :imgMedium, :length, :ascent, :descent, :stars, :difficulty, :longitude, :latitude, :conditionStatus, :conditionDetails, :location
end
