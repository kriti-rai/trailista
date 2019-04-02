class User < ApplicationRecord

  has_secure_password

  has_many :fav_hikes
  has_many :hikes, through: :fav_hikes

  validates :email, uniqueness: {case_sensitive: false}, presence: true
  validates :username, uniqueness: {case_sensitive: false}, presence: true
  validates :firstname, :lastname, presence: true
  # validates :password, presence: true, length: { minimum: 6 }

  def fav_hikes
    self.hikes
  end

  def fav_hikes=(hike)
    self.add_to_favorite(hike)
  end

  def add_to_favorite(hike)
    self.fav_hikes << hike unless self.fav_hikes.detect{|fav_hike| fav_hike.id == hike.id}
  end

  def remove_favorite(hike)
    self.fav_hikes.delete_if{|fav_hike| fav_hike.id == hike.id}
  end

  def remove_all_favorites
    self.fav_hikes.clear
  end


end
