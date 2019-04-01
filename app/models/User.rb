class User < ApplicationRecord
  attr_writer :hikes

  has_secure_password

  has_many :favorited_hikes
  has_many :hikes, through: :favorited_hikes

  validates :email, uniqueness: {case_sensitive: false}, presence: true
  validates :username, uniqueness: {case_sensitive: false}, presence: true
  validates :firstname, :lastname, presence: true
  # validates :password, presence: true, length: { minimum: 6 }

  def add_to_favorite(hike)
    self.hikes << hike
  end


end
