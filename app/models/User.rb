class User < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: {case_sensitive: false}, presence: true
  validates :username, uniqueness: {case_sensitive: false}, presence: true
  validates :firstname, :lastname, presence: true
  validates :password_digest, presence: true, length: { minimum: 6 }
  #has username, firstname, lastname, email, password_digest, image

  # has_many :favorites
end
