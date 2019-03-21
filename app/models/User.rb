class User < ApplicationRecord
  has_secure_password
  #has username, firstname, lastname, email, password_digest, image

  # has_many :favorites
end
