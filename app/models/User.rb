class User < ApplicationRecord
  has_secure_password

  has_many :hikes_users
  has_many :hikes, through: :hikes_users
  validates :email, uniqueness: {case_sensitive: false}, presence: true
  validates :username, uniqueness: {case_sensitive: false}, presence: true
  validates :firstname, :lastname, presence: true
  # validates :password, presence: true, length: { minimum: 6 }

  def add_to_favorite(hike)
    self.hikes << hike
  end


end
