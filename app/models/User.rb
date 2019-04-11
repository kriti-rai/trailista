class User < ApplicationRecord
  has_secure_password

  has_many :fav_hikes
  has_many :hikes, through: :fav_hikes

  validates :email, uniqueness: {case_sensitive: false}, presence: true
  validates :username, uniqueness: {case_sensitive: false}, presence: true
  validates :firstname, :lastname, :location, presence: true
  # validates :password, presence: true, length: { minimum: 6 }

  def add_to_favorite(hike)
    self.hikes << hike unless self.hikes.detect{|h| h.id == hike.id}
  end

  def delete_favorite(id)
    hike = self.hikes.find_by_id(id)
    self.hikes.delete(hike)
  end

  def remove_all_favorites
    self.fav_hikes.clear
  end


end
